// Progress Tracking System for Course Progression

const PROGRESS_KEY = "course_progress";

/**
 * Get all progress data
 */
export const getAllProgress = () => {
  if (typeof window === "undefined") return {};
  const data = localStorage.getItem(PROGRESS_KEY);
  return data ? JSON.parse(data) : {};
};

/**
 * Get progress for a specific course
 */
export const getCourseProgress = (courseId) => {
  const allProgress = getAllProgress();
  return allProgress[courseId] || {};
};

/**
 * Get progress for a specific lesson
 */
export const getLessonProgress = (courseId, lessonId) => {
  const courseProgress = getCourseProgress(courseId);
  return courseProgress[lessonId] || { completed: false };
};

/**
 * Mark lesson as completed
 */
export const completeLesson = (courseId, lessonId, data = {}) => {
  const allProgress = getAllProgress();

  if (!allProgress[courseId]) {
    allProgress[courseId] = {};
  }

  allProgress[courseId][lessonId] = {
    completed: true,
    completedAt: new Date().toISOString(),
    ...data,
  };

  localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  return allProgress[courseId][lessonId];
};

/**
 * Update lesson progress (for video watch time, quiz scores, etc.)
 */
export const updateLessonProgress = (courseId, lessonId, data) => {
  const allProgress = getAllProgress();

  if (!allProgress[courseId]) {
    allProgress[courseId] = {};
  }

  allProgress[courseId][lessonId] = {
    ...allProgress[courseId][lessonId],
    ...data,
    lastUpdated: new Date().toISOString(),
  };

  localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  return allProgress[courseId][lessonId];
};

/**
 * Check if lesson is unlocked (can access)
 */
export const isLessonUnlocked = (courseId, currentLesson, allLessons) => {
  // First lesson is always unlocked
  if (currentLesson.order === 1) return true;

  // Final test requires all lessons completed
  if (currentLesson.type === "final-test") {
    const regularLessons = allLessons.filter((l) => l.type !== "final-test");
    const courseProgress = getCourseProgress(courseId);

    return regularLessons.every((lesson) => {
      const progress = courseProgress[lesson.id];
      return progress?.completed === true;
    });
  }

  // Check if previous lesson is completed
  const previousLesson = allLessons.find((l) => l.order === currentLesson.order - 1);
  if (!previousLesson) return false;

  const previousProgress = getLessonProgress(courseId, previousLesson.id);
  return previousProgress.completed === true;
};

/**
 * Calculate course completion percentage
 */
export const calculateCourseCompletion = (courseId, lessons) => {
  const courseProgress = getCourseProgress(courseId);
  const regularLessons = lessons.filter((l) => l.type !== "final-test");

  const completedCount = regularLessons.filter((lesson) => {
    const progress = courseProgress[lesson.id];
    return progress?.completed === true;
  }).length;

  return {
    completed: completedCount,
    total: regularLessons.length,
    percentage: regularLessons.length > 0
      ? Math.round((completedCount / regularLessons.length) * 100)
      : 0,
  };
};

/**
 * Check if course is fully completed (including final test)
 */
export const isCourseCompleted = (courseId, lessons) => {
  const courseProgress = getCourseProgress(courseId);

  // Check if all lessons (including final test) are completed
  return lessons.every((lesson) => {
    const progress = courseProgress[lesson.id];
    return progress?.completed === true;
  });
};

/**
 * Get next unlocked lesson after current lesson
 * @param {number} courseId - The course ID
 * @param {Array} lessons - Array of lesson objects
 * @param {string|null} [currentLessonId=null] - Current lesson ID to find next after
 * @returns {object|null} Next lesson object or null
 */
export const getNextLesson = (courseId, lessons, currentLessonId = null) => {
  // If no current lesson specified, return first incomplete lesson
  if (!currentLessonId) {
    for (const lesson of lessons) {
      const progress = getLessonProgress(courseId, lesson.id);
      if (!progress.completed && isLessonUnlocked(courseId, lesson, lessons)) {
        return lesson;
      }
    }
    return null;
  }

  // Find current lesson index
  const currentIndex = lessons.findIndex((l) => l.id === currentLessonId);
  if (currentIndex === -1) return null;

  // Find next lesson after current lesson
  for (let i = currentIndex + 1; i < lessons.length; i++) {
    const lesson = lessons[i];
    if (isLessonUnlocked(courseId, lesson, lessons)) {
      return lesson;
    }
  }

  return null; // No more lessons
};

/**
 * Reset course progress (for testing)
 */
export const resetCourseProgress = (courseId) => {
  const allProgress = getAllProgress();
  delete allProgress[courseId];
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
};

/**
 * Reset all progress (for testing)
 */
export const resetAllProgress = () => {
  localStorage.removeItem(PROGRESS_KEY);
};

// Export for debugging
if (typeof window !== "undefined") {
  window.progressTracker = {
    getAllProgress,
    getCourseProgress,
    getLessonProgress,
    completeLesson,
    updateLessonProgress,
    isLessonUnlocked,
    calculateCourseCompletion,
    resetCourseProgress,
    resetAllProgress,
  };
}
