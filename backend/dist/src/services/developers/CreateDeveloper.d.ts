import { IDeveloperRepository } from "../../repositories/IDeveloperRepository";
import { Developers } from "../../models/developers";
interface IRequest {
    level: number;
    nome: string;
    sexo: string;
    data_nascimento: Date | string;
    hobby: string;
}
declare class CreateDeveloper {
    private developerRepository;
    constructor(developerRepository: IDeveloperRepository);
    execute({ level, nome, sexo, data_nascimento, hobby }: IRequest): Promise<Developers>;
}
export { CreateDeveloper };
