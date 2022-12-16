import styled from 'styled-components'

export const HomeWrapper = styled.div`
  height: 100vh;
`

export const SearchWrapper = styled.header<{ stockField: string }>`
  height: ${({ stockField }) => (stockField ? '100px' : '100vh')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.7s ease-in-out 1500;

  input {
    display: inline-block;

    ${({ stockField }) => {
      if (stockField) {
        return `
          width: 700px;
          height: 30px;
        `
      }

      return `
        width: 40%;
        height: 60px;
      `
    }}

    font-size: ${({ theme, stockField }) =>
      stockField ? theme.font.size.small : theme.font.size.tinyLarge};
    transition: all 0.7s ease-in-out 1500, border 0.3s ease-in-out;

    @media ${({ theme }) => theme.device.laptopL} {
      width: ${({ stockField }) => (stockField ? '80%' : '60%')};
    }
  }
`

export const SearchSuggestions = styled.header<{ stockField: string }>`
  margin-top: 10px;
  font-size: ${({ theme, stockField }) =>
    stockField ? theme.font.size.tiny : theme.font.size.small};

  button {
    margin-left: 10px;
  }
`
export const Suggestion = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border.normal};
  border-radius: 15px;
  padding: 3px 5px;
  color: ${({ theme }) => theme.color.text.normal};
  cursor: pointer;
  background: ${({ theme }) => theme.color.background};
  transition: all 1s ease-in-out 1500;

  &:hover {
    background-color: ${({ theme }) => theme.color.border.background};
    color: ${({ theme }) => theme.color.text.selected};
  }
`
export const ContentWrapper = styled.div`
  margin: 40px 200px;

  @media ${({ theme }) => theme.device.tablet} {
    margin: 20px 12%;
  }
`

export const StockHistory = styled.div`
  display: flex;
  height: 100%;
  margin-top: 20px;

  [data-chart-source-type='G2Plot'] {
    width: 100%;
    height: 100%;
    max-height: 400px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: column;
    flex-direction: column-reverse;

    [data-chart-source-type='G2Plot'] {
      max-height: 250px;
    }
  }
`

export const StockList = styled.div`
  min-width: 250px;
  margin-right: 30px;
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px 15px;

  .card + .card {
    margin-top: 10px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    margin-right: 0;
    margin-top: 20px;
  }
`

export const StockHistoryWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  .ant-picker-range {
    margin: 0 auto;
  }
`

export const StockTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.tinyLarge};
  margin: 40px 0;
`
