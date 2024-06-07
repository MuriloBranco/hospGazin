"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeveloper = void 0;
const date_fns_1 = require("date-fns");
class UpdateDeveloper {
    constructor(developerRepository, levelRepository) {
        this.developerRepository = developerRepository;
        this.levelRepository = levelRepository;
    }
    async execute({ id, level, nome, sexo, data_nascimento, hobby }) {
        try {
            const developer = await this.developerRepository.findById(id);
            if (!developer) {
                throw new Error('Developer not found');
            }
            let levelEntity = developer.level;
            if (level !== undefined) {
                levelEntity = await this.levelRepository.findById(level);
                if (!levelEntity) {
                    throw new Error('Level not found');
                }
            }
            const nascimentoDate = typeof data_nascimento === 'string' ? (0, date_fns_1.parseISO)(data_nascimento) : data_nascimento;
            const today = new Date();
            let idade = today.getFullYear() - nascimentoDate.getFullYear();
            const birthMonth = nascimentoDate.getMonth();
            const birthDay = nascimentoDate.getDate();
            if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
                idade--;
            }
            const updatedDeveloper = await this.developerRepository.update(id, {
                level: levelEntity?.id,
                nome: nome ?? developer.nome,
                sexo: sexo ?? developer.sexo,
                data_nascimento: nascimentoDate ?? developer.data_nascimento,
                idade,
                hobby: hobby ?? developer.hobby,
            });
            return updatedDeveloper;
        }
        catch (error) {
            console.error("Erro ao atualizar desenvolvedor:", error);
            throw new Error("Não foi possível atualizar o desenvolvedor. Por favor, tente novamente.");
        }
    }
}
exports.UpdateDeveloper = UpdateDeveloper;
//# sourceMappingURL=UpdateDeveloper.js.map