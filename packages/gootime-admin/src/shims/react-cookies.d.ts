declare module "react-cookies" {
  export const load: (
    name: string,
    doNotParse: boolean = false
  ) => string | number | undefined;
  export const loadAll: () => { [key: string]: string | number };
  export const select: (reg?: RegExp) => { [key: string]: string | number };
  export const save: (
    name: string,
    value: string | number | Object,
    options?: CookieOptions
  ) => void;
  export const remove: (name: string, options?: CookieOptions) => void;

  export type CookieOptions = {
    path?: string;
    expires?: Date;
    maxAge?: number;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
  };
}
