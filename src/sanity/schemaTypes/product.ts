import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Sản phẩm",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tên sản phẩm", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "category", title: "Danh mục", type: "string" }),
    defineField({ name: "summary", title: "Tóm tắt", type: "text" }),
    defineField({ name: "description", title: "Mô tả", type: "text" }),
    defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true } }),
  ],
});
