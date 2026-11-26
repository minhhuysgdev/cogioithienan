import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

type ContactBody = {
  name?: string;
  phone?: string;
  service?: string;
  note?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const service = (body.service || "").trim();
  const note = (body.note || "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Vui lòng nhập họ tên và số điện thoại" },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || SITE.email;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[contact]", { name, phone, service, note });
    return NextResponse.json({
      ok: true,
      message: "Đã nhận yêu cầu (chế độ demo — chưa cấu hình Resend).",
    });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Thiên Ân <onboarding@resend.dev>",
      to: [to],
      subject: `[Báo giá] ${name} — ${phone}`,
      text: [
        `Họ tên: ${name}`,
        `Điện thoại: ${phone}`,
        `Dịch vụ: ${service || "(không chọn)"}`,
        `Nội dung: ${note || "(trống)"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] resend error", error);
    return NextResponse.json(
      { ok: false, error: "Không gửi được email. Vui lòng gọi hotline." },
      { status: 500 },
    );
  }
}
