"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { chats, users, User } from "@/lib/data";
import { formatMessageTime } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatListProps {
  onSelectChat: (chatId: string) => void;
  selectedChatId: string | null;
}

export function ChatList({ onSelectChat, selectedChatId }: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter((chat) => {
    const otherParticipant = chat.participants.find(
      (p) => p.id !== "current"
    ) as User;
    return otherParticipant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex flex-col h-full border-r">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search conversations..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredChats.map((chat) => {
            const otherParticipant = chat.participants.find(
              (p) => p.id !== "current"
            ) as User;
            const lastMessage = chat.messages[chat.messages.length - 1];
            const isSelected = selectedChatId === chat.id;

            return (
              <div
                key={chat.id}
                className={`flex items-center gap-3 rounded-lg p-3 cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-accent"
                    : "hover:bg-muted"
                }`}
                onClick={() => onSelectChat(chat.id)}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={otherParticipant.avatar} alt={otherParticipant.name} />
                    <AvatarFallback>
                      {otherParticipant.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {otherParticipant.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium truncate">{otherParticipant.name}</h3>
                    <span className="text-xs text-muted-foreground">
                      {formatMessageTime(lastMessage.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {lastMessage.senderId === "current" ? "You: " : ""}
                    {lastMessage.text}
                  </p>
                </div>
                {!lastMessage.isRead && lastMessage.senderId !== "current" && (
                  <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}