import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import sobLogo from '../../assets/SOB-logo-transparent-2.webp';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from './ui/sheet';

export function Navigation() {
  const navLinks = ['Home', 'Accelerator', 'About Us', 'Services', 'Learn', 'Blog', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex flex-col items-center transform group-hover:scale-105 transition-transform duration-300">
              <img src={sobLogo} alt="Student of Bitcoin Logo" className="h-10 object-contain" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link, i) => (
              <a 
                key={i}
                href={`#${link.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-gray-600 hover:text-[#417C5E] transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#417C5E] group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <button className="px-6 py-2.5 bg-[#417C5E] text-white text-sm font-medium rounded-xl hover:bg-[#366851] shadow-md shadow-[#417C5E]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Speak with Us
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 text-gray-600 hover:text-[#417C5E] transition-colors focus:outline-none">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="text-left">
                      <img src={sobLogo} alt="Student of Bitcoin" className="h-8 object-contain" />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 mt-10">
                    {navLinks.map((link, i) => (
                      <a 
                        key={i}
                        href={`#${link.toLowerCase().replace(' ', '-')}`} 
                        className="text-lg font-medium text-gray-600 hover:text-[#417C5E] transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                    <button className="mt-4 w-full px-6 py-3 bg-[#417C5E] text-white font-medium rounded-xl hover:bg-[#366851] shadow-md shadow-[#417C5E]/20 transition-all duration-300 text-center">
                      Speak with Us
                    </button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
