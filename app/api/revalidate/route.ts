import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secret = req.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json();
  const slug = body?.slug;

  // Revalidate blog list + detail page
  revalidatePath("/blogs");
  if (slug) revalidatePath(`/blogs/${slug}`);

  return NextResponse.json({ revalidated: true });
}
