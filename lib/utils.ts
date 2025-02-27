import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistanceToNow, isToday, isYesterday } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMessageTime(timestamp: string): string {
  const date = new Date(timestamp);
  
  if (isToday(date)) {
    return format(date, 'h:mm a');
  } else if (isYesterday(date)) {
    return 'Yesterday';
  } else {
    return format(date, 'MMM d');
  }
}

export function formatDetailedTime(timestamp: string): string {
  const date = new Date(timestamp);
  return format(date, 'MMM d, yyyy h:mm a');
}

export function getLastActive(lastSeen?: string): string {
  if (!lastSeen) return 'Offline';
  return `Last seen ${lastSeen}`;
}