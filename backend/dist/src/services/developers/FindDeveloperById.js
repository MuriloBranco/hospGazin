"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindDeveloperById = void 0;
class FindDeveloperById {
    constructor(developerRepository) {
        this.developerRepository = developerRepository;
    }
    async execute({ id }) {
        try {
            const developer = await this.developerRepository.findById(id);
            if (!developer) {
                throw new Error('Developer not found');
            }
            return developer;
        }
        catch (error) {
            console.error("Erro ao encontrar desenvolvedor:", error);
            throw new Error("Não foi possível encontrar o desenvolvedor. Por favor, tente novamente.");
        }
    }
}
exports.FindDeveloperById = FindDeveloperById;
//# sourceMappingURL=FindDeveloperById.js.map