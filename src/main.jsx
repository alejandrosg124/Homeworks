import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GreenZoneProvider } from './context/GreenZoneContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GreenZoneProvider>
        <App />
      </GreenZoneProvider>
    </Provider>
  </React.StrictMode>,
)
