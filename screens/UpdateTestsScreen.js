import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, AsyncStorage } from 'react-native';
import NetInfo from "@react-native-community/netinfo";


export default function UpdateTestsScreen({ navigation }) {
    const [test, setTest] = useState(null);
    const [downloaded, setDownloaded] = useState(false);

    useEffect(() => {
        downloadData();
    });

    function getData() {
        fetch('http://tgryl.pl/quiz/tests')
            .then((response) => response.json())
            .then((json) => setTest(json))
            .catch((error) => console.error(error))
            .finally(() => saveTestInAsync());
        // .finally(() => console.log(test));
    };

    // *saving data in AsyncStorage
    const saveTestInAsync = async () => {
        try {
            // console.log(test);
            let jsonValue = JSON.stringify(test);
            // console.log("@@@" + jsonValue);
            await AsyncStorage.setItem("Tests", jsonValue);
            // if (jsonValue !== null) {
            //     console.log("@@@" + jsonValue)
            // }
        } catch (error) {
            alert(error);
        }
    }

    const loadTestFromAsync = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem("Tests");
            if (jsonValue != null) {
                setTest(jsonValue);
            }
        } catch (error) {
            alert(error);
        }
    }

    //* checking internet connection
    function downloadData() {
        NetInfo.fetch().then(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            if (state.type == 'wifi') {
                getData();
                // loadTestFromAsync();
                setDownloaded(true);
                console.log("Is connected?", downloaded);
            } else {
                loadTestFromAsync();
                setDownloaded(false);
                console.log("Is connected?", downloaded);
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {downloaded ?
                    <Text style={styles.title} > Your tests has been updated !</Text>
                    :
                    <Text style={styles.title} > There is no Internet connection !</Text>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    header: {
        backgroundColor: 'orange',
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: "Inter_900Black"
    },
    listContainer: {
        flex: 14,
        justifyContent: 'center'
    }
});