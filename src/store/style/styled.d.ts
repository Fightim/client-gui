import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    colors: {
      blue030: string;
      blue040: string;
      blue050: string;
      blue100: string;
      blue200: string;
      blue300: string;
      orange100: string;
      purple100: string;
      red100: string;
      white100: string;
      white200: string;
      gary100: string;
      black100: string;
    };
  }
}
