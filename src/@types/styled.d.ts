import 'styled-components';
import { light as THEME } from '../themes/light';

declare module 'styled-components' {
  type ThemeType = typeof THEME;

  export interface DefaultTheme extends ThemeType {}
}
