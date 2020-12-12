// import * as React from 'react';
import React, { useState } from 'react';
import { Alert, StyleSheet, View, Text, StatusBar, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
// import ListOfAnswers from '../components/ListOfAnswers';
import { useNavigation } from '@react-navigation/native';


const test = [{
    "id": 0,
    "name": "Zagadki",
    "description": "Sprawdź swoją wiedzę w najciekawszych zagadkach.",
    tasks: [{
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
    {
        "question": "Nie oddycha, a żyje, nie pragnie, a wciąż pije.",
        "answers": [{
            "content": "Ryba",
            "isCorrect": true
        },
        {
            "content": "Obelix",
            "isCorrect": false
        },
        {
            "content": "Trup",
            "isCorrect": false
        },
        {
            "content": "Mucha",
            "isCorrect": false
        },
        ],
        "duration": 30
    },
    ],
},
{
    "id": 1,
    "name": "Powiedzenia",
    "description": "Sprawdź swoją wiedzę w powiedzeniach.",
    tasks: [{
        "question": "Siała baba mak...",
        "answers": [{
            "content": "...dziadek wiedział",
            "isCorrect": false
        },
        {
            "content": "...i zasiała koguta",
            "isCorrect": false
        },
        {
            "content": "...nie wiedziała jak",
            "isCorrect": true
        },
        {
            "content": "...a mucha lata koło brzucha",
            "isCorrect": false
        },
        ],
        "duration": 30
    },
    {
        "question": "Gdzie kucharek 6 tam ...",
        "answers": [{
            "content": "..ryba",
            "isCorrect": false
        },
        {
            "content": "..nie ma co jeść",
            "isCorrect": false
        },
        {
            "content": "..cycków dwanaście",
            "isCorrect": true
        },
        {
            "content": "..pleśń na ścianie",
            "isCorrect": false
        },
        ],
        "duration": 30
    },
    ],
},
];

// let timeout;
// let tmp;
const wait = (timeout) => {
    return new Promise(resolve => {
        // clearTimeout(tmp);
        setTimeout(resolve, timeout);
    });
};

let isAnswerGiven = false;



export default function TestScreen({ navigation, route }) {

    // React.useEffect( () => {
    //
    //     // window.addEventListener("load",  pageLoad);
    //
    //     //component will unmount
    //     return () => {
    //         console.log("Returning to screen");
    //         // window.removeEventListener("load", pageLoad);
    //     }
    //
    // });

    let isEnded = false;



    const testId = route.params.testId;
    const givenAnss = route.params;
    // console.log('##');
    // console.log(givenAnss);

    let questionnNmbr = 0;
    // let questionDuration = test[testId].tasks[questionNmbr].duration;
    let questionDuration = 5;

    const [questionDurationHook, setQuestionDurationHook] = useState(questionDuration);
    const [questionNmbr, setQuestionNmbr] = useState(questionnNmbr);
    console.log(questionNmbr);

    const nmbrOfQuestions = test[testId].tasks.length;
    const question = test[testId].tasks[questionNmbr].question;
    const everyAnswer = test[testId].tasks[questionNmbr].answers;


    const [givenAnswerHook, setGivenAnswerHook] = useState(null);


    function setHooks() {
        if (isAnswerGiven) {
            setQuestionDurationHook(questionDuration);
            setQuestionNmbr(questionNmbr + 1);
        }
    }

    // function setHooksAsDefault() {
    //     if (isEnded) {
    //         setQuestionDurationHook(questionDuration);
    //         setQuestionNmbr(questionnNmbr);
    //     }
    // }

    function showQuestionDuration() {
        while (questionDurationHook > -1 && !isEnded) {

            wait(1000).then(() => setQuestionDurationHook(questionDurationHook - 1));
            return questionDurationHook;
        }
        if (questionNmbr < nmbrOfQuestions - 1 && !isEnded) {
            // clearTimeout(timeout);
            wait(1000).then(() => setHooks());
            // clearTimeout(timeout);
            return "End of time!";
        } else {
            isEnded = true;
            // clearTimeout(timeout);
            // setHooksAsDefault();
            return "You have finished the test!";
        }
    }

    function numberOfQuestion(questionNmbr) {
        return questionNmbr < nmbrOfQuestions ? questionNmbr + 1 : "Nan";
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Test Screen</Text>
            </View>
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <View style={styles.nmbrOfQuestion}>
                        <Text style={styles.quest3of10}>Question {numberOfQuestion(questionNmbr)} of {nmbrOfQuestions}
                        </Text>
                        <Text style={styles.timeRightTop}>Time to the next question: {showQuestionDuration()} sec
                    </Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.timeText}>
                            {showQuestionDuration()}
                        </Text>
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.theQuestion}>
                            {question}
                        </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <ListOfAnswers allAnswers={everyAnswer} />
                </View>
            </View>
        </View >
    );
}



// LIST OF ANSWERS COMPONENT
let givenAns = { isGivenAns: false, isCorrectAns: false };

// const checkAnswer = (givenAnswer) => {
//     console.log(givenAnswer);
//     if (givenAnswer.isCorrect) {
//         Alert.alert("That's correct answer!");
//         givenAns.isGivenAns = true;
//         givenAns.isCorrectAns = true;
//     } else {
//         Alert.alert("That's WRONG answer!");
//         givenAns.isGivenAns = true;
//     }
// };


const Answer = ({ answer, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.answerr, style]}>
        <Text style={styles.titlee}>{answer.content}</Text>
    </TouchableOpacity>
);


function ListOfAnswers({ navigation, allAnswers, route }) {

    const checkAnswer = (givenAnswer) => {
        isAnswerGiven = true
        console.log(givenAnswer);
        if (givenAnswer.isCorrect) {
            Alert.alert("That's correct answer!");
            givenAns.isGivenAns = true;
            givenAns.isCorrectAns = true;
            console.log({ givenAns });
            // navigation.navigate('Test', {givenAns: givenAns});
            givenAns.isGivenAns = false;
            givenAns.isCorrectAns = false;
        } else {
            Alert.alert("That's WRONG answer!");
            givenAns.isGivenAns = true;
            // navigation.navigate('Test', {givenAns: givenAns});
            console.log({ givenAns });
            givenAns.isGivenAns = false;
        }
    };

    const [selectedId, setSelectedId] = useState(null);
    const renderAnswer = ({ item }) => {
        const backgroundColor = item.isCorrect === selectedId ? "black" : "orange";
        return (
            <Answer
                answer={item}
                onPress={() => checkAnswer(item)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.containerr}>
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
    containerr: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    answerr: {
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    titlee: {
        fontSize: 20,
    },
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
    mainView: {
        flex: 14,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    quest3of10: {
        flex: 1,
        textAlign: 'left',
        padding: 10,
        fontSize: 15,
    },
    timeRightTop: {
        flex: 1,
        textAlign: 'right',
        padding: 10,
        fontSize: 15,
    },
    time: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        // backgroundColor: 'grey',
        // height: 50,
    },
    centreText: {
        flex: 1,
        padding: 10,
        fontSize: 15,
    },
    timeText: {
        flex: 1,
        padding: 10,
        fontSize: 30,
    },
    question: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    theQuestion: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 20
    },
    nmbrOfQuestion: {
        flex: 1,
        flexDirection: 'row'
    }
});