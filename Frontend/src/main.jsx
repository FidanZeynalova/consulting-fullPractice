import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MembersContextProvider from './context/MembersContext.jsx'
import FavoritesContextProvider from './context/FavoritesMembers.jsx'

createRoot(document.getElementById('root')).render(
 <FavoritesContextProvider>
  <MembersContextProvider>
    <App />
  </MembersContextProvider>
 </FavoritesContextProvider>
)
