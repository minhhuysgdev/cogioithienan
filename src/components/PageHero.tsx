import Image from "next/image";

type PageHeroProps = {
  title: string;
  description?: string;
  image?: string;
};

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            quality={70}
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,204,0.35),transparent_45%)]" />
      )}
      <div className="relative container-page py-14 md:py-18">
        <h1 className="font-display text-4xl font-bold tracking-tight uppercase md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-base text-white/75 md:text-lg">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
