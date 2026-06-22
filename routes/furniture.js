import express from "express";
const router = express.Router();

import furniture from "../data/furniture.js";
import error from "../utilities/error.js";

router
  .route("/")
  .get((req, res) => {
  if (req.query.brandId) {
    const filtered = furniture.filter(
      (item) => item.brandId == req.query.brandId
    );
    return res.json(filtered);
  }
  if (req.query.roomId) {
    const filtered = furniture.filter(
      (item) => item.roomId == req.query.roomId
    );
    return res.json(filtered);
  }
  const links = [
    {
      href: "furniture/:id",
      rel: ":id",
      type: "GET",
    },
  ];
  res.json({ furniture, links });
})
  .post((req, res, next) => {
    if (
      req.body.name &&
      req.body.brandId &&
      req.body.roomId &&
      req.body.price
    ) {
      const item = {
        id: furniture[furniture.length - 1].id + 1,
        name: req.body.name,
        brandId: Number(req.body.brandId),
        roomId: Number(req.body.roomId),
        price: Number(req.body.price),
      };

      furniture.push(item);
      res.json(furniture[furniture.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const item = furniture.find(
      (f) => f.id == req.params.id
    );
    const links = [
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "PATCH",
      },
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "DELETE",
      },
    ];
    if (item) res.json({ item, links });
    else next();
  })
  .patch((req, res, next) => {
    const item = furniture.find((f, i) => {
      if (f.id == req.params.id) {
        for (const key in req.body) {
          furniture[i][key] = req.body[key];
        }
        return true;
      }
    });
    if (item) res.json(item);
    else next();
  })
  .delete((req, res, next) => {
    const item = furniture.find((f, i) => {
      if (f.id == req.params.id) {
        furniture.splice(i, 1);
        return true;
      }
    });
    if (item) res.json(item);
    else next();
  });

export default router;