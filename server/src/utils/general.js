export const removeEmptyValuesFromObj = (obj) =>
  Object.entries(obj).reduce((a, [key, val]) => (val ? ((a[key] = val), a) : a), {});
