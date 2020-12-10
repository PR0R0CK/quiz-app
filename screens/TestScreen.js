import * as React from 'react';
import { StyleSheet, Button, View, Text, FlatList, SafeAreaView, StatusBar, TouchableOpacity, Alert } from 'react-native';
import ListOfAnswers from '../components/ListOfAnswers';


export default function TestScreen({ navigation }) {
    // const { item } = route.params;
    // console.log('##' + tmp);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Test Screen</Text>
            </View>
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <View style={styles.nmbrOfQuestion}>
                        <Text style={styles.quest3of10}>Question 3 of 10
                    </Text>
                        <Text style={styles.timeRightTop}>Time: 28 sec
                    </Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.centreText}>
                            .................................. Time ..................................
                        </Text>
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.centreText}>
                            Here will be the question
                        </Text>
                        <Text style={styles.underTheQuestion}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book.
                        </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <ListOfAnswers></ListOfAnswers>
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
    question: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    underTheQuestion: {
        flex: 2,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 12
    },
    nmbrOfQuestion: {
        flex: 1,
        flexDirection: 'row'
    }
});