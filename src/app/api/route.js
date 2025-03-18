import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Hello Server" });
};
export const POST = async (request) => {
  return NextResponse.json({ message: "Hello Server" });
};
export const DELETE = async () => {
  return NextResponse.json({ message: "Hello Server" });
};
export const PATCH = async () => {
  return NextResponse.json({ message: "Hello Server" });
};
export const PUT = async () => {
  return NextResponse.json({ message: "Hello Server" });
};
