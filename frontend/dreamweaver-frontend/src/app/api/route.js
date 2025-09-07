import { NextResponse } from "next/server";

// Temporary in-memory storage (⚠️ resets on server restart)
let dreams = [];

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, text } = body;

    if (!title || !text) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const newDream = { id: Date.now(), title, text };
    dreams.push(newDream);

    return NextResponse.json({ success: true, dream: newDream });
  } catch (error) {
    console.error("Error saving dream:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

// Optional: allow fetching all dreams
// export async function GET() {
//   return NextResponse.json({ success: true, dreams });
// }
