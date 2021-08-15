import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: 'AIzaSyChbtG38C7yf7skCzcF-XLfh2c8qMkoa4E',
    authDomain: 'ovan-ac865.firebaseapp.com',
    databaseURL: 'https://ovan-ac865-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'ovan-ac865',
    storageBucket: 'ovan-ac865.appspot.com',
    messagingSenderId: '91291807190',
    appId: '1:91291807190:web:7c8f280a0e72645b6b8877',
    measurementId: 'G-PB0S3JKG1Q',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true,
    merge: true,
});

export async function getAllFood() {
    const foodCollection = await db.collection('food').orderBy('name', 'asc').get();
    return foodCollection.docs.map(doc => doc.data());
}

export async function getAllFoodTags() {
    const foodCollection = await db.collection('food_tag').orderBy('name', 'asc').get();
    return foodCollection.docs.map(doc => doc.data().name);
}

export async function getFoodBySlug(slug) {
    const foodCollection = await db.collection('food').where('slug', '==', slug).get();
    return foodCollection.docs.map(doc => doc.data())[0];
}

export async function getFoodByTag(tag) {
    const foodCollection = await db.collection('food').where('tags', 'array-contains-any', tag).get();
    return foodCollection.docs.map(doc => doc.data());
}
