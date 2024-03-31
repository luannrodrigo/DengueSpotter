import { complaints } from '../../db/schema';
import { db } from "./sqlite-service";

export default defineEventHandler(async () => {
  try {
    const complaintsResp = db.select().from(complaints).all();
    return complaintsResp
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});