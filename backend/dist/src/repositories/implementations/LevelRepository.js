"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelsRepository = void 0;
const data_source_1 = require("../../data-source");
const levels_1 = require("../../models/levels");
const developers_1 = require("../../models/developers");
class LevelsRepository {
    constructor() {
        this.ormRepository = data_source_1.AppDataSource.getRepository(levels_1.Levels);
        this.developerRepository = data_source_1.AppDataSource.getRepository(developers_1.Developers);
    }
    async hasAssociatedDevelopers(levelId) {
        const developersCount = await this.developerRepository.count({
            where: { level: { id: levelId } }
        });
        return developersCount > 0;
    }
    async create(level) {
        const newLevel = this.ormRepository.create(level);
        await this.ormRepository.save(newLevel);
        return newLevel;
    }
    async findAll() {
        const levels = await this.ormRepository.find();
        return levels;
    }
    async findById(id) {
        const level = await this.ormRepository.findOneBy({ id });
        return level;
    }
    async update(id, level) {
        await this.ormRepository.update(id, level);
        const updateLevel = await this.ormRepository.findOneBy({ id });
        return updateLevel;
    }
    async delete(id) {
        await this.ormRepository.delete(id);
    }
    async findAndCountLevels(query, page, pageSize) {
        const [levels, total] = await this.ormRepository.createQueryBuilder("level")
            .where("LOWER(level.nivel) LIKE :query", { query: `%${query.toLowerCase()}%` })
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
        const lastPage = Math.ceil(total / pageSize);
        return {
            levels,
            total,
            currentPage: page,
            lastPage
        };
    }
}
exports.LevelsRepository = LevelsRepository;
//# sourceMappingURL=LevelRepository.js.map