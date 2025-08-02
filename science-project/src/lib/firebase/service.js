import {collection, getDocs, getFirestore, } from "firebase/firestore"
import app from "./init"

const db = getFirestore(app)

const usersColection = collection(db,"Subjects")

async function getData(params) {
    const query = await getDocs(usersColection)
    const data = query.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    }))
    return data;
}

export default getData;