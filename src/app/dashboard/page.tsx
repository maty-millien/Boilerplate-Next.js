import { ActionButtons } from "@/app/dashboard/components/action-buttons";
import { Chart01 } from "@/app/dashboard/components/chart-01";
import { Chart02 } from "@/app/dashboard/components/chart-02";
import { Chart03 } from "@/app/dashboard/components/chart-03";
import { Chart04 } from "@/app/dashboard/components/chart-04";
import { Chart05 } from "@/app/dashboard/components/chart-05";
import { Chart06 } from "@/app/dashboard/components/chart-06";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <div className="p-4 pt-0 md:p-6 md:pt-0 lg:p-8 lg:pt-0 @container">
      {/* Header bar */}
      <div className="flex flex-wrap gap-3 min-h-20 py-4 shrink-0 items-center transition-all ease-linear">
        <div className="flex flex-1 items-center gap-2">
          <SidebarTrigger className="-ms-1" />
          <div className="max-lg:hidden lg:contents">
            <Separator
              orientation="vertical"
              className="me-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <ActionButtons />
      </div>
      {/* Charts grid */}
      <div className="grid auto-rows-min @2xl:grid-cols-2 bg-border gap-[1px] *:bg-background">
        <Chart01 />
        <Chart02 />
        <Chart03 />
        <Chart04 />
        <Chart05 />
        <Chart06 />
      </div>
    </div>
  );
}
