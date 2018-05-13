import { container } from '~/store/store.container';

export const Container = <T>(id: any) => {
    return (target: any, key: string | symbol) => {
        const getter = () => {
            return container.get<T>(id);
        };
        Reflect.deleteProperty[key];
        Reflect.defineProperty(target, key, {
            get: getter
        });
    };
};