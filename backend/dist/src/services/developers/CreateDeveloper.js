"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeveloper = void 0;
const date_fns_1 = require("date-fns");
class CreateDeveloper {
    constructor(developerRepository) {
        this.developerRepository = developerRepository;
    }
    async execute({ level, nome, sexo, data_nascimento, hobby }) {
        try {
            const nascimentoDate = typeof data_nascimento === 'string' ? (0, date_fns_1.parseISO)(data_nascimento) : data_nascimento;
            const today = new Date();
            let idade = today.getFullYear() - nascimentoDate.getFullYear();
            const birthMonth = nascimentoDate.getMonth();
            const birthDay = nascimentoDate.getDate();
            if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
                idade--;
            }
            const developer = await this.developerRepository.create({
                level,
                nome,
                sexo,
                data_nascimento: nascimentoDate,
                idade,
                hobby
            });
            return developer;
        }
        catch (error) {
            console.error("Erro ao criar desenvolvedor:", error);
            throw new Error("Não foi possível criar o desenvolvedor. Por favor, tente novamente.");
        }
    }
}
exports.CreateDeveloper = CreateDeveloper;
//# sourceMappingURL=CreateDeveloper.js.map