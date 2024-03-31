import { InsertUser, complaints } from "../../../db/schema";
import { db } from "@/server/api/sqlite-service";
import { eq } from "drizzle-orm";
export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.params?.id as string;
    const body = await readBody(event);
    const editUser: InsertUser = {
      ...body
    }
    const complaintsResp = db
      .update(complaints)
      .set(editUser)
      .where(eq(complaints.id, parseInt(userId)))
      .run();
    return { user: complaintsResp };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});