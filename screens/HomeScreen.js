import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import SelectableFlatList from '../components/selectableFlatList';

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Home Screen</Text>
                {/* <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            /> */}
            </View>
            <View>
                <SelectableFlatList></SelectableFlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'orange',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})