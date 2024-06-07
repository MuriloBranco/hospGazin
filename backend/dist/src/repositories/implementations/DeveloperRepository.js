"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopersRepository = void 0;
const developers_1 = require("../../models/developers");
const data_source_1 = require("../../data-source");
const levels_1 = require("../../models/levels");
class DevelopersRepository {
    constructor() {
        this.ormRepository = data_source_1.AppDataSource.getRepository(developers_1.Developers);
    }
    async create(developer) {
        const newDeveloper = this.ormRepository.create({
            ...developer,
            level: { id: developer.level }
        });
        await this.ormRepository.save(newDeveloper);
        return newDeveloper;
    }
    async findAll() {
        const developers = await this.ormRepository.find({
            relations: ["level"]
        });
        return developers;
    }
    async findById(id) {
        const developer = await this.ormRepository.findOne({
            where: { id },
            relations: ["level"]
        });
        return developer;
    }
    async update(id, developer) {
        if (developer.level !== undefined) {
            const levelRepository = data_source_1.AppDataSource.getRepository(levels_1.Levels);
            const levelEntity = await levelRepository.findOne({ where: { id: developer.level } });
            if (levelEntity) {
                developer.level = levelEntity;
            }
            else {
                throw new Error('Level not found');
            }
        }
        await this.ormRepository.update(id, developer);
        const updatedDeveloper = await this.ormRepository.findOne({
            where: { id },
            relations: ["level"]
        });
        if (!updatedDeveloper) {
            throw new Error('Developer not found');
        }
        return updatedDeveloper;
    }
    async delete(id) {
        await this.ormRepository.delete(id);
    }
    async findAndCountDevelopers(query, page, pageSize) {
        const [developers, total] = await this.ormRepository.createQueryBuilder("developer")
            .leftJoinAndSelect("developer.level", "nivel")
            .where("LOWER(developer.nome) LIKE :query", { query: `%${query.toLowerCase()}%` })
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
        const lastPage = Math.ceil(total / pageSize);
        return {
            developers,
            total,
            currentPage: page,
            lastPage
        };
    }
}
exports.DevelopersRepository = DevelopersRepository;
//# sourceMappingURL=DeveloperRepository.js.map