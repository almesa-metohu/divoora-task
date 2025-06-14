import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';
import { createTamagui, createTokens } from 'tamagui';

export const tokens = createTokens({
  color: {
    primary: '#E80725',
    primaryHover: '#C0051E',

    background: '#FFFFFF',
    backgroundSubtle: '#F7F7F8',
    text: '#000000',
    textSoft: '#666666',
    border: '#E0E0E0',

    backgroundDark: '#121212',
    backgroundSubtleDark: '#1E1E1E',
    textDark: '#FFFFFF',
    textSoftDark: '#CCCCCC',
    borderDark: '#333333',
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 40,
    7: 48,
    8: 64,
    9: 80,
    true: 10,
  },
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 40,
    7: 48,
    8: 64,
    9: 80,
    true: 10,
  },
  radius: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
});

const headingFont = createInterFont({
  weight: {
    400: '400',
    600: '600',
    700: '700',
  },
});
const bodyFont = createInterFont();

export const themes = {
  light: {
    background: tokens.color.background,
    backgroundSubtle: tokens.color.backgroundSubtle,
    color: tokens.color.text,
    colorSoft: tokens.color.textSoft,
    primary: tokens.color.primary,
    primaryHover: tokens.color.primaryHover,
    borderColor: tokens.color.border,
  },
  dark: {
    background: tokens.color.backgroundDark,
    backgroundSubtle: tokens.color.backgroundSubtleDark,
    color: tokens.color.textDark,
    colorSoft: tokens.color.textSoftDark,
    primary: tokens.color.primary,
    primaryHover: tokens.color.primaryHover,
    borderColor: tokens.color.borderDark,
  },
};

const config = createTamagui({
  defaultFont: 'body',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
