import { Levels } from "../../models/levels";
import { ILevelRepository } from "../../repositories/ILevelRepository";
interface ICreateLevelRequest {
    nivel: string;
}
declare class CreateLevel {
    private levelRepository;
    constructor(levelRepository: ILevelRepository);
    execute({ nivel }: ICreateLevelRequest): Promise<Levels>;
}
export { CreateLevel };
