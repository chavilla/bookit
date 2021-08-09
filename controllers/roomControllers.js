import Room from "../models/room";

/* Get all rooms: /api/rooms */
const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

/* Get room detail */
const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    return res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Bad request",
    });
  }
};

// Creating new room  /api/rooms
const newRoom = async (req, res) => {
  const room = await Room.create(req.body);

  try {
    res.status(201).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

/* Updating a room /api/rooms/:id  */
const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

/* Deleting a room */
const deleteRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    room.remove();

    return res.status(200).json({
      success: true,
      message: "Room deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

export { allRooms, newRoom, getRoom, updateRoom, deleteRoom };

