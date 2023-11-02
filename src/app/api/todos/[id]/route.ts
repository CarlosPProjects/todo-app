import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

import { TodosProps } from "@/utils/types";
import { connect } from "@/utils/connection";
import Todos from "@/models/todos";

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: ObjectId } }
) {
  const { title }: TodosProps = await request.json();
  await connect();
  await Todos.updateOne({ _id: id }, { title });
  return NextResponse.json({ message: "Task updated" }, { status: 200 });
}
