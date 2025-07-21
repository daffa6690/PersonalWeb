import { Calendar, Home, Inbox, Search } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./ui/mode-toggle";
import { RxCross1 } from "react-icons/rx"

// Menu items.
const items = [
  {
    title: "Hero",
    url: "/dashboard/hero",
    icon: Home,
  },
  {
    title: "Tech Stack",
    url: "/dashboard/tech-stack",
    icon: Inbox,
  },
  {
    title: "Work Experience",
    url: "/dashboard/experience",
    icon: Calendar,
  },
  {
    title: "Project",
    url: "/dashboard/project",
    icon: Search,
  },
];

export function AppSidebar() {
    const {setOpen} = useSidebar()
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <RxCross1 onClick={() => {setOpen(false)}}/>
            </SidebarGroupLabel>
          <ModeToggle/>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
