import { IDeveloperRepository, IDeveloperDTO } from "../IDeveloperRepository";
import { Developers } from "../../models/developers";
declare class DevelopersRepository implements IDeveloperRepository {
    private ormRepository;
    constructor();
    create(developer: Omit<IDeveloperDTO, 'id'>): Promise<Developers>;
    findAll(): Promise<any>;
    findById(id: number): Promise<Developers | undefined>;
    update(id: number, developer: Partial<IDeveloperDTO>): Promise<Developers>;
    delete(id: number): Promise<void>;
    findAndCountDevelopers(query: string, page: number, pageSize: number): Promise<{
        developers: Developers[];
        total: number;
        currentPage: number;
        lastPage: number;
    }>;
}
export { DevelopersRepository };
