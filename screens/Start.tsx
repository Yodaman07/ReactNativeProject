import {
    Text, View, StyleSheet, TextInput, Button
} from 'react-native'
import { useState } from 'react'
import Increment from '../ui_elements/Increment';
// import firestore from '@react-native-firebase/firestore';


type GamePropType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}
type SignInPropTypes = {
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Start({ setUsername }: { setUsername: SignInPropTypes["setUsername"] }): React.JSX.Element {
    const [signedIn, setSignedIn] = useState(false)
    const [count, setCount] = useState(0) // I had an error previously (fixed with this code now) bc hooks are under conditionals https://stackoverflow.com/questions/60582036/react-native-rendered-more-hooks-than-during-the-previous-render-error

    if (!signedIn) {
        return (<SignIn setUsername={setUsername} setSignedIn={setSignedIn} />)
    } else {
        return (<Game count={count} setCount={setCount} />)
    }
}
function SignIn({ setUsername, setSignedIn }: SignInPropTypes): React.JSX.Element {
    // const data = async () => {
    //     // const userdata = getFirestore().collection("Users").doc("gWPYtOFTrVRMLPyUTcZD").get()
    //     // return userdata

    //     const userdata = await firestore().collection("Users").doc("gWPYtOFTrVRMLPyUTcZD").onSnapshot(doc => {
    //         console.log(doc.name)
    //     })
    // }
    // console.log(data)
    console.log("aa")

    // firestore()
    //     .collection('Users')
    //     .doc('gWPYtOFTrVRMLPyUTcZD')
    //     .get()
    //     .then(documentSnapshot => {
    //         console.log('User exists: ', documentSnapshot.exists);

    //         if (documentSnapshot.exists) {
    //             console.log('User data: ', documentSnapshot.data());
    //         }
    //     });

    return (
        <View style={styles.bg}>
            <View style={styles.itemContainer}>
                <Text style={styles.title} > Welcome to a testing game! </Text>
                <TextInput style={styles.input}
                    placeholder='Enter Username Here'
                    onChangeText={name => setUsername(name)}
                    defaultValue={""} />
                <Button title='Submit' onPress={() => {
                    setSignedIn(true);
                }} />
            </View >
        </View>
    )
}

function Game({ count, setCount }: GamePropType): React.JSX.Element {
    return (
        <View style={styles.bg}>
            <View style={styles.game}>
                <Increment label="-" pressEvent={() => setCount(count - 1)} />
                <Text style={{ fontSize: 32, padding: 30 }}>{count}</Text>
                <Increment label="+" pressEvent={() => setCount(count + 1)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    itemContainer: {
        flex: 1, justifyContent: "center", alignSelf: "center"
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 50,
    },
    input: {
        textAlign: "center",
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    bg: {
        backgroundColor: "white",
        height: "100%"
    },
    game: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})