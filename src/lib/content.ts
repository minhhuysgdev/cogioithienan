import {
  POSTS,
  PRODUCTS,
  PROJECTS,
  SERVICES,
  type Post,
  type Product,
  type Project,
  type Service,
} from "./seed";
import { client } from "./sanity/client";
import {
  postBySlugQuery,
  postsQuery,
  productBySlugQuery,
  productsQuery,
  projectBySlugQuery,
  projectsQuery,
  serviceBySlugQuery,
  servicesQuery,
} from "./sanity/queries";

async function fetchOrSeed<T>(query: string, params: Record<string, unknown>, seed: T): Promise<T> {
  if (!client) return seed;
  try {
    const data = await client.fetch<T>(query, params);
    if (Array.isArray(data) && data.length === 0) return seed;
    if (!data) return seed;
    return data;
  } catch {
    return seed;
  }
}

function normalizeService(service: Service): Service {
  return {
    ...service,
    highlights: service.highlights ?? [],
  };
}

export async function getServices(): Promise<Service[]> {
  const data = await fetchOrSeed(servicesQuery, {}, SERVICES);
  return data.map(normalizeService);
}

export async function getService(slug: string): Promise<Service | undefined> {
  const seed = SERVICES.find((s) => s.slug === slug);
  const data = await fetchOrSeed<Service | null>(serviceBySlugQuery, { slug }, seed ?? null);
  return data ?? undefined;
}

export async function getProducts(): Promise<Product[]> {
  return fetchOrSeed(productsQuery, {}, PRODUCTS);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const seed = PRODUCTS.find((p) => p.slug === slug);
  const data = await fetchOrSeed<Product | null>(productBySlugQuery, { slug }, seed ?? null);
  return data ?? undefined;
}

export async function getProjects(): Promise<Project[]> {
  return fetchOrSeed(projectsQuery, {}, PROJECTS);
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const seed = PROJECTS.find((p) => p.slug === slug);
  const data = await fetchOrSeed<Project | null>(projectBySlugQuery, { slug }, seed ?? null);
  return data ?? undefined;
}

export async function getPosts(): Promise<Post[]> {
  return fetchOrSeed(postsQuery, {}, POSTS);
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const seed = POSTS.find((p) => p.slug === slug);
  const data = await fetchOrSeed<Post | null>(postBySlugQuery, { slug }, seed ?? null);
  return data ?? undefined;
}
