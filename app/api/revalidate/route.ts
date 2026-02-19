import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const secret = req.headers.get("x-revalidate-secret");

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const body = await req.json();
    const slug = body?.slug;
    const type = body?._type;

    // ✅ Pass "default" as second argument (Next.js 15 requirement)
    if (type) revalidateTag(type, "default");

    revalidatePath("/blogs");
    if (slug) revalidatePath(`/blogs/${slug}`);

    return NextResponse.json({ revalidated: true, slug, type });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}