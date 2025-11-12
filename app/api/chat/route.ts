import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { messages, context } = await request.json();

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Groq API key not configured" },
        { status: 500 }
      );
    }

    // Build system message based on context
    let systemMessage = "Bạn là một trợ lý học tiếng Nhật thông minh và thân thiện. Hãy trả lời các câu hỏi về tiếng Nhật, ngữ pháp, từ vựng, và văn hóa Nhật Bản một cách chi tiết và dễ hiểu.";

    if (context) {
      if (context.type === "video") {
        systemMessage = `Bạn là trợ lý học tập cho bài học "${context.videoTitle}" về chủ đề "${context.topic}".

Kiến thức về bài học này:
${context.knowledgeBase.map((kb: any) => `- ${kb.q}: ${kb.a}`).join("\n")}

Hãy trả lời các câu hỏi của học viên dựa trên nội dung bài học này. Nếu câu hỏi nằm ngoài phạm vi bài học, hãy nhẹ nhàng hướng dẫn họ về chủ đề chính.`;
      }
    }

    // Call Groq API
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: systemMessage,
          },
          ...messages.map((msg: any) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Groq API error:", error);
      return NextResponse.json(
        { error: "Failed to get response from Groq" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const botMessage = data.choices[0].message.content;

    return NextResponse.json({ message: botMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
