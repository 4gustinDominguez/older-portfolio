export const calculateObjectPath = <T extends object>(obj: T): T => {
  const result = {};
  const recursivePathCalculation = (source: object, rootPath = [], target: object = result) => {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const path = rootPath.slice();
        path.push(key);
        const value = source[key];
        if (typeof value === 'object' && value !== null) {
          recursivePathCalculation(value, path, (target[key] = {}));
        } else {
          target[key] = path.join('.');
        }
      }
    }
  };
  recursivePathCalculation(obj);
  return result as T;
};
