import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onStartNewChat: () => void;
}

export function EmptyState({ onStartNewChat }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
        <MessageSquare className="h-10 w-10 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">No conversation selected</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        Choose a conversation from the list or start a new chat to begin messaging.
      </p>
      <Button onClick={onStartNewChat}>Start a new conversation</Button>
    </div>
  );
}