"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Fla10Logo } from "../fla10-logo";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { LayoutDashboard, CalendarClock, Newspaper, PenSquare, Video, Menu, Home } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/proximo-jogo", label: "Atualizar Próximo Jogo", icon: CalendarClock },
  { href: "/admin/materias", label: "Gerenciar Notícias", icon: Newspaper },
  { href: "/admin/colunas", label: "Gerenciar Colunas", icon: PenSquare },
  { href: "/admin/videos", label: "Gerenciar Vídeos", icon: Video },
];

function NavLink({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-white hover:bg-gray-700",
        isActive && "bg-gray-700 text-white"
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}

function SidebarNav() {
    return (
        <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b border-gray-700 px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold text-white">
                <Fla10Logo />
                <span className="">FLA10 Admin</span>
            </Link>
        </div>
        <div className="flex-1">
            <nav className="grid items-start gap-1 px-2 text-sm font-medium lg:px-4">
                {navItems.map((item) => (
                    <NavLink key={item.href} {...item} />
                ))}
            </nav>
        </div>
        <div className="mt-auto p-4 border-t border-gray-700">
             <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-white hover:bg-gray-700">
                <Home className="h-4 w-4" />
                Voltar ao Site
            </Link>
        </div>
        </div>
    )
}

export function AdminSidebar() {
  return (
    <>
      <div className="hidden border-r border-gray-700 bg-gray-800/40 md:block md:w-64">
        <SidebarNav />
      </div>
      <header className="flex h-14 items-center gap-4 border-b bg-gray-800/40 px-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 text-white border-gray-600 bg-gray-700 hover:bg-gray-600">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-gray-800 text-white p-0 border-r-gray-700">
              <SidebarNav />
            </SheetContent>
          </Sheet>
           <Link href="/admin" className="flex items-center gap-2 font-semibold text-white">
                <Fla10Logo />
                <span className="">FLA10 Admin</span>
            </Link>
        </header>
    </>
  );
}
