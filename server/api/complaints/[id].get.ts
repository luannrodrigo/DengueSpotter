import { complaints } from "../../../db/schema";
import { db } from "@/server/api/sqlite-service";
import { eq } from "drizzle-orm";
export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const userId = event.context.params?.id as string;
    const complaintsResp = db
      .select()
      .from(complaints)
      .where(eq(complaints.id, parseInt(userId)))
      .get();
    return { user: complaintsResp };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});

