"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLevel = void 0;
class UpdateLevel {
    constructor(levelRepository) {
        this.levelRepository = levelRepository;
    }
    async execute({ id, nivel }) {
        try {
            const level = await this.levelRepository.findById(id);
            if (!level) {
                throw new Error('Level not found');
            }
            const updatedLevel = await this.levelRepository.update(id, {
                nivel: nivel ?? level.nivel,
            });
            return updatedLevel;
        }
        catch (error) {
            console.error("Erro ao atualizar nível:", error);
            throw new Error("Não foi possível atualizar o nível. Por favor, tente novamente.");
        }
    }
}
exports.UpdateLevel = UpdateLevel;
//# sourceMappingURL=UpdateLevel.js.map