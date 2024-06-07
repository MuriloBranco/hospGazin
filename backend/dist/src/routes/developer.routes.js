"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DeveloperController_1 = require("../controllers/DeveloperController");
const developerRouter = (0, express_1.Router)();
const developerController = new DeveloperController_1.DeveloperController();
developerRouter.post("/desenvolvedores", developerController.create);
developerRouter.get("/desenvolvedores", developerController.index);
developerRouter.get("/desenvolvedores/:id", developerController.getById);
developerRouter.put("/desenvolvedores/:id", developerController.update);
developerRouter.delete("/desenvolvedores/:id", developerController.delete);
exports.default = developerRouter;
//# sourceMappingURL=developer.routes.js.map