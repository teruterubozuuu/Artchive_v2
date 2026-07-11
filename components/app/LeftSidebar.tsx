//import { Gavel, Mailbox, Paintbrush, Palette, ShoppingBag } from "lucide-react";
import { Palette } from "lucide-react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { BellIcon, BuildingStorefrontIcon, EnvelopeIcon, HomeIcon, PaintBrushIcon, TicketIcon } from "@heroicons/react/24/solid";
import UserDropdown from "./UserDropdown";

export default function LeftSidebar() {
  const sidebarMenu = [
    { id: "home", label: "Home", icon: <HomeIcon /> },
    { id: "notifications", label: "Notifications", icon: <BellIcon /> },
    { id: "marketplace", label: "Marketplace", icon: <BuildingStorefrontIcon /> },
    { id: "commissions", label: "Commissions", icon: <PaintBrushIcon /> },
    { id: "art-auction", label: "Art Auction", icon: <TicketIcon /> },
    { id: "inbox", label: "Inbox", icon: <EnvelopeIcon /> },
  ];
  return (
    <Sidebar variant="floating">
      <SidebarHeader className="px-4 py-5">
        <span className="flex gap-2 uppercase font-semibold tracking-wide text-xl items-center text-foreground">
          <Palette className="text-primary" />  Artchive
        </span>
      </SidebarHeader>
      <SidebarContent className="px-4 py-3">
        <SidebarMenu className="flex flex-col h-full">
          <div className="space-y-7 flex-1">
            {sidebarMenu.map((item) => (
              <SidebarMenuItem key={item.id} className="flex gap-3 items-center">
                <span className="w-6 text-primary">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem className="bg-primary text-center font-semibold rounded-full py-2">
              Post
            </SidebarMenuItem>
          </div>
          <div>
            <UserDropdown />
          </div>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

