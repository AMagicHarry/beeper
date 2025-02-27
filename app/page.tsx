"use client";

import { useState } from "react";
import { chats, users, User, Chat, Message } from "@/lib/data";
import { Sidebar } from "@/components/sidebar";
import { ChatList } from "@/components/chat-list";
import { ContactsList } from "@/components/contacts-list";
import { ChatHeader } from "@/components/chat-header";
import { MessageList } from "@/components/message-list";
import { MessageInput } from "@/components/message-input";
import { EmptyState } from "@/components/empty-state";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"chats" | "contacts">("chats");
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [chatData, setChatData] = useState<Chat[]>(chats);

  const selectedChat = selectedChatId
    ? chatData.find((chat) => chat.id === selectedChatId)
    : null;

  const otherParticipant = selectedChat
    ? (selectedChat.participants.find((p) => p.id !== "current") as User)
    : null;

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
    setActiveTab("chats");
  };

  const handleSelectContact = (userId: string) => {
    // Find if there's an existing chat with this user
    const existingChat = chatData.find((chat) =>
      chat.participants.some((p) => p.id === userId)
    );

    if (existingChat) {
      setSelectedChatId(existingChat.id);
    } else {
      // Create a new chat with this user
      const newUser = users.find((u) => u.id === userId);
      if (newUser) {
        const newChat: Chat = {
          id: `new-${Date.now()}`,
          participants: [
            { id: "current", name: "You", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80", isOnline: true },
            newUser,
          ],
          messages: [],
          lastMessageTimestamp: new Date().toISOString(),
        };
        setChatData([newChat, ...chatData]);
        setSelectedChatId(newChat.id);
      }
    }
    setActiveTab("chats");
  };

  const handleSendMessage = (text: string) => {
    if (!selectedChatId) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: "current",
      text,
      timestamp: new Date().toISOString(),
      isRead: false,
    };

    setChatData(
      chatData.map((chat) => {
        if (chat.id === selectedChatId) {
          return {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessageTimestamp: newMessage.timestamp,
          };
        }
        return chat;
      })
    );
  };

  const handleStartNewChat = () => {
    setActiveTab("contacts");
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onChangeTab={setActiveTab} />
      <div className="w-80 h-full">
        {activeTab === "chats" ? (
          <ChatList onSelectChat={handleSelectChat} selectedChatId={selectedChatId} />
        ) : (
          <ContactsList onSelectContact={handleSelectContact} />
        )}
      </div>
      <div className="flex-1 flex flex-col h-full">
        {selectedChat && otherParticipant ? (
          <>
            <ChatHeader user={otherParticipant} />
            <MessageList
              messages={selectedChat.messages}
              participants={selectedChat.participants}
            />
            <MessageInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <EmptyState onStartNewChat={handleStartNewChat} />
        )}
      </div>
    </div>
  );
}