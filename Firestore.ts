import firestore from '@react-native-firebase/firestore';

export async function addUser() {
    const userCollection = firestore().collection("Users")
    await userCollection.doc("gWPYtOFTrVRMLPyUTcZD").set({
        name: "yodaman",
        number: 11
    })

}


