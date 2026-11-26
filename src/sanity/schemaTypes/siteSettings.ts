import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Cài đặt website",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tên công ty", type: "string" }),
    defineField({ name: "slogan", title: "Slogan", type: "string" }),
    defineField({ name: "hotline", title: "Hotline", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "description", title: "Mô tả ngắn", type: "text" }),
  ],
});
