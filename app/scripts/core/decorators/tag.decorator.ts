import Vue from 'vue';

const key = 'tag';

export function Tag(component: string | any) {

    if (typeof component === 'string') {
        return (constructor: any) => {
            constructor[key] = component;
        };
    }

    return component[key];
}