import {Stack} from "expo-router";
import {Provider} from "react-redux";
import {store} from "../store/Store";
import {PaperProvider} from "react-native-paper";

function RootLayout() {
    return(
        <Provider store={store}>
            <PaperProvider>
                <Stack>
                    <Stack.Screen name='dashboard' options={{headerShown: false}}/>
                    {/*<Stack.Screen name='Student' />*/}

                </Stack>
            </PaperProvider>
        </Provider>
    )
}

export default RootLayout;