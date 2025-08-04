import {collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"
import app from "./init"

const db = getFirestore(app)

export default async function getDataSlug(slug,collectionName,mode){
    if(mode ===1){
        const docRef = doc(db, collectionName, slug);
        const docsnap = await getDoc(docRef)
        try{
            return docsnap.data()

        }catch{
            return null;
        }
    }else if(mode === 2){
        const collectionref = collection(db,collectionName);
        const querysnapshot = await getDocs(collectionref)
        const docssnap = querysnapshot.docs.map((doc)=>doc.data())
        return docssnap;
    }
     
}



