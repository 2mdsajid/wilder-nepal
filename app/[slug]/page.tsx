import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, Tag, Sunrise, BarChart2, Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { WhatsAppButton, FloatingWhatsApp } from '@/components/whatsapp-button';
import content from '@/src/data/content.json';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return content.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = content.services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${content.company.name}`,
      description: service.longDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = content.services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherService = content.services.find((s) => s.slug !== params.slug);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-forest-900/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Activities
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-sand-300 mb-3">
            {service.difficulty} &middot; {content.company.location}
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight text-balance">
            {service.title}
          </h1>
          <p className="text-white/80 text-xl max-w-xl text-balance">{service.shortDescription}</p>
        </div>
      </section>

      {/* ── Sticky booking bar ── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-stone-600 overflow-x-auto whitespace-nowrap">
            <span className="font-semibold text-forest-800 text-base">{service.price}</span>
            <span className="text-border">|</span>
            <span>{service.duration}</span>
            <span className="text-border">|</span>
            <span>{service.difficulty}</span>
          </div>
          <WhatsAppButton
            phoneNumber={content.company.whatsappNumber}
            message={service.whatsappMessage}
            label="Book This Activity"
            variant="primary"
            className="shrink-0 !py-2.5 !px-6 !text-sm"
          />
        </div>
      </div>

      {/* ── Main content ── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          {/* Left: Description + Gallery */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="font-display text-3xl text-forest-900 mb-5">About This Activity</h2>
              <p className="text-stone-600 text-lg leading-relaxed">{service.longDescription}</p>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="font-display text-3xl text-forest-900 mb-5">Gallery</h2>
              <div className="grid grid-cols-2 gap-3">
                {service.images.map((src, i) => (
                  <div
                    key={i}
                    className={`relative rounded-xl overflow-hidden ${
                      i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${service.title} photo ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes={i === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Specs + Includes + CTA */}
          <div className="space-y-6">
            {/* Specs card */}
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm space-y-5">
              <h3 className="font-semibold text-forest-900 text-lg">Activity Details</h3>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-forest-50 rounded-full flex items-center justify-center shrink-0">
                  <Tag className="w-4 h-4 text-forest-700" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
                  <p className="font-semibold text-forest-800">{service.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-forest-50 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-forest-700" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Duration</p>
                  <p className="font-semibold text-forest-800">{service.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-forest-50 rounded-full flex items-center justify-center shrink-0">
                  <Sunrise className="w-4 h-4 text-forest-700" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Best Time</p>
                  <p className="font-semibold text-forest-800">{service.bestTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-forest-50 rounded-full flex items-center justify-center shrink-0">
                  <BarChart2 className="w-4 h-4 text-forest-700" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Difficulty</p>
                  <p className="font-semibold text-forest-800">{service.difficulty}</p>
                </div>
              </div>
            </div>

            {/* What's included */}
            <div className="bg-forest-50 rounded-2xl border border-forest-100 p-6">
              <h3 className="font-semibold text-forest-900 text-lg mb-4">What&apos;s Included</h3>
              <ul className="space-y-3">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                    <div className="w-5 h-5 bg-forest-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="bg-forest-800 rounded-2xl p-6 text-white text-center">
              <h3 className="font-display text-2xl mb-2">Ready to Paddle?</h3>
              <p className="text-forest-200 text-sm mb-5 leading-relaxed">
                Message us on WhatsApp and we&apos;ll confirm your slot within minutes.
              </p>
              <WhatsAppButton
                phoneNumber={content.company.whatsappNumber}
                message={service.whatsappMessage}
                label="Book This Activity"
                variant="primary"
                className="w-full justify-center !bg-white !text-forest-800 hover:!bg-forest-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Other activities ── */}
      {otherService && (
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl text-forest-900 mb-8">Also on Fewa Lake</h2>
            <Link
              href={`/${otherService.slug}`}
              className="group block relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/7] overflow-hidden">
                <Image
                  src={otherService.heroImage}
                  alt={otherService.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-900/70 via-forest-900/30 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sand-300 mb-2">
                    {otherService.duration} &middot; {otherService.difficulty}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
                    {otherService.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-6">{otherService.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 bg-white text-forest-800 text-sm font-semibold px-5 py-2.5 rounded-full w-fit group-hover:bg-forest-50 transition-colors">
                    Explore Activity <ArrowLeft className="w-4 h-4 rotate-180" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <FloatingWhatsApp
        phoneNumber={content.company.whatsappNumber}
        message={service.whatsappMessage}
      />
    </>
  );
}
