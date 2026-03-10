'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Menu, Sun, Moon, Globe } from 'lucide-react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState('zh');

  useEffect(() => {
    setMounted(true);
  }, []);

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
                className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md hover:bg-accent transition-colors"
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

          <button className="md:hidden p-2 rounded-md hover:bg-accent">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}