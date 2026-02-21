import { NextResponse } from "next/server";

export async function GET() {
  const news = [
    {
      id: 1,
      title: "News Item 1",
      body: "This is the content of news item 1.",
    },
    {
      id: 2,
      title: "News Item 2",
      body: "This is the content of news item 2.",
    },
    {
      id: 3,
      title: "News Item 3",
      body: "This is the content of news item 3.",
    },
  ];

  return NextResponse.json(news);
}

export async function POST(request: Request) {
    const body = await request.json();
    //TODO: ADD NEWS TO mongoDb 
    return NextResponse.json({ received: body });
}
