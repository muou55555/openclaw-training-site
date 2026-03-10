'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FileText, Brain, Sparkles, Target, Trophy, Rocket, Shield, HelpCircle, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const sections = [
  { id: 'intro', label: '开场引入', labelEn: 'Introduction', icon: FileText },
  { id: 'concept', label: '核心概念', labelEn: 'Core Concepts', icon: Brain },
  { id: 'value', label: '核心价值', labelEn: 'Core Value', icon: Sparkles },
  { id: 'scenarios', label: '应用场景', labelEn: 'Use Cases', icon: Target },
  { id: 'cases', label: '成功案例', labelEn: 'Success Stories', icon: Trophy },
  { id: 'getting-started', label: '如何开始', labelEn: 'Getting Started', icon: Rocket },
  { id: 'security', label: '安全建议', labelEn: 'Security', icon: Shield },
  { id: 'faq', label: 'Q&A', labelEn: 'Q&A', icon: HelpCircle },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeSection, setActiveSection] = useState('intro');
  const { lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold text-lg">{lang === 'zh' ? '目录' : 'Contents'}</span>
            <button onClick={onClose} className="p-2 rounded-md hover:bg-accent">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-4 space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={onClose}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === section.id
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{lang === 'zh' ? section.label : section.labelEn}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-48 shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        <nav className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{lang === 'zh' ? section.label : section.labelEn}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}