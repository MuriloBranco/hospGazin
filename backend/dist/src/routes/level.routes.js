"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LevelController_1 = require("../controllers/LevelController");
const levelRouter = (0, express_1.Router)();
const levelController = new LevelController_1.LevelController();
levelRouter.post("/niveis", levelController.create);
levelRouter.get("/niveis", levelController.index);
levelRouter.get("/niveis/:id", levelController.getById);
levelRouter.put("/niveis/:id", levelController.update);
levelRouter.delete("/niveis/:id", levelController.delete);
exports.default = levelRouter;
//# sourceMappingURL=level.routes.js.map