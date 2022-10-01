import React from 'react'
import useCurrentUser from '../hooks/useCurrentUser';
import useCurrentArtist from '../hooks/useCurrentArtist';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

export default function WishlistItem({prod}) {
    const user = useCurrentUser()
    const artist = useCurrentArtist()
  
      const removeFromWishList = async (product) => {
      if(user) {
        const docRef = doc(db, 'users', `${user?.id}`)
        await updateDoc(docRef, {
            wishList: arrayRemove(product)
        })
      }
      if(artist) {
        const docRef = doc(db, 'artists', `${artist?.id}`)
        await updateDoc(docRef, {
            wishList: arrayRemove(product)
        })
      }
    }

  return (
    <div>
        <div className='product'>
            <div className='productImage'>
            <img src={prod.imageUrl} alt="bild"></img>
            
            <div className='productInfo'>
              <h2>Product: {prod.title}</h2>
              <p id="prodNr">Prod nr: 428539</p>
              
              <h2 id="artistInfo">Artist: {prod.by}</h2>
              
            </div>
            <h2 className='productColor'>Color: Black</h2>
          
            <div className='productPrice'>
              <h2>{prod.price} USD</h2>
            </div>
            <div className='adddelButton'>
            <button id="addButton">Add</button>
            <button onClick={() => removeFromWishList(prod)} id="delButton">Delete</button>
            </div>
            </div>
            </div>
    </div>
  )
}
