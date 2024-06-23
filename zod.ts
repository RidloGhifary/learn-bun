import { z } from "zod";

const loggingValidation = z.object({
  username: z.string().min(1).max(50).email(),
  password: z.string().min(1).max(10),
});

const request = {
  username: "ridlo@example.com",
  password: "12345678",
};

loggingValidation.parse(request);
