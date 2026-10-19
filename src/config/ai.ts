import { createOpenRouter } from "@openrouter/ai-sdk-provider";
// import { z } from 'zod';

export const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_KEY,
});
