import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Dịch vụ",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tên dịch vụ", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "summary", title: "Tóm tắt", type: "text" }),
    defineField({ name: "description", title: "Mô tả", type: "text" }),
    defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Thứ tự", type: "number" }),
  ],
});
