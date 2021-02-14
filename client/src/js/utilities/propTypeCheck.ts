type PropTypeCheck = (prop: string, validateList: string[]) => boolean;
export const propTypeCheck: PropTypeCheck = (prop, validateList) => validateList.indexOf(prop) !== -1;
