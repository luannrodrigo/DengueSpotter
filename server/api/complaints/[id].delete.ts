import { complaints } from "../../../db/schema";
import { db } from "@/server/api/sqlite-service";
import { eq } from "drizzle-orm";
export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.params?.id as string;
    const complaintsResp = db
      .delete(complaints)
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
