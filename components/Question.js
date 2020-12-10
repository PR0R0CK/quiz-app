// import * as React from 'react';
// import { StyleSheet, Button, View, Text, FlatList, SafeAreaView, StatusBar, TouchableOpacity, Alert } from 'react-native';
// import ListOfAnswers from '../components/ListOfAnswers';
//
//
// const test = [{
//     "id": 0,
//     "name": "Zagadki",
//     "description": "Sprawdź swoją wiedzę w najciekawszych zagadkach.",
//     tasks:[{
//         "question": "Nie ma skrzydeł, a trzepocze, nie ma ust, a mamrocze," +
//             "nie ma nóg, a pląsa, nie ma zębów, a kąsa.",
//         "answers": [{
//             "content": "Wiatr",
//             "isCorrect": true
//         },
//             {
//                 "content": "Woda",
//                 "isCorrect": false
//             },
//             {
//                 "content": "Ogień",
//                 "isCorrect": false
//             },
//             {
//                 "content": "Mucha",
//                 "isCorrect": false
//             },
//         ],
//         "duration": 30
//     },
//         {
//             "question": "Nie oddycha, a żyje, nie pragnie, a wciąż pije.",
//             "answers": [{
//                 "content": "Ryba",
//                 "isCorrect": true
//             },
//                 {
//                     "content": "Obelix",
//                     "isCorrect": false
//                 },
//                 {
//                     "content": "Trup",
//                     "isCorrect": false
//                 },
//                 {
//                     "content": "Mucha",
//                     "isCorrect": false
//                 },
//             ],
//             "duration": 30
//         },
//     ],
// },
//     {
//         "id": 1,
//         "name": "Powiedzenia",
//         "description": "Sprawdź swoją wiedzę w powiedzeniach.",
//         tasks: [{
//             "question": "Siała baba mak...",
//             "answers": [{
//                 "content": "...dziadek wiedział",
//                 "isCorrect": false
//             },
//                 {
//                     "content": "...i zasiała koguta",
//                     "isCorrect": false
//                 },
//                 {
//                     "content": "...nie wiedziała jak",
//                     "isCorrect": true
//                 },
//                 {
//                     "content": "...a mucha lata koło brzucha",
//                     "isCorrect": false
//                 },
//             ],
//             "duration": 30
//         },
//             {
//                 "question": "Nie oddycha, a żyje, nie pragnie, a wciąż pije.",
//                 "answers": [{
//                     "content": "Ryba",
//                     "isCorrect": true
//                 },
//                     {
//                         "content": "Obelix",
//                         "isCorrect": false
//                     },
//                     {
//                         "content": "Trup",
//                         "isCorrect": false
//                     },
//                     {
//                         "content": "Mucha",
//                         "isCorrect": false
//                     },
//                 ],
//                 "duration": 30
//             },
//         ],
//     },
// ];
//
// export default function TestScreen({ navigation, route }) {
//
//
//     // const { item } = route.params;
//     // console.log('##' + tmp);
//     let testId = route.params.testId;
//     // let test = route.params.test;
//     const questionDuration = test[testId].tasks[0].duration;
//     // console.log(test[testId].tasks[0].question);
//     console.log(testId);
//     console.log(test[testId].tasks[0].question);
//
//     // function takeQuestion() {
//     //     const
//     //     let question = testt[testId].tasks.map(testItem => {
//     //         return testItem.pop("key":)
//     //     })
//     // }
//
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.title}>Test Screen</Text>
//             </View>
//             <View style={styles.mainView}>
//                 <View style={styles.container}>
//                     <View style={styles.nmbrOfQuestion}>
//                         <Text style={styles.quest3of10}>Question 3 of 10
//                         </Text>
//                         <Text style={styles.timeRightTop}>Time: {questionDuration} sec
//                         </Text>
//                     </View>
//                     <View style={styles.time}>
//                         <Text style={styles.centreText}>
//                             {questionDuration}
//                         </Text>
//                     </View>
//                     <View style={styles.question}>
//                         <Text style={styles.theQuestion}>
//                             {test[testId].tasks[0].question}
//                         </Text>
//                     </View>
//                 </View>
//                 <View style={styles.container}>
//                     <ListOfAnswers></ListOfAnswers>
//                 </View>
//             </View>
//         </View >
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center'
//     },
//     header: {
//         flex: 1,
//         // height: 80,
//         paddingTop: 38,
//         backgroundColor: 'orange',
//     },
//     mainView: {
//         flex: 14,
//         justifyContent: 'center'
//     },
//     title: {
//         textAlign: 'center',
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     quest3of10: {
//         flex: 1,
//         textAlign: 'left',
//         padding: 10,
//         fontSize: 15,
//     },
//     timeRightTop: {
//         flex: 1,
//         textAlign: 'right',
//         padding: 10,
//         fontSize: 15,
//     },
//     time: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignContent: 'center',
//         // backgroundColor: 'grey',
//         // height: 50,
//     },
//     centreText: {
//         flex: 1,
//         padding: 10,
//         fontSize: 15,
//     },
//     question: {
//         flex: 3,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'column',
//     },
//     theQuestion: {
//         flex: 1,
//         paddingLeft: 16,
//         paddingRight: 16,
//         paddingBottom: 16,
//         fontSize: 20
//     },
//     nmbrOfQuestion: {
//         flex: 1,
//         flexDirection: 'row'
//     }
// });