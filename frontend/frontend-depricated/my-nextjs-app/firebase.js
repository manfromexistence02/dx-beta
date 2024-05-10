import { initializeApp } from "firebase/app";
import { collection, getDocs,addDoc,updateDoc,deleteDoc,getFirestore,doc,getDoc  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj8jpnqU9Xo1YXVFJh-wCdulweO5z--H8",
  authDomain: "ustudy-96678.firebaseapp.com",
  projectId: "ustudy-96678",
  storageBucket: "ustudy-96678.appspot.com",
  messagingSenderId: "581632635532",
  appId: "1:581632635532:web:51ccda7d7adce6689a81a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database
const db = getFirestore(app);
// const docRef = doc(db, "universities", "6PScoZGddeLUjivK5Bny");

// Create
// const Create = await addDoc(collection(db, "universities"), {
  address: 'Bangladesh, Jhenaidah',
  educationCost: '1 335 000 ₸',
  email: 'rektorat@amu.kz',
  facebook: 'https://www.facebook.com/MeduniverAstana',
  hostel: 'есть',
  image: 'https://firebasestorage.googleapis.com/v0/b/ustudy-96678.appspot.com/o/IMG_20240410_001743.jpg?alt=media&token=ef6b3928-40bd-460b-bbb8-f0445ff37319',
  instagram: 'https://www.instagram.com/amu_mua_official',
  military: 'есть',
  phoneNumber: '(+77172539424)',
  region: 'г. Астана',
  status: 'акционированный',
  universityCode: '1',
  universityDescription: 'Медицинский университет Астана является одним из самых крупных и динамично развивающихся медицинских ВУЗов нашей страны, имеет высокую репутацию в сфере высшего медицинского образования, свои традиции, как в области предоставления образовательных услуг, так и в развитии медицинской науки и клинической деятельности.',
  universityName: 'Медицинский университет Астана',
  website: 'https://amu.edu.kz/',
// });
// console.log(docRef);

// Read
const Read = await getDocs(collection(db, "universities"));
Read.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data().address}`);
});

// Read ONE
// const universitiesRef = await getDoc(collection(db, "universities"));
// const snapshot = await universitiesRef.get();
// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });  
// console.log()
// Update
// await updateDoc(docRef, {
//   name: "Ada Lovelace",
// });

// Delete
// await deleteDoc(docRef);
// await getDoc(docRef);

// console.log(await getDoc(docRef).id);
// const docRef = db.collection('universities').doc('SF');
// const docKer = await docRef.get();
// if (!docKer.exists) {
//   console.log('No such document!');
// } else {
//   console.log('Document data:', docKer.data());
// }  


// import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "universities", "6PScoZGddeLUjivK5Bny");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}