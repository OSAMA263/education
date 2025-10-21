import { z } from "zod";
const youtubeRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}$/;

export const examSchema = z.object({
  title: z.string().min(5, "must be 5 letters min"),
  description: z.string().min(20, "must be 20 letters min"),
  classLevel: z.string().min(1, "choose a grade"),

  duration: z.coerce
    .number()
    .min(5, "minimum minutes for an exam is 5 minutes"),
  startDate: z.date("date required"),
  endDate: z.date("date is required").refine((date) => date >= new Date(), {
    message: "date must be in the future",
  }),
  // question??
});

export const lessonSchema = z.object({
  title: z.string().min(5, "must be 5 letters min"),
  description: z.string().min(20, "must be 20 letters min"),
  classLevel: z.string().min(1, "choose a grade"),

  price: z.coerce.number("price number only").default(0),
  video: z.string().regex(youtubeRegex, "please enter a valid youtube link"),
  startDate: z.date("date required"),
});

export const questionSchema = z.object({
  question: z.string().min(1, "question must not be empty"),
  correctAnswer: z.string().min(1, "correct answer must be selected"),
  answers: z
    .array(z.string().min(1, "option cannot be empty"))
    .min(2, "minimum 2 options are needed")
    .max(7, "7 options is enough dude"),
});
