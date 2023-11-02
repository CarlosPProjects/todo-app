import Todos from "@/models/todos";
import { connect } from "@/utils/connection";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
  const { title, completed } = await request.json();
  await connect();
  await Todos.create({ title, completed });
  return NextResponse.json({ message: "Task created" }, { status: 201 });
}

export async function GET() {
  await connect();
  const todos = await Todos.find();
  return NextResponse.json({ todos }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const  { id } = await request.json();
  await connect();
  await Todos.deleteOne({ _id: id });
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
}