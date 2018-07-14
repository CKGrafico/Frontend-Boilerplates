import { container } from '~/app.container';

/**
 * @param key the name of the property,
 * If the interface is IMyService the key must be myService or _myService
 */
const keyToId = (key: string) => {
    if (!key) {
        throw new Error('A key is necessary to load this interface');
    }

    const prefix = 'I' + key[0].toUpperCase();
    return prefix + key.slice(1).replace('_', '');
};

/**
 * Decorator to inject dependencies in components or classes
 * @param id optional id, could be auto generated with prop name
 */
export function Inject(id?: string | symbol) {
    return (target: any, key: string) => {
        const generatedId = id || keyToId(key);

        const getter = () => {
            return container.get(generatedId);
        };

        Reflect.deleteProperty[key];
        Reflect.defineProperty(target, key, {
            get: getter
        });
    };
}

/**
 * Creates an identifier meanwhile we cannot create with interfaces
 * @param target the class to generate the name
 */
export function injectId(target: any): string {
    return keyToId(target.name);
}