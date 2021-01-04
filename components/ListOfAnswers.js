// import React, { useState } from "react";
// import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native';


// const DATA = [
//     {
//         id: "1",
//         title: "Answer A",
//     },
//     {
//         id: "2",
//         title: "Answer B",
//     },
//     {
//         id: "3",
//         title: "Answer C",
//     },
//     {
//         id: "4",
//         title: "Answer D",
//     },
// ];


// let givenAns = { isGivenAns: false, isCorrectAns: false };

// // const checkAnswer = (givenAnswer) => {
// //     console.log(givenAnswer);
// //     if (givenAnswer.isCorrect) {
// //         Alert.alert("That's correct answer!");
// //         givenAns.isGivenAns = true;
// //         givenAns.isCorrectAns = true;
// //     } else {
// //         Alert.alert("That's WRONG answer!");
// //         givenAns.isGivenAns = true;
// //     }
// // };


// const Answer = ({ answer, onPress, style }) => (
//     <TouchableOpacity onPress={onPress} style={[styles.answerr, style]}>
//         <Text style={styles.titlee}>{answer.content}</Text>
//     </TouchableOpacity>
// );

// export default function ListOfAnswers({ navigation, allAnswers, route }) {

//     const checkAnswer = (givenAnswer) => {
//         console.log(givenAnswer);
//         if (givenAnswer.isCorrect) {
//             Alert.alert("That's correct answer!");
//             givenAns.isGivenAns = true;
//             givenAns.isCorrectAns = true;
//             console.log({ givenAns });
//             // navigation.navigate('Test', {givenAns: givenAns});
//             givenAns.isGivenAns = false;
//             givenAns.isCorrectAns = false;
//         } else {
//             Alert.alert("That's WRONG answer!");
//             givenAns.isGivenAns = true;
//             // navigation.navigate('Test', {givenAns: givenAns});
//             console.log({ givenAns });
//             givenAns.isGivenAns = false;
//         }
//     };

//     const [selectedId, setSelectedId] = useState(null);
//     const renderAnswer = ({ item }) => {
//         const backgroundColor = item.isCorrect === selectedId ? "black" : "orange";
//         return (
//             <Answer
//                 answer={item}
//                 onPress={() => checkAnswer(item)}
//                 style={{ backgroundColor }}
//             />
//         );
//     };

//     return (
//         <SafeAreaView style={styles.containerr}>
//             <FlatList
//                 data={allAnswers}
//                 renderItem={renderAnswer}
//                 // keyExtractor={(item,index) => {answerr=item, indexOfAnswer=index}}
//                 extraData={selectedId}
//             />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     containerr: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     answerr: {
//         padding: 15,
//         marginVertical: 4,
//         marginHorizontal: 16,
//     },
//     titlee: {
//         fontSize: 20,
//     },
// });