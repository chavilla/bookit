const Room = require('../models/room')
const dbConnect = require("../config/dbConnect");
const rooms = require('../data/rooms');

dbConnect();

const seedRooms = async () => {
  try {
    await Room.deleteMany();

    await Room.insertMany(rooms);

    console.log("Inserted successfully");

  } catch (error) {
    console.log("Hubo un error ", error.message);
    process.exit();
  }
};

seedRooms();
