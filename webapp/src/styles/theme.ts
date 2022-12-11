const theme = {
  color: {
    primary: '#1D1CE5',
    secondary: '#0E0E72',
    background: '#F8F8F8',
    border: '#CACACA',
    text: {
      normal: '#181717',
      withBackground: '#FFFFFF'
    }
  },
  font: {
    family: {
      rubik: "'Rubik', sans-serif"
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
  preDefined: {
    cardBoxShadow: '0 8px 16px 0 rgba(152, 152, 152, 0.2)',
    cardBoxShadowHover: '0 14px 30px 0 rgba(152, 152, 152, 0.3)',
    modalBoxShadow: '0 10px 15px 0px rgb(152 152 152 / 4%)'
  }
}

type ITheme = typeof theme

export { theme as default, type ITheme }
