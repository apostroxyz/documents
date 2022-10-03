declare module '*.pdf' {
  const url: string;
  // eslint-disable-next-line import/no-default-export
  export default url;
}

declare module '*.html' {
  const url: string;
  // eslint-disable-next-line import/no-default-export
  export default url;
}

// TODO remove types below when this bug will be fixed: https://github.com/vercel/next.js/pull/30060

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}
