// import * as React from 'react';
import React, { useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import ListOfAnswers from '../components/ListOfAnswers';


const test = [{
    "id": 0,
    "name": "Zagadki",
    "description": "Sprawdź swoją wiedzę w najciekawszych zagadkach.",
    tasks:[{
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
];

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};

export default function TestScreen({ navigation, route }) {

    const testId = route.params.testId;

    let questionNmbr = 0;
    // let questionDuration = test[testId].tasks[questionNmbr].duration;
    let questionDuration = 5;
    const nmbrOfQuestions = test[testId].tasks.length;
    const question = test[testId].tasks[questionNmbr].question;
    const everyAnswer = test[testId].tasks[questionNmbr].answers;

    // console.log(testId);
    // console.log(test[testId].tasks[0].question);


    const [questionDurationHook, setQuestionDurationHook] = useState(questionDuration);
    function showQuestionDuration() {
        while (questionDurationHook > -1) {
            wait(1000).then(() => setQuestionDurationHook(questionDurationHook - 1));
            return questionDurationHook;
        }
        wait(1000).then(() => setQuestionDurationHook(questionDuration));
        return "End of time!";
    }

  const checkAnswer = () => {

  }


    function numberOfQuestion(nmbr: questionNmbr) {
        return  questionNmbr < nmbrOfQuestions ? questionNmbr+1 : "Nan";
    }

    // const [modalVisible, setModalVisible] = useState(false);
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
                        <Text style={styles.timeRightTop}>Time: {showQuestionDuration()} sec
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
                    <ListOfAnswers allAnswers={everyAnswer}/>
                </View>
            </View>
        </View >
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