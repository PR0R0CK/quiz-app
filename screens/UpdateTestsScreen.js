import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, AsyncStorage } from 'react-native';
import SelectableFlatList from '../components/SelectableFlatList';


export default function UpdateTestsScreen({ navigation }) {
    const [test, setTest] = useState(null);

    useEffect(() => {
        getData();
    });

    function getData() {
        fetch('http://tgryl.pl/quiz/tests')
            .then((response) => response.json())
            .then((json) => setTest(json))
            .catch((error) => console.error(error))
            .finally(() => { });
        // .finally(() => console.log(test));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title} > Your tests has been updated !</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    header: {
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