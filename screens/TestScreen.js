import React, { useState, useEffect } from 'react';
import {
    Alert, StyleSheet, View, Text, StatusBar, SafeAreaView, FlatList,
    AsyncStorage, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";


// const test = [{
//     "id": "5fd7e4629cc0bd32fcc04d64",
//     "name": "Zagadki",
//     "description": "Sprawdź swoją wiedzę w najciekawszych zagadkach.",
//     "tasks": [{
//         "question": "Nie ma skrzydeł, a trzepocze, nie ma ust, a mamrocze," +
//             "nie ma nóg, a pląsa, nie ma zębów, a kąsa.",
//         "answers": [{
//             "content": "Wiatr",
//             "isCorrect": true
//         },
//         {
//             "content": "Woda",
//             "isCorrect": false
//         },
//         {
//             "content": "Ogień",
//             "isCorrect": false
//         },
//         {
//             "content": "Mucha",
//             "isCorrect": false
//         },
//         ],
//         "duration": 30
//     },
//     {
//         "question": "Nie oddycha, a żyje, nie pragnie, a wciąż pije.",
//         "answers": [{
//             "content": "Ryba",
//             "isCorrect": true
//         },
//         {
//             "content": "Obelix",
//             "isCorrect": false
//         },
//         {
//             "content": "Trup",
//             "isCorrect": false
//         },
//         {
//             "content": "Mucha",
//             "isCorrect": false
//         },
//         ],
//         "duration": 30
//     },
//     ],
// },
// {
//     "id": 1,
//     "name": "Powiedzenia",
//     "description": "Sprawdź swoją wiedzę w powiedzeniach.",
//     "tasks": [{
//         "question": "Siała baba mak...",
//         "answers": [{
//             "content": "...dziadek wiedział",
//             "isCorrect": false
//         },
//         {
//             "content": "...i zasiała koguta",
//             "isCorrect": false
//         },
//         {
//             "content": "...nie wiedziała jak",
//             "isCorrect": true
//         },
//         {
//             "content": "...a mucha lata koło brzucha",
//             "isCorrect": false
//         },
//         ],
//         "duration": 30
//     },
//     {
//         "question": "Gdzie kucharek 6 tam ...",
//         "answers": [{
//             "content": "..ryba",
//             "isCorrect": false
//         },
//         {
//             "content": "..nie ma co jeść",
//             "isCorrect": false
//         },
//         {
//             "content": "..cycków dwanaście",
//             "isCorrect": true
//         },
//         {
//             "content": "..pleśń na ścianie",
//             "isCorrect": false
//         },
//         ],
//         "duration": 30
//     },
//     ],
// },
// ];

// const test = [{ "id": "5fd7e4629cc0bd32fcc04d64", "name": "Jak dobrze znasz ekipę Friza?", "description": "Test o członkach najlepszej ekipy na youtube.", "tags": ["rozrywka", "youtube", "cringe"], "level": "trudny", "numberOfTasks": 5 }]
// let timeout;
// let tmp;
const wait = (timeout) => {
    return new Promise(resolve => {
        // clearTimeout(tmp);
        setTimeout(resolve, timeout);
    });
};

// let isAnswerGiven = false;
let questionnNmbr = 0;


export default function TestScreen({ navigation, route }) {
    // *getting name from AsyncStorage
    const [name, setName] = useState();
    const loadNameFromAsync = async () => {
        try {
            let name = await AsyncStorage.getItem("MyName");
            if (name !== null) {
                setName(name);
            }
        } catch (error) {
            alert(error);
        }
    }

    const [loaded, setLoaded] = useState(true);
    useEffect(() => {
        getData();
        loadNameFromAsync();
        setLoaded(true);
    }, []);

    // console.log("###" + name);
    //



    let isEnded = false;

    const testId = route.params.testId;
    // console.log(testId);

    const [questionDurationHook, setQuestionDurationHook] = useState(questionDuration);
    const [questionNmbr, setQuestionNmbr] = useState(questionnNmbr);

    // let questionNmbr = 0;

    const theTesttt = {
        "id": "5fd7e4629cc0bd32fcc04d64",
        "name": "Loading...",
        "description": "Wait for it...",
        "tags": ["loading", "loading", "loading"],
        "level": "loading",
        "numberOfTasks": 1,
        "tasks": [{
            "question": "How are you feel with waiting?",
            "answers": [{
                "content": "Angry",
                "isCorrect": true
            },
            {
                "content": "Angry",
                "isCorrect": false
            },
            {
                "content": "Angry",
                "isCorrect": false
            },
            {
                "content": "Angry",
                "isCorrect": false
            },
            ],
            "duration": 30,
        }]
    };

    //FETCH TEST
    const [theTest, setTheTest] = useState(theTesttt);
    function getData() {
        fetch(`http://tgryl.pl/quiz/test/${testId}`)
            .then((response) => response.json())
            .then((json) => setTheTest(json))
            .catch((error) => console.error(error))
            .finally(() => { });
        // .finally(() => console.log("theTest"));
    };

    // *saving data in AsyncStorage
    const [testAsync, setTestAsync] = useState(theTesttt);
    const saveTestInAsync = async () => {
        try {
            // console.log(test);
            let jsonValue = JSON.stringify(theTest);
            // console.log("@@@" + jsonValue);
            await AsyncStorage.setItem("Test", jsonValue);
            if (jsonValue !== null) {
                console.log("@@@" + jsonValue)
            }
        } catch (error) {
            alert(error);
        }
    }

    const loadTestFromAsync = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem("Test");
            if (jsonValue != null) {
                setTestAsync(JSON.parse(jsonValue));
            }
        } catch (error) {
            alert(error);
        }
    }
    //*
    NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);

        if (state.isConnected) {
            useEffect(() => {
                getData();
                saveTestInAsync();
            }, [])
        }
    });

    useEffect(() => {
        // getData();
        // // saveTestInAsync();
        loadTestFromAsync();
    }, []);

    // let questionDuration = theTest.tasks[questionNmbr].duration;
    let questionDuration = 5;

    const nmbrOfQuestions = theTest.tasks.length;
    let question = theTest.tasks[questionNmbr].question;
    let everyAnswer = theTest.tasks[questionNmbr].answers;
    let tags = theTest.tags.join(',');


    const [score, setScore] = useState(0);
    function sendResultsOfTestPOST() {
        let resultOfTheTest = {
            nick: name,
            score: score,
            total: nmbrOfQuestions,
            type: tags
        };

        fetch('http://tgryl.pl/quiz/result', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(resultOfTheTest)
        }).then(s => (navigation.navigate('Result')))
    };

    let givenAns = { isGivenAns: false, isCorrectAns: false };
    function changeQuestion() {
        if (givenAns.isGivenAns) {
            if (questionNmbr < nmbrOfQuestions - 1) {
                if (givenAns.isCorrectAns) {
                    setScore(score + 1);
                }
                questionnNmbr++;
                setQuestionNmbr(questionnNmbr);
                // clearTimeout(wait);
                setQuestionDurationHook(questionDuration);
            } else {
                sendResultsOfTestPOST();
                questionnNmbr = 0;
                setQuestionNmbr(questionnNmbr);

                //POST method
            }
        }
    };

    function logEvth() {
        console.log("Nmbr of questions: " + nmbrOfQuestions);
        console.log("question: " + question);
        console.log("everyAnswer: " + everyAnswer);
    };



    // function setHooks() {
    //     setQuestionDurationHook(questionDuration);
    //     // setQuestionNmbr(questionNmbr + 1);
    // };

    const clearState = () => {
        setQuestionDurationHook(questionDuration);
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     clearState;
    // };

    // function showQuestionDuration() {
    //     while (questionDurationHook > -1 && !isEnded) {

    //         wait(1000).then(() => setQuestionDurationHook(questionDurationHook - 1));
    //         return questionDurationHook;
    //     }
    //     if (questionNmbr < nmbrOfQuestions - 1 && !isEnded) {
    //         // clearTimeout(timeout);
    //         wait(1000).then(() => clearState());
    //         // clearTimeout(timeout);
    //         return "End of time!";
    //     } else {
    //         isEnded = true;
    //         // clearTimeout(timeout);
    //         return "You have finished the test!";
    //     }
    // };

    function numberOfQuestion(questionNmbr) {
        let qNmbr = questionNmbr < nmbrOfQuestions ? questionNmbr + 1 : "Nan";
        return qNmbr;
    };

    // logEvth();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Test Screen</Text>
            </View>
            {!loaded ? <Text>Lading</Text> : <View style={styles.mainView}>
                <View style={styles.container}>
                    <View style={styles.nmbrOfQuestion}>
                        <Text style={styles.quest3of10}>Question {numberOfQuestion(questionNmbr)} of {nmbrOfQuestions}
                        </Text>
                        <Text style={styles.timeRightTop}>Time to the next question: {/*showQuestionDuration()*/} sec
                    </Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.timeText}>
                            {/* {showQuestionDuration()} */}
                        </Text>
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.theQuestion}>
                            {question}
                        </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <ListOfAnswers allAnswers={everyAnswer} givenAns={givenAns} changeQuestion={changeQuestion} />
                </View>
            </View>}
        </View >
    );
};


