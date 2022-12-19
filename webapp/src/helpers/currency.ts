export const formatToUSD = (value: number) =>
  `$ ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
