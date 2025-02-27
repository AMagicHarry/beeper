export type User = {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: string;
};

export type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
};

export type Chat = {
  id: string;
  participants: User[];
  messages: Message[];
  lastMessageTimestamp: string;
};

export const users: User[] = [
  {
    id: "u1",
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    isOnline: true,
  },
  {
    id: "u2",
    name: "Samantha Lee",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    isOnline: true,
  },
  {
    id: "u3",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    isOnline: false,
    lastSeen: "2 hours ago",
  },
  {
    id: "u4",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    isOnline: true,
  },
  {
    id: "u5",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    isOnline: false,
    lastSeen: "1 day ago",
  },
  {
    id: "u6",
    name: "Olivia Wilson",
    avatar: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    isOnline: true,
  },
  {
    id: "u7",
    name: "James Taylor",
    avatar: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    isOnline: false,
    lastSeen: "3 days ago",
  },
];

export const currentUser: User = {
  id: "current",
  name: "You",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  isOnline: true,
};

export const chats: Chat[] = [
  {
    id: "c1",
    participants: [currentUser, users[0]],
    messages: [
      {
        id: "m1",
        senderId: "u1",
        text: "Hey there! How's your day going?",
        timestamp: "2023-09-15T10:30:00Z",
        isRead: true,
      },
      {
        id: "m2",
        senderId: "current",
        text: "Pretty good, thanks! Just working on a new project. How about you?",
        timestamp: "2023-09-15T10:32:00Z",
        isRead: true,
      },
      {
        id: "m3",
        senderId: "u1",
        text: "Same here. Been busy with work but it's going well. Are you free this weekend?",
        timestamp: "2023-09-15T10:35:00Z",
        isRead: true,
      },
    ],
    lastMessageTimestamp: "2023-09-15T10:35:00Z",
  },
  {
    id: "c2",
    participants: [currentUser, users[1]],
    messages: [
      {
        id: "m4",
        senderId: "current",
        text: "Hi Sam, did you get a chance to look at those files I sent?",
        timestamp: "2023-09-14T15:20:00Z",
        isRead: true,
      },
      {
        id: "m5",
        senderId: "u2",
        text: "Yes, I did! They look great. I'll have feedback for you tomorrow.",
        timestamp: "2023-09-14T15:25:00Z",
        isRead: true,
      },
      {
        id: "m6",
        senderId: "current",
        text: "Perfect, thanks! Looking forward to it.",
        timestamp: "2023-09-14T15:27:00Z",
        isRead: true,
      },
    ],
    lastMessageTimestamp: "2023-09-14T15:27:00Z",
  },
  {
    id: "c3",
    participants: [currentUser, users[2]],
    messages: [
      {
        id: "m7",
        senderId: "u3",
        text: "Are we still on for the meeting at 3pm?",
        timestamp: "2023-09-13T14:10:00Z",
        isRead: true,
      },
      {
        id: "m8",
        senderId: "current",
        text: "Yes, definitely! I'll bring the presentation materials.",
        timestamp: "2023-09-13T14:15:00Z",
        isRead: true,
      },
    ],
    lastMessageTimestamp: "2023-09-13T14:15:00Z",
  },
  {
    id: "c4",
    participants: [currentUser, users[3]],
    messages: [
      {
        id: "m9",
        senderId: "current",
        text: "Emily, can you send me the latest design files?",
        timestamp: "2023-09-12T09:45:00Z",
        isRead: true,
      },
      {
        id: "m10",
        senderId: "u4",
        text: "Sure thing! Just sent them to your email.",
        timestamp: "2023-09-12T09:50:00Z",
        isRead: false,
      },
    ],
    lastMessageTimestamp: "2023-09-12T09:50:00Z",
  },
  {
    id: "c5",
    participants: [currentUser, users[4]],
    messages: [
      {
        id: "m11",
        senderId: "u5",
        text: "Don't forget about the team lunch tomorrow!",
        timestamp: "2023-09-11T16:30:00Z",
        isRead: true,
      },
      {
        id: "m12",
        senderId: "current",
        text: "I won't! Looking forward to it.",
        timestamp: "2023-09-11T16:35:00Z",
        isRead: true,
      },
    ],
    lastMessageTimestamp: "2023-09-11T16:35:00Z",
  },
];