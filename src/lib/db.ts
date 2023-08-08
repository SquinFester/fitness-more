import { PrismaClient } from "@prisma/client";
import "server-only";

const prisma = new PrismaClient();

export const db = prisma;
