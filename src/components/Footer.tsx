import { Instagram, MapPin } from "lucide-react";
import { EXPERT_DATA } from "../constants";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-premium-cream border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif font-medium mb-2">Dra. {EXPERT_DATA.name}</h3>
          <p className="text-gray-500 text-sm mb-4">{EXPERT_DATA.profession}</p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 text-sm">
            <MapPin size={16} className="text-premium-gold" />
            <span>{EXPERT_DATA.city}</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a
              href={EXPERT_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:text-premium-gold transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {EXPERT_DATA.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
