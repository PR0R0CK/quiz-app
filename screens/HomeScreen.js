import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import SelectableFlatList from '../components/SelectableFlatList';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title} > Home Screen</Text>
                {/* <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            /> */}
            </View>
            <View style={styles.listContainer}>
                <SelectableFlatList />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        // height: 80,
        paddingTop: 38,
        backgroundColor: 'orange',
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: "Inter_900Black"
    },
    listContainer: {
        flex: 14,
        justifyContent: 'center'
    }
});