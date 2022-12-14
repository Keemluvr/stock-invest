const theme = {
  color: {
    primary: '#26A69A',
    secondary: '#0E0E72',
    background: '#F8F8F8',
    border: {
      normal: '#E7E7E7',
      selected: '#C3FFFF',
      background: '#E0FFFF'
    },
    text: {
      normal: '#181717',
      withBackground: '#FFFFFF',
      link: '#26A69A',
      selected: '#26A69A'
    },
    button: {
      background: '#302FE7',
      backgroundHover: '#1D1CE5'
    },
    scrollbar: {
      background: '#FFFFFF',
      color: '#81888D'
    },
    stockCompare: {
      arrowDown: '#ff4d4f',
      arrowUp: '#52c41a',
      equal: '#faad14'
    }
  },
  font: {
    family: {
      rubik: '"Gill Sans", sans-serif'
    },
    size: {
      extraTiny: '12px',
      tiny: '14px',
      small: '16px',
      medium: '18px',
      extraMedium: '24px',
      tinyLarge: '30px',
      large: '36px',
      extraLarge: '48px',
      tinyHuge: '52px',
      huge: '58px',
      extraHuge: '107px'
    }
  },
  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '470px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  },
  device: {
    mobileS: '(max-width: 320px)',
    mobileM: '(max-width: 375px)',
    mobileL: '(max-width: 470px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    laptopL: '(max-width: 1440px)',
    desktop: '(max-width: 2560px)'
  },
  preDefined: {
    cardBoxShadow: ' 5px 5px 20px rgba(0 0 0/0.15)'
  }
}

type ITheme = typeof theme

export { theme as default, type ITheme }
