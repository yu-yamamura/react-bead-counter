export type ValueOf<T> = T[keyof T];

export type PropType<T, P extends keyof T> = T[P];
