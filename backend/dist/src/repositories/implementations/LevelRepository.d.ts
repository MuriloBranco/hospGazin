import { ILevelRepository, ILevelsDTO } from "../ILevelRepository";
import { Levels } from "../../models/levels";
declare class LevelsRepository implements ILevelRepository {
    private ormRepository;
    private developerRepository;
    constructor();
    hasAssociatedDevelopers(levelId: number): Promise<boolean>;
    create(level: ILevelsDTO): Promise<Levels>;
    findAll(): Promise<Levels[]>;
    findById(id: number): Promise<Levels | undefined>;
    update(id: number, level: Partial<ILevelsDTO>): Promise<Levels>;
    delete(id: number): Promise<void>;
    findAndCountLevels(query: string, page: number, pageSize: number): Promise<{
        levels: Levels[];
        total: number;
        currentPage: number;
        lastPage: number;
    }>;
}
export { LevelsRepository };
