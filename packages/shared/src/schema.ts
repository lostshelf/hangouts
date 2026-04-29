import { z } from 'zod';

export const createPollSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  durationHours: z.number().min(0.5).max(24),
  timezone: z.string(),
  deadline: z.number().optional(),
  dates: z.array(
    z.object({
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      earliestHour: z.number().int().min(0).max(23),
      latestHour: z.number().int().min(0).max(23),
    })
  ).min(1).max(60),
  invitees: z.array(
    z.object({
      name: z.string().min(1).max(50),
      email: z.string().email().optional(),
    })
  ).min(1).max(50),
});

export const submitResponseSchema = z.object({
  slots: z.array(
    z.object({
      slotStart: z.number().int(),
      status: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    })
  ),
});

export type CreatePollInput = z.infer<typeof createPollSchema>;
export type SubmitResponseInput = z.infer<typeof submitResponseSchema>;
