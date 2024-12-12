import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  Settings, 
  WrenchIcon, 
  PowerIcon, 
  RotateCcwIcon, 
  CogIcon 
} from 'lucide-react';

const navItems = [
  { icon: HomeIcon, label: 'Главная', href: '/' },
  { icon: WrenchIcon, label: 'Сборка', href: '/assembly' },
  { icon: WrenchIcon, label: 'Разборка', href: '/disassembly' },
  { icon: PowerIcon, label: 'Обмотка', href: '/winding' },
  { icon: RotateCcwIcon, label: 'Токарные', href: '/turning' },
  { icon: CogIcon, label: 'Прочие', href: '/other' },
  { icon: Settings, label: 'Профиль', href: '/profile' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-list">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={index}
              to={item.href}
              className={`mobile-nav-item ${isActive ? 'text-blue-600' : ''}`}
            >
              <Icon className="mobile-nav-icon" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
