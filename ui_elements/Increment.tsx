import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import { useState } from 'react';

type IncrementPropType = {
    label: string,
    pressEvent: () => any
}

function Increment({ label, pressEvent }: IncrementPropType): React.JSX.Element {
    return (
        <TouchableHighlight style={styles.TouchableHighlight} underlayColor="#cfd8e8" onPress={pressEvent}>
            <View style={styles.box}>
                <Text style={styles.Text}>{label}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    TouchableHighlight: {
        // backgroundColor: "green"
        width: 50,
        height: 50,
        justifyContent: "center",
        borderColor: "#a3aab5",
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: "#b6becc"
    },

    box: {

    },

    Text: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center"
    }
});

export default Increment;