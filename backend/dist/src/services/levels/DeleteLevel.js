"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLevel = void 0;
class DeleteLevel {
    constructor(levelRepository) {
        this.levelRepository = levelRepository;
    }
    async execute({ id }) {
        try {
            const level = await this.levelRepository.findById(id);
            if (!level) {
                throw new Error('Level not found');
            }
            const hasDevelopers = await this.levelRepository.hasAssociatedDevelopers(id);
            if (hasDevelopers) {
                throw new Error('Cannot delete level with associated developers');
            }
            await this.levelRepository.delete(id);
        }
        catch (error) {
            console.error("Erro ao deletar nível:", error);
            throw new Error("Não foi possível deletar o nível. Por favor, tente novamente.");
        }
    }
}
exports.DeleteLevel = DeleteLevel;
//# sourceMappingURL=DeleteLevel.js.map