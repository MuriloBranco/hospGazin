"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLevel = void 0;
class CreateLevel {
    constructor(levelRepository) {
        this.levelRepository = levelRepository;
    }
    async execute({ nivel }) {
        try {
            const level = await this.levelRepository.create({ nivel });
            return level;
        }
        catch (error) {
            console.error("Erro ao criar nível:", error);
            throw new Error("Não foi possível criar o nível. Por favor, tente novamente.");
        }
    }
}
exports.CreateLevel = CreateLevel;
//# sourceMappingURL=CreateLevel.js.map