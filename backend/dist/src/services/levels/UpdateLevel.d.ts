import { ILevelRepository } from "../../repositories/ILevelRepository";
import { Levels } from "../../models/levels";
interface IUpdateLevelRequest {
    id: number;
    nivel: string;
}
declare class UpdateLevel {
    private levelRepository;
    constructor(levelRepository: ILevelRepository);
    execute({ id, nivel }: IUpdateLevelRequest): Promise<Levels>;
}
export { UpdateLevel };
