import React, { useState } from "react";
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


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
//
//
//
// const tasks = [{
//     "question": "Nie ma skrzydeł, a trzepocze, nie ma ust, a mamrocze," +
//         "nie ma nóg, a pląsa, nie ma zębów, a kąsa.",
//     "answers": [{
//         "content": "Wiatr",
//         "isCorrect": true
//     },
//     {
//         "content": "Woda",
//         "isCorrect": false
//     },
//     {
//         "content": "Ogień",
//         "isCorrect": false
//     },
//     {
//         "content": "Mucha",
//         "isCorrect": false
//     },
//     ],
//     "duration": 30
// },
// ];
//
// const test = [{
//     "id": 1,
//     "name": "Zagadki",
//     "description": "Sprawdź swoją wiedzę w najciekawszych zagadkach.",
//     tasks,
// },
// ];


const checkAnswer = (givenAnswer) => {

    console.log(givenAnswer);
    if (givenAnswer.isCorrect) {
        Alert.alert("That's correct answer!");
        // answerHasBeenGiven(true)
    } else {
        Alert.alert("That's WRONG answer!");
        // answerHasBeenGiven(false)
    }
    // return Alert.alert("Alert!!!");
}

// const answerHasBeenGiven = (isTrue)  => {
//     let navigation = useNavigation();
//     console.log(isTrue);
//     navigation.navigate('Test', {correctAnswer: isTrue});
// };

const Answer = ({ answer, style }) => (
    <TouchableOpacity onPress={() => checkAnswer(answer)} style={[styles.answer, style]}>
        <Text style={styles.title}>{answer.content}</Text>
    </TouchableOpacity>
);

export default function ListOfAnswers({ navigation, allAnswers }) {
    const [selectedId, setSelectedId] = useState(null);

    const renderAnswer = ({ item }) => {
        const backgroundColor = item.isCorrect === selectedId ? "black" : "orange";


        return (
            <Answer
                answer={item}
                // onPress={() => checkAnswer()}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={allAnswers}
                renderItem={renderAnswer}
                // keyExtractor={(item,index) => {answerr=item, indexOfAnswer=index}}
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
    answer: {
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});