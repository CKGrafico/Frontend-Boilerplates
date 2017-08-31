export interface IFilter {
    name: string;
    action(...params): any
}