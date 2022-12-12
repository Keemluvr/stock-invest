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
