import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MembersContextProvider from './context/MembersContext.jsx'
import FavoritesContextProvider from './context/FavoritesMembers.jsx'
import { Provider } from 'react-redux'
import { store } from './App/store.js'

createRoot(document.getElementById('root')).render(
 <FavoritesContextProvider>
  <Provider store={store}>
    <App />
  </Provider>
 </FavoritesContextProvider>
)
