/** Позволяет импортировать файлы с расширением .styl в файлы .ts */

declare module "*.styl" {
    const exports: { [exportName: string]: string };
    export = exports;
}