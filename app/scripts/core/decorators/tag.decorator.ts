export function Tag(name: string) {
    return (constructor: any) => {
        constructor.tag = name;
    };
}