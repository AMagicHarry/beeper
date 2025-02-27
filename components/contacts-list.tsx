"use client";

import { useState } from "react";
import { Search, UserPlus } from "lucide-react";
import { users, User } from "@/lib/data";
import { getLastActive } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ContactsListProps {
  onSelectContact: (userId: string) => void;
}

export function ContactsList({ onSelectContact }: ContactsListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full border-r">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search contacts..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button size="icon" className="rounded-full">
            <UserPlus className="h-5 w-5" />
            <span className="sr-only">Add contact</span>
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 rounded-lg p-3 cursor-pointer hover:bg-muted"
              onClick={() => onSelectContact(user.id)}
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {user.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {user.isOnline ? "Online" : getLastActive(user.lastSeen)}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectContact(user.id);
                }}
              >
                Message
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}