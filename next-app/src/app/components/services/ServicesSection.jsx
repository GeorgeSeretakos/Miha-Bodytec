import Link from "next/link";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({
title = "",
paragraphs = [],
ctaText = "",
ctaHref = "",
services = []
}) {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        {title && <h2 className="title-teal mb-4">{title}</h2>}

        {/* Paragraphs (support HTML) */}
        {Array.isArray(paragraphs) && paragraphs.length > 0 && (
          <div className="max-w-3xl mb-8 space-y-4">
            {paragraphs.map((p, i) =>
              typeof p === "string" && /<[^>]+>/.test(p) ? (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ) : (
                <p key={i} className="text-gray-700">
                  {p}
                </p>
              )
            )}
          </div>
        )}

        {/* CTA */}
        {ctaText && (
          <div className="my-10 flex justify-center md:justify-start">
            <Link href={ctaHref || "#"} className="btn">
            {ctaText}
            </Link>
          </div>
        )}

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              iconSrc={service.iconSrc}
              iconAlt={service.iconAlt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}