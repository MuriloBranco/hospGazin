import { IDeveloperRepository } from "../../repositories/IDeveloperRepository";
interface IRequest {
    id: number;
}
declare class DeleteDeveloper {
    private developerRepository;
    constructor(developerRepository: IDeveloperRepository);
    execute({ id }: IRequest): Promise<void>;
}
export { DeleteDeveloper };
