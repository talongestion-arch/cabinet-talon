import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Tous les champs sont requis." },
      { status: 400 }
    );
  }

  const contact = await prisma.contact.create({
    data: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    },
  });

  return NextResponse.json({ success: true, contact }, { status: 201 });
}
