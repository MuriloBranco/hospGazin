"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDeveloper = void 0;
class DeleteDeveloper {
    constructor(developerRepository) {
        this.developerRepository = developerRepository;
    }
    async execute({ id }) {
        try {
            const developer = await this.developerRepository.findById(id);
            if (!developer) {
                throw new Error('Developer not found');
            }
            await this.developerRepository.delete(id);
        }
        catch (error) {
            console.error("Erro ao deletar desenvolvedor:", error);
            throw new Error("Não foi possível deletar o desenvolvedor. Por favor, tente novamente.");
        }
    }
}
exports.DeleteDeveloper = DeleteDeveloper;
//# sourceMappingURL=DeleteDeveloper.js.map