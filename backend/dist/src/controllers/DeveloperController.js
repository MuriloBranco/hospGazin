"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperController = void 0;
const CreateDeveloper_1 = require("../services/developers/CreateDeveloper");
const DeveloperRepository_1 = require("../repositories/implementations/DeveloperRepository");
const LevelRepository_1 = require("../repositories/implementations/LevelRepository");
const FindDeveloperById_1 = require("../services/developers/FindDeveloperById");
const UpdateDeveloper_1 = require("../services/developers/UpdateDeveloper");
const DeleteDeveloper_1 = require("../services/developers/DeleteDeveloper");
const FindAllDevelopers_1 = require("../services/developers/FindAllDevelopers");
class DeveloperController {
    async index(request, response) {
        const developersRepository = new DeveloperRepository_1.DevelopersRepository();
        const findAllDevelopers = new FindAllDevelopers_1.FindAllDevelopers(developersRepository);
        const { query, page = 1, pageSize = 10 } = request.query;
        try {
            const { developers, total, perPage, currentPage, lastPage } = await findAllDevelopers.execute({ query: query, page: Number(page), pageSize: Number(pageSize) });
            if (developers.length === 0) {
                return response.status(404).json({ message: 'Nenhum desenvolvedor encontrado' });
            }
            return response.status(200).json({
                data: developers,
                meta: {
                    total,
                    per_page: perPage,
                    current_page: currentPage,
                    last_page: lastPage
                }
            });
        }
        catch (error) {
            console.error('Erro ao carregar desenvolvedor', error);
            return response.status(500).json({ message: 'Erro ao carregar desenvolvedor' });
        }
    }
    async create(request, response) {
        const { level, nome, sexo, data_nascimento, hobby } = request.body;
        const developerRepository = new DeveloperRepository_1.DevelopersRepository();
        const createDeveloper = new CreateDeveloper_1.CreateDeveloper(developerRepository);
        try {
            const developer = await createDeveloper.execute({ level, nome, sexo, data_nascimento, hobby });
            return response.status(201).json(developer);
        }
        catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    async getById(request, response) {
        const { id } = request.params;
        const developerRepository = new DeveloperRepository_1.DevelopersRepository();
        const findDeveloperById = new FindDeveloperById_1.FindDeveloperById(developerRepository);
        try {
            const developer = await findDeveloperById.execute({ id: Number(id) });
            if (!developer) {
                return response.status(404).json({ error: 'Developer not found' });
            }
            return response.status(200).json(developer);
        }
        catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    async update(request, response) {
        const { id } = request.params;
        const { level, nome, sexo, data_nascimento, hobby } = request.body;
        const developerRepository = new DeveloperRepository_1.DevelopersRepository();
        const levelRepository = new LevelRepository_1.LevelsRepository();
        const updateDeveloper = new UpdateDeveloper_1.UpdateDeveloper(developerRepository, levelRepository);
        try {
            const developer = await updateDeveloper.execute({ id: Number(id), level, nome, sexo, data_nascimento, hobby });
            if (!developer) {
                return response.status(404).json({ error: 'Developer not found' });
            }
            return response.status(200).json(developer);
        }
        catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        const developerRepository = new DeveloperRepository_1.DevelopersRepository();
        const deleteDeveloper = new DeleteDeveloper_1.DeleteDeveloper(developerRepository);
        try {
            await deleteDeveloper.execute({ id: Number(id) });
            return response.status(204).send();
        }
        catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}
exports.DeveloperController = DeveloperController;
//# sourceMappingURL=DeveloperController.js.map