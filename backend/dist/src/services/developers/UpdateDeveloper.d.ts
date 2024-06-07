import { IDeveloperRepository } from "../../repositories/IDeveloperRepository";
import { Developers } from "../../models/developers";
import { ILevelRepository } from "../../repositories/ILevelRepository";
interface IRequest {
    id: number;
    level?: number;
    nome?: string;
    sexo?: string;
    data_nascimento?: Date | string;
    hobby?: string;
}
declare class UpdateDeveloper {
    private developerRepository;
    private levelRepository;
    constructor(developerRepository: IDeveloperRepository, levelRepository: ILevelRepository);
    execute({ id, level, nome, sexo, data_nascimento, hobby }: IRequest): Promise<Developers>;
}
export { UpdateDeveloper };
