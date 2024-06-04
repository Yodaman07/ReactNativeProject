import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image
} from 'react-native';
import { useState } from 'react'



function Start(): React.JSX.Element {
    const [signedIn, setSignedIn] = useState(false)
    const signIn =
        (<View style={{ backgroundColor: "white", height: "100%" }}>
            <View style={styles.itemContainer}>
                <Text style={styles.title} > Welcome to a testing game! </Text>
                <TextInput style={styles.input} placeholder='Enter Username Here'></TextInput>
                <Button title='Submit' onPress={() => setSignedIn(true)} />
            </View >
        </View>)

    if (!signedIn) {
        return (signIn)
    } else {
        return Game()
    }
}

function Game(): React.JSX.Element {
    return (
        <View>
            <Text>Hi</Text>
        </View>
    )
}

function Profile(): React.JSX.Element {
    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <Text>Hello!</Text>
        </View>
    )
}

function Main(): React.JSX.Element {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator>
                {/* https://stackoverflow.com/questions/60439210/how-to-pass-props-to-screen-component-with-a-tab-navigator pass props*/}
                <Tab.Screen name="Start" component={Start} />
                <Tab.Screen name='Profiles' component={Profile} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Image
                            style={{ width: size, height: size }}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/256/1077/1077114.png' }}></Image>
                    }
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    itemContainer: {
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