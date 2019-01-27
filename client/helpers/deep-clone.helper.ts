export function clone(source: any): any {
  try {
    if (!source) {
      return source;
    }

    let value;
    let dest = Array.isArray(source) ? [] : {};
    Object.keys(source).forEach(key => {
      value = source[key];
      dest[key] = typeof value === 'object' ? clone(value) : value;
    });

    return dest;
  } catch (e) {
    if (e) throw new Error(e);
  }
}
