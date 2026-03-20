import { Youtube, Linkedin, Network } from 'lucide-react';
import sobLogo from '../../assets/SOB-logo-transparent-2.webp';

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-16 mb-16">
          {/* Logo and Tagline */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="flex flex-col items-center transform group-hover:scale-105 transition-transform duration-300">
                <img src={sobLogo} alt="Student of Bitcoin Logo" decoding="async" className="h-12 object-contain" />
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              We invest, launch and scale businesses to accelerate bitcoin adoption globally. Backing the boldest ideas rethinking bitcoin.
            </p>
          </div>

          {/* Social */}
          <div className="md:min-w-[200px] flex flex-col items-center md:items-center">
            <h4 className="text-sm text-gray-900 mb-6 font-semibold uppercase tracking-wider">Connect With Us</h4>
            <div className="flex gap-4 items-center">
              {[
                { name: 'NOSTR', url: 'https://primal.net/p/npub1f7ptem2ztp9x4n7w62n90ddv40z0jrt4490d8lug3uasfwyjsccqkknerm', icon: <Network className="w-[20px] h-[20px]" /> },
                { name: 'X', url: 'https://x.com/studentofbtc', icon: (
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                )},
                { name: 'YouTube', url: 'https://www.youtube.com/@studentofbitcoin', icon: <Youtube className="w-[22px] h-[22px]" /> },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/student-of-bitcoin/', icon: <Linkedin className="w-[20px] h-[20px]" /> }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:border-[#417C5E] hover:text-[#417C5E] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 font-medium tracking-wide">
            © {new Date().getFullYear()} Student of Bitcoin. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-900 font-medium transition-colors">
              Cookies Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-900 font-medium transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
