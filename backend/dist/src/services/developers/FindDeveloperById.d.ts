import { IDeveloperRepository } from "../../repositories/IDeveloperRepository";
import { Developers } from "../../models/developers";
interface IRequest {
    id: number;
}
declare class FindDeveloperById {
    private developerRepository;
    constructor(developerRepository: IDeveloperRepository);
    execute({ id }: IRequest): Promise<Developers>;
}
export { FindDeveloperById };
