import { ILevelRepository } from "../../repositories/ILevelRepository";
interface IDeleteLevelRequest {
    id: number;
}
declare class DeleteLevel {
    private levelRepository;
    constructor(levelRepository: ILevelRepository);
    execute({ id }: IDeleteLevelRequest): Promise<void>;
}
export { DeleteLevel };
