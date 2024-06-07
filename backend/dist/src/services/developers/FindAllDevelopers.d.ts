import { Developers } from '../../models/developers';
import { IDeveloperRepository } from '../../repositories/IDeveloperRepository';
interface IRequest {
    query?: string;
    page: number;
    pageSize: number;
}
interface IResponse {
    developers: Developers[];
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
}
declare class FindAllDevelopers {
    private developersRepository;
    constructor(developersRepository: IDeveloperRepository);
    execute({ query, page, pageSize }: IRequest): Promise<IResponse>;
}
export { FindAllDevelopers };
