import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Home from '@/pages/home/index'

const App = () => {
  const routes = useRoutes([{ path: '/', element: <Home /> }])
  return routes
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
