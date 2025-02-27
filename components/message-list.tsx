"use client";

import { useEffect, useRef } from "react";
import { Message, User } from "@/lib/data";
import { formatDetailedTime } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MessageListProps {
  messages: Message[];
  participants: User[];
}

export function MessageList({ messages, participants }: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const getUserById = (id: string) => {
    return participants.find((p) => p.id === id);
  };

  const isCurrentUser = (id: string) => id === "current";

  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {messages.map((message, index) => {
          const user = getUserById(message.senderId);
          const isCurrent = isCurrentUser(message.senderId);
          const showAvatar = index === 0 || messages[index - 1].senderId !== message.senderId;
          
          return (
            <div
              key={message.id}
              className={`flex items-end gap-2 ${
                isCurrent ? "justify-end" : "justify-start"
              }`}
            >
              {!isCurrent && showAvatar ? (
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback>
                    {user?.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              ) : (
                !isCurrent && <div className="w-8" />
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p>{message.text}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    {formatDetailedTime(message.timestamp)}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          );
        })}
        <div ref={scrollRef} />
      </div>
    </ScrollArea>
  );
}