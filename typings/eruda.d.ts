declare module 'eruda' {
    export const init: (props: {
        autoScale?: boolean;
        defaults?:{
            displaySize?: number;
            transparency?: number;
        }
    }) => undefined;
}