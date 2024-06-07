import { ILevelRepository } from "../../repositories/ILevelRepository";
import { Levels } from "../../models/levels";
interface IFindLevelByIdRequest {
    id: number;
}
declare class FindLevelById {
    private levelRepository;
    constructor(levelRepository: ILevelRepository);
    execute({ id }: IFindLevelByIdRequest): Promise<Levels>;
}
export { FindLevelById };
