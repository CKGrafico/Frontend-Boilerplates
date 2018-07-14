export const dynamicRoute = path => {
    return () => import(path).then(m => m.default || m)
}