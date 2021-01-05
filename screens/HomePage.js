import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import TestScreen from './TestScreen';
import ResultScreen from './ResultScreen';
import NameScreen from './NameScreen';


// function NotificationsScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button onPress={() => navigation.goBack()} title="Go back home" />
//         </View>
//     );
// }

const Drawer = createDrawerNavigator();

export default function HomePage() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Start">
                <Drawer.Screen name="Start" component={NameScreen} />
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Test" component={TestScreen} />
                <Drawer.Screen name="Result" component={ResultScreen} />
                {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

