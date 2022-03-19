declare module '*.module.scss' {
  interface ClassNames {
    [className: string]: string;
  }

  let classNames: ClassNames;

  export = classNames;
}
