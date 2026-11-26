import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Tin tức",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tiêu đề", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", title: "Mô tả ngắn", type: "text" }),
    defineField({ name: "body", title: "Nội dung", type: "text" }),
    defineField({ name: "publishedAt", title: "Ngày đăng", type: "datetime" }),
    defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
  ],
});
