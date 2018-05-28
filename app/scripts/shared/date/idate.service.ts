export interface IDateService {
    formatDate(date: Date): string;
}

export const IDateServiceId = Symbol('IDateService');