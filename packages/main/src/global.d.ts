declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.less" {
    const styles: unknown;
    export = styles;
}

declare module "*.css";
