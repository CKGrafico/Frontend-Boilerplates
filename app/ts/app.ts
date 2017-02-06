import $ from 'jquery';

interface IExample {
    readonly name: string;
}

class Example implements IExample {
    public readonly name: string = 'test';
}

let example = new Example();

console.log(example.name);
