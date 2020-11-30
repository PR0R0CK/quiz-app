import React, { useState } from "react";
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";


const DATA = [
    {
        id: "1",
        title: "Answer A",
    },
    {
        id: "2",
        title: "Answer B",
    },
    {
        id: "3",
        title: "Answer C",
    },
    {
        id: "4",
        title: "Answer D",
    },
];

function pickedAnswer() {
    Alert.alert("You choose answer");
}

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

export default function ListOfAnswers({ navigation }) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "grey" : "orange";

        return (
            <Item
                item={item}
                onPress={() => pickedAnswer()}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
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
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});