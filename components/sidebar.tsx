"use client";

import { useState } from "react";
import { MessageSquare, Users, Settings, LogOut, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { currentUser } from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  activeTab: "chats" | "contacts";
  onChangeTab: (tab: "chats" | "contacts") => void;
}

export function Sidebar({ activeTab, onChangeTab }: SidebarProps) {
  return (
    <div className="flex flex-col items-center py-4 border-r w-[72px] h-full">
      <div className="mb-8">
        <Avatar className="h-10 w-10">
          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
          <AvatarFallback>{currentUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 flex flex-col items-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={activeTab === "chats" ? "default" : "ghost"}
                size="icon"
                className={cn(
                  "rounded-full",
                  activeTab === "chats" ? "" : "text-muted-foreground"
                )}
                onClick={() => onChangeTab("chats")}
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Chats</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Chats</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={activeTab === "contacts" ? "default" : "ghost"}
                size="icon"
                className={cn(
                  "rounded-full",
                  activeTab === "contacts" ? "" : "text-muted-foreground"
                )}
                onClick={() => onChangeTab("contacts")}
              >
                <Users className="h-5 w-5" />
                <span className="sr-only">Contacts</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Contacts</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground"
              >
                <PlusCircle className="h-5 w-5" />
                <span className="sr-only">New chat</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">New chat</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col items-center gap-4 mt-auto">
        <ThemeToggle />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground"
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Log out</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Log out</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}