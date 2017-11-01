export interface IDateService {
    formatDate(day: string, month: string, year: string): string;
}

export const IDateServiceId = Symbol('IDateService');