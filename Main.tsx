import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    StyleSheet, Text, View, Image
} from 'react-native';
import { useState } from 'react'
import Start from "./screens/Start.tsx"

//https://rnfirebase.io/ for setting up firebase (doesnt for fully)
// v fixes firebase errors when setting up
//https://stackoverflow.com/questions/73416469/after-installing-react-native-firebase-app-its-build-will-failed-in-react-nativ


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
    bg: {
        backgroundColor: "white",
        height: "100%"
    },
})

export default Main;