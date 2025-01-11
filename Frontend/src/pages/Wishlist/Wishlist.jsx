import React, { useContext } from 'react'
import { FavoritesMembers } from '../../context/FavoritesMembers'

function Wishlist() {
  let {favorites,setFavorites} = useContext(FavoritesMembers)
  console.log(favorites);
  
  return (
    <div className='Wishlist'>
      <div className="container">
        <h1>Wishlist</h1>
      <div className="card-wrapper">
     {
      favorites.map((fav)=>(
        <div className="card">
        <div className="image">
          <img src={fav.image} alt="" />
        </div>
        <p>{fav.name}</p>
        <span>{fav.specialization}</span>
      </div>
      ))
     }
        </div>
      </div>
    </div>
  )
}

export default Wishlist
