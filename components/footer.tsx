import Link from 'next/link';
import { MapPin, Clock, Mail, Instagram, Facebook, Waves } from 'lucide-react';
import content from '@/src/data/content.json';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center">
                <Waves className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-xl text-white">{content.company.name}</span>
            </div>
            <p className="text-forest-200 text-sm leading-relaxed max-w-xs mb-6">
              {content.company.tagline}. Premium water adventures on Fewa Lake for every level of experience.
            </p>
            <div className="flex gap-3">
              <a
                href={content.company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-forest-700 hover:bg-forest-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={content.company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-forest-700 hover:bg-forest-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-forest-400 mb-4">
              Our Activities
            </h3>
            <ul className="space-y-2">
              {content.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-forest-200 hover:text-white text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-forest-400 mb-4">
              Find Us
            </h3>
            <ul className="space-y-3 text-sm text-forest-200">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <span>{content.company.location}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <span>{content.company.operatingHours}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <a
                  href={`mailto:${content.company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {content.company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-forest-500">
          <span>© {year} {content.company.name}. All rights reserved.</span>
          <span>Lakeside, Pokhara, Nepal</span>
        </div>
      </div>
    </footer>
  );
}
