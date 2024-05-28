import React, { PropsWithChildren } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';


function Main(): React.JSX.Element {
    return (

        <View style={styles.container}>
            <Text style={styles.title} > Welcome to a testing game! </Text>
            <TextInput style={styles.input} placeholder='Enter Username Here'></TextInput>
            <Button title='Submit' />
        </View >
    );
}


// function SubmitBtn(): React.JSX.Element {
//     return (    
//     )
// }



const styles = StyleSheet.create({

    container: {
        flex: 1, justifyContent: "center", alignSelf: "center"
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 50,
        // backgroundColor: "blue"
    },
    input: {
        textAlign: "center",
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        // backgroundColor: "green"
        // alignSelf: "center"
    }

})

export default Main;