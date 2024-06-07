"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelController = void 0;
const CreateLevel_1 = require("../services/levels/CreateLevel");
const LevelRepository_1 = require("../repositories/implementations/LevelRepository");
const FindLevelsById_1 = require("../services/levels/FindLevelsById");
const UpdateLevel_1 = require("../services/levels/UpdateLevel");
const DeleteLevel_1 = require("../services/levels/DeleteLevel");
const FindAllLevels_1 = require("../services/levels/FindAllLevels");
class LevelController {
    async index(request, response) {
        const levelRepository = new LevelRepository_1.LevelsRepository();
        const findAllLevels = new FindAllLevels_1.FindAllLevels(levelRepository);
        const { query, page = 1, pageSize = 10 } = request.query;
        try {
            const { levels, total, perPage, currentPage, lastPage } = await findAllLevels.execute({ query: query, page: Number(page), pageSize: Number(pageSize) });
            if (levels.length === 0) {
                return response.status(404).json({ message: 'Nenhum nível encontrado' });
            }
            return response.status(200).json({
                data: levels,
                meta: {
                    total,
                    per_page: perPage,
                    current_page: currentPage,
                    last_page: lastPage
                }
            });
        }
        catch (error) {
            console.error('Erro ao carregar níveis', error);
            return response.status(500).json({ message: 'Erro ao carregar níveis' });
        }
    }
    async create(request, response) {
        const { nivel } = request.body;
        const levelRepository = new LevelRepository_1.LevelsRepository();
        const createLevel = new CreateLevel_1.CreateLevel(levelRepository);
        try {
            const level = await createLevel.execute({ nivel });
            return response.status(201).json(level);
        }
        catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    async getById(request, response) {
        const { id } = request.params;
        const levelRepository = new LevelRepository_1.LevelsRepository();
        const findLevelById = new FindLevelsById_1.FindLevelById(levelRepository);
        try {
            const level = await findLevelById.execute({ id: Number(id) });
            if (!level) {
                return response.status(404).json({ error: 'Level not found' });
            }
            return response.status(200).json(level);
        }
        catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    async update(request, response) {
        const { id } = request.params;
        const { nivel } = request.body;
        const levelRepository = new LevelRepository_1.LevelsRepository();
        const updateLevel = new UpdateLevel_1.UpdateLevel(levelRepository);
        try {
            const level = await updateLevel.execute({ id: Number(id), nivel });
            if (!level) {
                return response.status(404).json({ error: 'Level not found' });
            }
            return response.status(200).json(level);
        }
        catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        const levelRepository = new LevelRepository_1.LevelsRepository();
        const deleteLevel = new DeleteLevel_1.DeleteLevel(levelRepository);
        try {
            await deleteLevel.execute({ id: Number(id) });
            return response.status(204).send();
        }
        catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}
exports.LevelController = LevelController;
//# sourceMappingURL=LevelController.js.map