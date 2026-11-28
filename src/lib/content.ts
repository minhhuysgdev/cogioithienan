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

/** Giữ nội dung pillar SEO từ seed khi CMS chưa có field tương ứng. */
function mergeWithSeed(service: Service): Service {
  const seed = SERVICES.find((s) => s.slug === service.slug);
  if (!seed) return normalizeService(service);
  return normalizeService({
    ...seed,
    ...service,
    isPillar: seed.isPillar ?? service.isPillar,
    seoTitle: service.seoTitle ?? seed.seoTitle,
    seoDescription: service.seoDescription ?? seed.seoDescription,
    intro: service.intro ?? seed.intro,
    scopes: service.scopes?.length ? service.scopes : seed.scopes,
    equipment: service.equipment?.length ? service.equipment : seed.equipment,
    costFactors: service.costFactors?.length ? service.costFactors : seed.costFactors,
    steps: service.steps?.length ? service.steps : seed.steps,
    faqs: service.faqs?.length ? service.faqs : seed.faqs,
    highlights: service.highlights?.length ? service.highlights : seed.highlights,
    image: service.image || seed.image,
    shortTitle: service.shortTitle ?? seed.shortTitle,
  });
}

export async function getServices(): Promise<Service[]> {
  const data = await fetchOrSeed(servicesQuery, {}, SERVICES);
  const merged = data.map(mergeWithSeed);
  const slugs = new Set(merged.map((s) => s.slug));
  for (const seed of SERVICES) {
    if (!slugs.has(seed.slug)) merged.push(normalizeService(seed));
  }
  const order = new Map(SERVICES.map((s, i) => [s.slug, i]));
  return merged.sort((a, b) => (order.get(a.slug) ?? 99) - (order.get(b.slug) ?? 99));
}

export async function getService(slug: string): Promise<Service | undefined> {
  const seed = SERVICES.find((s) => s.slug === slug);
  const data = await fetchOrSeed<Service | null>(serviceBySlugQuery, { slug }, seed ?? null);
  if (!data && !seed) return undefined;
  return mergeWithSeed(data ?? seed!);
}

export async function getPillarServices(): Promise<Service[]> {
  const services = await getServices();
  return services.filter((s) => s.isPillar);
}

export async function getPillarService(slug: string): Promise<Service | undefined> {
  const service = await getService(slug);
  if (!service?.isPillar) return undefined;
  return service;
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
  const data = await fetchOrSeed(projectsQuery, {}, PROJECTS);
  return data.map((project) => {
    const seed = PROJECTS.find((item) => item.slug === project.slug);
    return {
      ...project,
      image: project.image || seed?.image || "",
      video: project.video || seed?.video,
      poster: project.poster || seed?.poster,
    };
  });
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
