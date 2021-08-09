import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { deleteRoom, getRoom, updateRoom } from "../../../controllers/roomControllers";

const handler = nc();

dbConnect();

handler.get(getRoom);

handler.put(updateRoom);

handler.delete(deleteRoom);

export default handler;
