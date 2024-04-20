import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';


function Main(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.content} > Hello </Text>
            <UserInput />
        </View >
    );
}


function UserInput(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Enter text here'></TextInput>
        </View>
    );
}



const styles = StyleSheet.create({

    container: {
        flex: 0.3, justifyContent: "center"
    },
    content: {
        textAlignVertical: "center", textAlign: "center", fontSize: 32, backgroundColor: "blue"
    },
    input: {
        textAlignVertical: "center",
        textAlign: "center",
        // fontSize: 24,
        // backgroundColor: "green",
        borderWidth: 1,
        // flex: 0.3
    }

})

export default Main;