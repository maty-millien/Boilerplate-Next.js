"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { AppSidebar } from "./components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useLockBodyScroll();
  return (
    <div className="flex flex-col overflow-hidden">
      <SidebarProvider className="h-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset className="flex flex-col overflow-auto">
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
