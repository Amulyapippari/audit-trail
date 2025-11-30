import { NextResponse } from "next/server";
import { getVersions } from "@/lib/storage";

export async function GET() {
  return NextResponse.json(getVersions());
}
