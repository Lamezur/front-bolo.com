import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/contextapi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
