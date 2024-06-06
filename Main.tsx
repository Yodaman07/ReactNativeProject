import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    TouchableHighlight
} from 'react-native';
import { useState } from 'react'
import Increment from './ui_elements/Increment';

type GamePropType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

function Start({ setUsername }: { setUsername: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element {
    const [signedIn, setSignedIn] = useState(false)
    const [count, setCount] = useState(0) // error bc hooks are under conditionals https://stackoverflow.com/questions/60582036/react-native-rendered-more-hooks-than-during-the-previous-render-error

    const signIn =
        (<View style={styles.bg}>
            <View style={styles.itemContainer}>
                <Text style={styles.title} > Welcome to a testing game! </Text>
                <TextInput style={styles.input}
                    placeholder='Enter Username Here'
                    onChangeText={name => setUsername(name)}
                    defaultValue={""} />
                <Button title='Submit' onPress={() => { setSignedIn(true) }} />
            </View >
        </View>)

    if (!signedIn) {
        return (signIn)
    } else {
        return (<Game count={count} setCount={setCount} />)
    }
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

function Profile({ username }: { username: string }): React.JSX.Element {
    return (
        <View style={styles.bg}>
            <Text>Hello!</Text>
            <View style={{ flexDirection: "row" }}>
                <Text>Username: </Text>
                <Text>{username}</Text>
            </View>
        </View>
    )
}

function Main(): React.JSX.Element {
    const Tab = createBottomTabNavigator()
    const [username, setUsername] = useState(" ")
    return (
        <NavigationContainer>
            <Tab.Navigator>
                {/* https://stackoverflow.com/questions/60439210/how-to-pass-props-to-screen-component-with-a-tab-navigator pass props*/}
                <Tab.Screen name="Start">
                    {() => <Start setUsername={setUsername} />}
                </Tab.Screen>

                <Tab.Screen name='Profiles' children={() => <Profile username={username} />} options={{
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
        // backgroundColor: "green"
    }
})

export default Main;