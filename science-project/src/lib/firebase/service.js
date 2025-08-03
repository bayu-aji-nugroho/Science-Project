import {collection, doc, getDoc, getDocs, getFirestore, limit, query, Query, QuerySnapshot, where, } from "firebase/firestore"
import app from "./init"

const db = getFirestore(app)

export default async function getDataSlug(slug){
     const docRef = doc(db, "matematika", slug);
     const docsnap = await getDoc(docRef)
    try{
        return docsnap.data()

    }catch{
        return null;
    }
}



