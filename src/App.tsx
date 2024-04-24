import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { GlobalCss } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import ErrorBoundary from './components/ErrorBoundary'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
            <GlobalCss />
            <Rotas />
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </div>
  )
}

export default App
