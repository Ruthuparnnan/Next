import { NextResponse } from "next/server";
import { comments } from "../data";

export async function GET(_reqeust, { params }) {
  const { id } = await params;
  const comment = comments.find((item) => item.id === id);
  if (!comment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(_reqeust, { params }) {
  const { id } = await params;
  const data = await _reqeust.json();
  const { text } = data;
  const index = comments?.findIndex((item) => item?.id === id);
  comments[index] = {
    ...comments[index],
    text,
  };
  return Response.json(comments[index]);
}

export async function DELETE(_reqeust, { params }) {
  const { id } = await params;
  const index = comments?.findIndex((item) => item?.id === id);
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(comments);
}
