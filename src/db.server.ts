// Import PrismaClient from the @prisma/client node module
import { PrismaClient } from "@prisma/client";

// Instantiate PrismaClient
const db = new PrismaClient();

// Export PrismaClient
export default db;
