import Typography from "typography"

const customTypography = {
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: ['700']
    },
    {
      name: 'Vollkorn',
      styles: ['400', '400i', '700', '700i', '900', '900i']
    }
  ],
  headerFontFamily: ['Vollkorn', 'Georgia', 'serif'],
  bodyFontFamily: ['Vollkorn', 'Georgia', 'serif'],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
}

const typography = new Typography(customTypography)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
