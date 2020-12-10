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



const tasks = [{
    "question": "Nie ma skrzydeł, a trzepocze, nie ma ust, a mamrocze," +
        "nie ma nóg, a pląsa, nie ma zębów, a kąsa.",
    "answers": [{
        "content": "Wiatr",
        "isCorrect": true
    },
    {
        "content": "Woda",
        "isCorrect": false
    },
    {
        "content": "Ogień",
        "isCorrect": false
    },
    {
        "content": "Mucha",
        "isCorrect": false
    },
    ],
    "duration": 30
},
];

const test = [{
    "id": 1,
    "name": "Zagadki",
    "description": "Sprawdź swoją wiedzę w najciekawszych zagadkach.",
    tasks,
},
];



const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.content}</Text>
    </TouchableOpacity>
);

export default function ListOfAnswers({ navigation }) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.isCorrect === selectedId ? "black" : "orange";
        // const { testId } = route.params.testId;



        function pickedAnswer() {
            // const [selectedAnswer, setSelectedAnswer] = useState(null);
            // console.log("You choose answer");
            // console.log(route.params.testId)
            Alert.alert("You choose answer");
        }

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
                data={test[0].tasks[0].answers}
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