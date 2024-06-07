"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllLevels = void 0;
class FindAllLevels {
    constructor(levelRepository) {
        this.levelRepository = levelRepository;
    }
    async execute({ query, page, pageSize }) {
        const { levels, total, currentPage, lastPage } = await this.levelRepository.findAndCountLevels(query || '', page, pageSize);
        return {
            levels,
            total,
            perPage: pageSize,
            currentPage,
            lastPage
        };
    }
}
exports.FindAllLevels = FindAllLevels;
//# sourceMappingURL=FindAllLevels.js.map