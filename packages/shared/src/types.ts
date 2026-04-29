export type ResponseStatus = 0 | 1 | 2; // 0=no, 1=soft yes, 2=yes

export interface Poll {
  id: string;
  organizerId: string;
  title: string;
  description: string | null;
  durationHours: number;
  timezone: string;
  deadline: number | null;
  createdAt: number;
  finalizedSlot: number | null;
}

export interface Invitee {
  id: string;
  pollId: string;
  name: string;
  email: string | null;
  respondedAt: number | null;
}

export interface SlotResponse {
  inviteeId: string;
  slotStart: number; // unix ms
  status: ResponseStatus;
}
