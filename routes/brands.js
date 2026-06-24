import express from "express";
import brands from "../data/brands.js";
import error from "../utilities/error.js";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    const links = [
      {
        href: "brands/:id",
        rel: ":id",
        type: "GET",
      },
    ];
    res.json({ brands, links });
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const brand = brands.find((b) => {
      return b.id == req.params.id;
    });
    if (brand) {
      res.json(brand);
    } else {
      next(error(404, "Brand Not Found"));
    }
  });

export default router;