"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllDevelopers = void 0;
class FindAllDevelopers {
    constructor(developersRepository) {
        this.developersRepository = developersRepository;
    }
    async execute({ query = '', page, pageSize }) {
        const { developers, total, currentPage, lastPage } = await this.developersRepository.findAndCountDevelopers(query, page, pageSize);
        return {
            developers,
            total,
            perPage: pageSize,
            currentPage,
            lastPage
        };
    }
}
exports.FindAllDevelopers = FindAllDevelopers;
//# sourceMappingURL=FindAllDevelopers.js.map