import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: '#333333',
    borderColor: '#333333',

    focus: {
      backgroundColor: '#8AA6F91a',
    },
  },
  light: {
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e69e',

    focus: {
      backgroundColor: '#ffffff',
    },
  },
});
