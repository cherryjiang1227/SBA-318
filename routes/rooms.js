import express from "express";
import rooms from "../data/rooms.js";
import error from "../utilities/error.js";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    const links = [
      {
        href: "rooms/:id",
        rel: ":id",
        type: "GET",
      },
    ];
    res.json({ rooms, links });
  });

router
  .route("/:id")
  .get((req, res, next) => {
  const room = rooms.find((r) => {
    return r.id == req.params.id;
  });
  if (room) {
    res.json(room);
  } else {
    next(error(404, "Room Not Found"));
  }
});

export default router;