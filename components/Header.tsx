'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Menu, Sun, Moon, Globe, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <span className="text-2xl">🤖</span>
            <span>OpenClaw</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#intro" className="hover:text-primary transition-colors">
              {lang === 'zh' ? '开场' : 'Intro'}
            </Link>
            <Link href="#concept" className="hover:text-primary transition-colors">
              {lang === 'zh' ? '概念' : 'Concept'}
            </Link>
            <Link href="#value" className="hover:text-primary transition-colors">
              {lang === 'zh' ? '价值' : 'Value'}
            </Link>
            <Link href="#scenarios" className="hover:text-primary transition-colors">
              {lang === 'zh' ? '场景' : 'Scenarios'}
            </Link>
            <Link href="#cases" className="hover:text-primary transition-colors">
              {lang === 'zh' ? '案例' : 'Cases'}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <>
              <button
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm rounded-md hover:bg-accent transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{lang.toUpperCase()}</span>
              </button>

              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md hover:bg-accent transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </>
          )}

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container py-4 space-y-2">
            <Link
              href="#intro"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
            >
              {lang === 'zh' ? '开场引入' : 'Introduction'}
            </Link>
            <Link
              href="#concept"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
            >
              {lang === 'zh' ? '核心概念' : 'Core Concepts'}
            </Link>
            <Link
              href="#value"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
            >
              {lang === 'zh' ? '核心价值' : 'Core Value'}
            </Link>
            <Link
              href="#scenarios"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
            >
              {lang === 'zh' ? '应用场景' : 'Use Cases'}
            </Link>
            <Link
              href="#cases"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
            >
              {lang === 'zh' ? '成功案例' : 'Success Stories'}
            </Link>
            <Link
              href="#getting-started"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
            >
              {lang === 'zh' ? '如何开始' : 'Getting Started'}
            </Link>
            <Link
              href="#security"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
            >
              {lang === 'zh' ? '安全建议' : 'Security'}
            </Link>
            <Link
              href="#faq"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
            >
              Q&A
            </Link>
            {/* Mobile Language Toggle */}
            {mounted && (
              <div className="pt-4 border-t mt-4">
                <button
                  onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-medium">
                    {lang === 'zh' ? 'English' : '中文'}
                  </span>
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}