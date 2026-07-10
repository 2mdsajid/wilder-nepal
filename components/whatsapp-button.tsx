import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  label?: string;
  variant?: 'primary' | 'floating' | 'outline';
  className?: string;
}

export function WhatsAppButton({
  phoneNumber,
  message,
  label = 'Book on WhatsApp',
  variant = 'primary',
  className = '',
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const baseClasses =
    'inline-flex items-center gap-2.5 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500';

  const variants = {
    primary:
      'bg-forest-700 hover:bg-forest-800 text-white px-8 py-4 rounded-full text-base shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-forest-700 text-forest-700 hover:bg-forest-50 px-8 py-4 rounded-full text-base',
    floating:
      'bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3.5 rounded-full text-sm shadow-xl hover:shadow-2xl',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      {label}
    </a>
  );
}

export function FloatingWhatsApp({
  phoneNumber,
  message,
}: {
  phoneNumber: string;
  message: string;
}) {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-400/40 transition-all duration-200 hover:scale-110"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </a>
  );
}
