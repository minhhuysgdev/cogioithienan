"use client";

import dynamic from "next/dynamic";
import { hasSanity } from "@/lib/sanity/env";

const Studio = dynamic(() => import("./Studio"), { ssr: false });

export default function StudioPage() {
  if (!hasSanity) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
        <h1 className="text-2xl font-bold text-navy">Chưa cấu hình Sanity</h1>
        <p className="max-w-md text-sm text-muted">
          Thêm <code className="rounded bg-gray-100 px-1">NEXT_PUBLIC_SANITY_PROJECT_ID</code> vào
          file <code className="rounded bg-gray-100 px-1">.env.local</code> rồi restart dev server.
          Xem hướng dẫn trong <code className="rounded bg-gray-100 px-1">DEPLOY.md</code>.
        </p>
      </div>
    );
  }

  return <Studio />;
}
