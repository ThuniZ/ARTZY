import { db } from '../firebase-config';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import useAuth from './useAuth';

export default function useCurrentUser () {
    const currentUser = useAuth()
    const [artist, setArtist] = useState(null)

    useEffect(() => {
        if (currentUser) {
          const userEmail = currentUser.email
          const colRef = collection(db, 'artists')
          const q = query(colRef, where('eMail', '==', userEmail))
          const unsub = onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach(doc => {
              setArtist({...doc.data(), id: doc.id})
            })
          })
          return unsub
        }
      }, [currentUser])

      return artist
}