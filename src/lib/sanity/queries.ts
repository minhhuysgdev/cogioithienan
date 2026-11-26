import { groq } from "next-sanity";

export const servicesQuery = groq`*[_type == "service"] | order(order asc, title asc) {
  "slug": slug.current,
  title,
  summary,
  description,
  "image": coalesce(image.asset->url, "")
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  summary,
  description,
  "image": coalesce(image.asset->url, "")
}`;

export const productsQuery = groq`*[_type == "product"] | order(title asc) {
  "slug": slug.current,
  title,
  summary,
  description,
  category,
  "image": coalesce(image.asset->url, "")
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  summary,
  description,
  category,
  "image": coalesce(image.asset->url, "")
}`;

export const projectsQuery = groq`*[_type == "project"] | order(year desc, title asc) {
  "slug": slug.current,
  title,
  location,
  summary,
  description,
  year,
  "image": coalesce(image.asset->url, "")
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  location,
  summary,
  description,
  year,
  "image": coalesce(image.asset->url, "")
}`;

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  body,
  publishedAt,
  "image": coalesce(image.asset->url, "")
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  excerpt,
  body,
  publishedAt,
  "image": coalesce(image.asset->url, "")
}`;
