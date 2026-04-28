 'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FolderOpen, Users, Briefcase, Banknote, FileText, BarChart3 } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { 
      label: 'Dashboard', 
      href: '/dashboard', 
      icon: LayoutDashboard,
      sezione: 'PRINCIPALE'
    },
    { 
      label: 'Casi / Lead',
      href: '/dashboard/casi',
      icon: FolderOpen,
      sezione: 'PRINCIPALE'
    },
    { 
      label: 'Progetti',
      href: '/dashboard/progetti',
      icon: Briefcase,
      sezione: 'PRINCIPALE'
    },
    { 
      label: 'Collaborazioni',
      href: '/dashboard/collaborazioni',
      icon: Users,
      sezione: 'PRINCIPALE'
    },
    { 
      label: 'Finanza',
      href: '/dashboard/finanza',
      icon: Banknote,
      sezione: 'PRINCIPALE'
    },
    { 
      label: 'Report', 
      href: '/dashboard/report', 
      icon: FileText,
      sezione: 'ANALISI'
    },
  ]

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          <div>
            <p className="font-bold text-lg">Sistema90G</p>
            <p className="text-xs text-slate-400">v3.0 Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <p className="text-xs text-slate-500 font-medium mb-2 px-3">PRINCIPALE</p>
        {menuItems.filter(i => i.sezione === 'PRINCIPALE').map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition ${
              pathname.startsWith(item.href) && item.href !== '/dashboard'
                ? 'bg-slate-800 text-white'
                : pathname === item.href
                ? 'bg-slate-800 text-white'
                : 'text-slate-300 hover:bg-slate-800/50'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}

        <p className="text-xs text-slate-500 font-medium mb-2 px-3 mt-6">ANALISI</p>
        {menuItems.filter(i => i.sezione === 'ANALISI').map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition ${
              pathname.startsWith(item.href)
              ? 'bg-slate-800 text-white'
              : 'text-slate-300 hover:bg-slate-800/50'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold">
            MR
          </div>
          <div>
            <p className="text-sm font-medium">Mario Rossi</p>
            <p className="text-xs text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}