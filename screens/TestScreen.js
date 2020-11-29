import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default function TestScreen({ navigation }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Test Screen</Text>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
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