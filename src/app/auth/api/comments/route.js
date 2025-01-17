import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(reqeust) {
  //   const searchParams = reqeust?.nextUrl?.searchParams;
  //   const query = searchParams.get("query");
  //   const filteredComments = query
  //     ? comments.filter((item) => item?.text?.includes(query))
  //     : comments;
  //   return Response.json(filteredComments);
  return new Response("<h1>killadi thenne</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}

export async function POST(reqeust) {
  const comment = await reqeust?.json();
  const newComment = {
    text: comment?.text,
    id: comments?.length + 1,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