///////////////////////////////////////////////////////////////////////////
//////////////////////// LIST OF ANSWERS COMPONENT ////////////////////////
///////////////////////////////////////////////////////////////////////////


const Answer = ({ answer, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.answerr, style]}>
        <Text style={styles.titlee}>{answer.content}</Text>
    </TouchableOpacity>
);


function ListOfAnswers({ navigation, allAnswers, givenAns, changeQuestion }) {

    const checkAnswer = (givenAnswer) => {

        // console.log(givenAnswer);
        if (givenAnswer.isCorrect) {
            givenAns.isGivenAns = true;
            givenAns.isCorrectAns = true;
            // console.log({ givenAns });
            changeQuestion();
            Alert.alert("That's correct answer! Next: " + questionnNmbr);
            givenAns.isGivenAns = false;
            givenAns.isCorrectAns = false;
        } else {
            Alert.alert("That's WRONG answer!");
            givenAns.isGivenAns = true;
            // console.log({ givenAns });
            changeQuestion();
            givenAns.isGivenAns = false;
        }
    };


    const [selectedId, setSelectedId] = useState(null);
    const renderAnswer = ({ item }) => {
        const backgroundColor = item.isCorrect === selectedId ? "black" : "orange";
        return (
            <Answer
                answer={item}
                onPress={() => checkAnswer(item)}//checkAnswer(item)}
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
        fontFamily: "Inter_700Bold",

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
        fontSize: 25,
        fontFamily: "Inter_900Black"
    },
    quest3of10: {
        flex: 1,
        textAlign: 'left',
        padding: 10,
        fontSize: 15,
        fontFamily: "Inter_500Medium"
    },
    timeRightTop: {
        flex: 1,
        textAlign: 'right',
        padding: 10,
        fontSize: 15,
        fontFamily: "Inter_500Medium"
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
        fontFamily: "Inter_500Medium"
    },
    timeText: {
        flex: 1,
        padding: 10,
        fontSize: 30,
        fontFamily: "Inter_500Medium"
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
        fontSize: 20,
        fontFamily: "Inter_500Medium"
    },
    nmbrOfQuestion: {
        flex: 1,
        flexDirection: 'row'
    }
});