import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Công trình",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tên công trình", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "location", title: "Địa điểm", type: "string" }),
    defineField({ name: "year", title: "Năm", type: "string" }),
    defineField({ name: "summary", title: "Tóm tắt", type: "text" }),
    defineField({ name: "description", title: "Mô tả", type: "text" }),
    defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
  ],
});
