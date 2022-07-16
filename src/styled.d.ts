import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
    success: string;
    alert: string;
    BG: string;
    link: string;
    body: string;
    headingLG: string;
    headingMD: string;
    headingSM: string;
  }
}
