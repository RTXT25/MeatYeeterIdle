export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

// Reference:
// https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
export function camelToTitle(camel: string): string {
    let title = camel.replace(/([A-Z])/g, " $1");
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return title;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(func: unknown): func is Function {
    return typeof func === "function";
}

export enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
    Default = "Up"
}
