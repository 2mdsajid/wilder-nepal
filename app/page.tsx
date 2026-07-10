import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Shield, Star, MapPin, ChevronDown } from 'lucide-react';
import { WhatsAppButton, FloatingWhatsApp } from '@/components/whatsapp-button';
import content from '@/src/data/content.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${content.company.name} — ${content.company.tagline}`,
  description: content.hero.subheadline,
};

export default function HomePage() {
  const { company, hero, about, services, testimonials } = content;
  const whatsappGeneral = `Hi Wilder Nepal! I'd love to find out more about your water activities.`;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage}
            alt="Fewa Lake kayaking Pokhara"
            unoptimized={true}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-900/30 to-forest-900/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90 mb-8 animate-fade-in">
            <MapPin className="w-3.5 h-3.5" />
            Lakeside, Pokhara, Nepal
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 animate-fade-up text-balance">
            {hero.headline}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up text-balance">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <WhatsAppButton
              phoneNumber={company.whatsappNumber}
              message={whatsappGeneral}
              label={hero.ctaLabel}
              variant="primary"
            />
            <Link
              href="#services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-base font-medium transition-colors group"
            >
              Explore Activities
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-forest-800 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {about.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl text-sand-300 mb-1">{stat.value}</p>
              <p className="text-sm text-forest-300 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-forest-900 mb-6 leading-tight text-balance">
                {about.title}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">{about.body}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-stone-600">
                  <div className="w-8 h-8 bg-forest-50 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-forest-700" />
                  </div>
                  Certified Guides
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-600">
                  <div className="w-8 h-8 bg-forest-50 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-forest-700" />
                  </div>
                  Premium Equipment
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-600">
                  <div className="w-8 h-8 bg-forest-50 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-forest-700" />
                  </div>
                  Flexible Durations
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={about.image}
                  alt="Fewa Lake kayaking Pokhara"
                  unoptimized={true}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-forest-50 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-forest-700" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold text-forest-900">Fewa Lake, Pokhara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-4 block">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-forest-900 text-balance">
              Choose Your Adventure
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    unoptimized={true}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-2">
                    {service.duration} &middot; {service.difficulty}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-forest-900 mb-2">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="px-6 pb-6 flex items-center justify-between">
                  <p className="text-forest-700 font-semibold">{service.price}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 group-hover:gap-2.5 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-4 block">
              Traveller Reviews
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-forest-900">
              Words from the Lake
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-sand-400 fill-sand-400" />
                  ))}
                </div>
                <p className="text-stone-600 leading-relaxed mb-6 text-balance">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-forest-100 rounded-full flex items-center justify-center text-forest-700 font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-forest-900">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA banner ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/landing-page.jpg"
            alt="Fewa Lake backdrop"
            unoptimized={true}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest-900/75" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-balance">
            Ready to Hit the Water?
          </h2>
          <p className="text-white/80 text-lg mb-10 text-balance">
            Message us directly on WhatsApp and we&apos;ll confirm your session within minutes.
            No booking fees. No waiting.
          </p>
          <WhatsAppButton
            phoneNumber={company.whatsappNumber}
            message={whatsappGeneral}
            label="Book Your Session Today"
            variant="primary"
          />
        </div>
      </section>

      <FloatingWhatsApp
        phoneNumber={company.whatsappNumber}
        message={whatsappGeneral}
      />
    </>
  );
}
