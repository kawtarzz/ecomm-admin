import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }
    if (!name) {
      return new NextResponse("Label is required", { status: 400 });
    }

    const category = await prismadb.category.create({
      data: {
        name,
        storeId: params.storeId,
      }
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log('[CATEGORIES_POST]', error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }
    const categories = await prismadb.category.findMany({
      where: {
        storeId: params.storeId,
      }
    });

    return NextResponse.json([categories]);
  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}