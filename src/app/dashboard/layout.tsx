import { AppSidebar } from "@/app/dashboard/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="overflow-hidden">
      <AppSidebar />
      <SidebarInset className="flex flex-col h-full overflow-auto">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
