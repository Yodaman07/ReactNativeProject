import { TabView, SceneMap } from 'react-native-tab-view';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import { useState } from 'react';


function Main(): React.JSX.Element {
    const scene_1 = () => (<View style={styles.container}>
        <Text style={styles.title} > Welcome to a testing game! </Text>
        <TextInput style={styles.input} placeholder='Enter Username Here'></TextInput>
        <Button title='Submit' />
    </View >)

    const scene_2 = () => (<View></View>)

    const map = SceneMap({
        "game": scene_1,
        "settings": scene_2
    });

    const [index, setIndex] = useState(0)
    const [routes] = useState(
        [{ key: "game", title: "Game" }, { key: "settings", title: "Settings" }]
    )

    return (
        <TabView //https://github.com/react-navigation/react-navigation/issues/11999
            style={{ paddingTop: 40 }}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={map}
        />
    );
}


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