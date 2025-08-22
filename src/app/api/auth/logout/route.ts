import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({
    message: "Logged out successfully",
    success: true,
  });
  response.cookies.set("token", "", { maxAge: -1 });
  return response;
}
