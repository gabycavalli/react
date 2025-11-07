//getDataById(id)
//getDataByCategory(catParam)

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc, // agregado
} from 'firebase/firestore';
import { dcProducts } from './prod';

const firebaseConfig = {
  apiKey: 'AIzaSyDdUrJv0Um0ua516NfOCRvMnqulaTX6S1M',
  authDomain: 'react-comic-store-d0d51.firebaseapp.com',
  projectId: 'react-comic-store-d0d51',
  storageBucket: 'react-comic-store-d0d51.firebasestorage.app',
  messagingSenderId: '524181170413',
  appId: '1:524181170413:web:b30f44a7598b3d655584e4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//getData()
//export const getData = () => db.collection('products').get();

export async function getData() {
  const productsCollection = collection(db, 'products');
  const productsSnapshot = await getDocs(productsCollection);
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataDocs;
}

export async function getProductById(id) {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  const dataDoc = docSnap.data();
  return {
    id: docSnap.id,
    ...dataDoc,
  };
}

export async function getDataByCategory(catParam) {
  const productsCollection = collection(db, 'products');
  const q = query(productsCollection, where('category', '==', catParam));

  const productsSnapshot = await getDocs(q);
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataDocs;
}

export async function createOrder(orderData) {
  const ordersCollection = collection(db, 'orders');
  const orderDocRef = await addDoc(ordersCollection, orderData);
  console.log('Order created with ID:', orderDocRef.id);
  return orderDocRef.id;
}

export async function exportDataToFirestore() {
  const productsCollection = collection(db, 'products');
  for (let product of dcProducts) {
    await addDoc(productsCollection, product);
    console.log('Producto agregado:', product.title);
  }
}

//
