"use client";
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
