export const randomizer = {
    generate(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    color(): string {
        // https://www.paulirish.com/2009/random-hex-color-code-snippets/
        return Math.floor(Math.random() * 16777215).toString(16);
    }
};