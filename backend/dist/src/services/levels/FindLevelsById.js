"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindLevelById = void 0;
class FindLevelById {
    constructor(levelRepository) {
        this.levelRepository = levelRepository;
    }
    async execute({ id }) {
        try {
            const level = await this.levelRepository.findById(id);
            if (!level) {
                throw new Error('Level not found');
            }
            return level;
        }
        catch (error) {
            console.error("Erro ao encontrar nível:", error);
            throw new Error("Não foi possível encontrar o nível. Por favor, tente novamente.");
        }
    }
}
exports.FindLevelById = FindLevelById;
//# sourceMappingURL=FindLevelsById.js.map