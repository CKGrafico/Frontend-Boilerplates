export const nextTick = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 10);
    });
}