import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="w-full border-b">
            <SidebarTrigger className="p-5 mx-3 my-2"/>
        </div>
        <div className="m-8">
            <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}