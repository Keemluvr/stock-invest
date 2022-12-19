import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css'
import '@ant-design/flowchart/dist/index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import GlobalContext from './contexts'
import theme from './styles/theme'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <>
      <GlobalContext>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ToastContainer />
            <Routes />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalContext>
    </>
  )
}

export default App
