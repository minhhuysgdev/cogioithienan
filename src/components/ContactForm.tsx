"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          service: data.get("service"),
          note: data.get("note"),
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Gửi thất bại");
      }

      setStatus("success");
      setMessage("Đã gửi yêu cầu. Chúng tôi sẽ liên hệ sớm.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Có lỗi xảy ra. Vui lòng gọi hotline.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
          Họ và tên
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm outline-none ring-brand focus:ring-2"
          placeholder="Nguyễn Văn A"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
          Số điện thoại
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm outline-none ring-brand focus:ring-2"
          placeholder="09xx xxx xxx"
        />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
          Dịch vụ quan tâm
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm outline-none ring-brand focus:ring-2"
          defaultValue="Cho thuê xe cuốc, máy công trình"
        >
          <option>Thi công san lấp mặt bằng</option>
          <option>Cho thuê xe cuốc, máy công trình</option>
          <option>Đập phá nhà cửa, công trình cũ</option>
          <option>Đục phá bê tông</option>
          <option>Thu mua xác nhà cũ</option>
          <option>Thi công lắp đặt cống, ống nước</option>
          <option>Thi công làm đường</option>
          <option>Khác</option>
        </select>
      </div>
      <div>
        <label htmlFor="note" className="mb-1.5 block text-sm font-medium text-navy">
          Nội dung
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          className="w-full resize-y rounded-md border border-line bg-white px-3 py-2.5 text-sm outline-none ring-brand focus:ring-2"
          placeholder="Mô tả nhanh nhu cầu, địa điểm công trình..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand px-4 text-sm font-semibold text-white transition hover:bg-brand-bright disabled:opacity-60"
      >
        {status === "loading" ? "Đang gửi..." : "Nhận báo giá"}
      </button>
      {message ? (
        <p
          className={`text-sm ${status === "success" ? "text-green-700" : "text-red-600"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
