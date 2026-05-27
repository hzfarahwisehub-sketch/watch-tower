// Reexport dos handlers do NextAuth v5 pra rota [...nextauth]/route.ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;
