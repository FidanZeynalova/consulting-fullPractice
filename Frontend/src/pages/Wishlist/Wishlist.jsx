import React, { useContext, useState } from 'react'
import { FavoritesMembers } from '../../context/FavoritesMembers'
import { Helmet } from "react-helmet";

function Wishlist() {
  let { favorites, setFavorites } = useContext(FavoritesMembers)
  let [loading, setLoading] = useState(true)
  console.log(loading);

  console.log(favorites);

  return (

    <>
      <Helmet>
        <link rel="icon" href="https://is.gd/N1tEiN" type="image/x-icon" />
        <title>Wishlist Page</title>
      </Helmet>
      <div className='Wishlist'>
        <div className="container">
          <h1>Wishlist</h1>
          <div className="card-wrapper">
            {
              favorites.map((fav) => (
                <div className="card">
                  <div className="image">
                    <img src={fav.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="head">
                      <p>{fav.name}</p>
                      <span>{fav.specialization}</span>
                    </div>
                    <div className="btns">
                      <button>💔</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
