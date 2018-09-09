/*
 * find a nested object property inside of an object.
 * @param  {array} path
 * @param  {object} obj
 */
export function AccessNestedObject(obj, path, valueNotFound = undefined) {
    if (!((Array.isArray(path) || (typeof path == 'string')) && obj && typeof obj == 'object')) {
        return valueNotFound;
    }

    if (typeof path == 'string') {
        path = path.split('.');
    }

    return path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : valueNotFound, obj)
}