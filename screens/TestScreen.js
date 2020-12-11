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
    let questionDuration = 3;

    const [questionDurationHook, setQuestionDurationHook] = useState(questionDuration);
    const [questionNmbr, setQuestionNmbr] = useState(questionnNmbr);
    console.log(questionNmbr);

    const nmbrOfQuestions = test[testId].tasks.length;
    const question = test[testId].tasks[questionNmbr].question;
    const everyAnswer = test[testId].tasks[questionNmbr].answers;


    const [givenAnswerHook,setGivenAnswerHook] = useState(null);


    function setHooks() {
        setQuestionDurationHook(questionDuration);
        setQuestionNmbr(questionNmbr+1);
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
        if (questionNmbr < nmbrOfQuestions-1 && !isEnded) {
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

    function numberOfQuestion(nmbr: questionNmbr) {
        return  questionNmbr < nmbrOfQuestions ? questionNmbr+1 : "Nan";
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