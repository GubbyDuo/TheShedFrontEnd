import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Feed from "./screens/feed/FeedPage";
import { Provider } from "react-native-paper";
import store from "./React-Store";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator>
                    <Stack.Screen name="My App Feed" component={Feed} />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}
