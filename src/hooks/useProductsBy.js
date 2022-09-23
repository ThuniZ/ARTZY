import { useState, useEffect } from 'react'
import { onSnapshot, collection, orderBy, where, query } from 'firebase/firestore'
import { db } from '../firebase-config'

const useProductsBy = (categoryRef) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const colRef = collection(db, 'products')
        const q = query(colRef, where('categoryHandle', '==', categoryRef)) 
        const unsub = onSnapshot(q, snapshot => {
            setData(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
        return unsub
    }, [categoryRef])
    
    return data
}

export default useProductsBy;

