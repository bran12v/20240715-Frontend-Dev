import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/** providing the store to the ENTIRE application */}
    <Provider store={store}>
      <App />
    </Provider>
    
  </StrictMode>,
)
