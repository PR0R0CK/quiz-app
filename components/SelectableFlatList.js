import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';


function showAlert() {
    Alert.alert("Alert!!!");
}


const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
);

export default function SelectableFlatList({ }) {

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
        // .finally(() => console.log("test"));
    };
    // const SelectableFlatList = ({ navigation }) => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "grey" : "orange";

        return (
            <Item
                item={item}
                // onPress={() => setSelectedId(item.id)}
                // onPress={() => showAlert()}
                onPress={() => navigation.navigate('Test', { testId: item.id })}
                // onPress={() => console.log({ item } + "#####" + item.id)}
                // onPress={() => navigation.navigate('Test', {
                //     testId: test[0].id,
                // })}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={test}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontFamily: "Inter_700Bold",
    },
    description: {
        fontFamily: "Inter_500Medium"
    }
});
// export default SelectableFlatList;