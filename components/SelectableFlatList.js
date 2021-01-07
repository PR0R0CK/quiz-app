import React, { useState, useEffect } from 'react';
import {
    Alert, SafeAreaView, View, FlatList, StyleSheet, Text,
    StatusBar, AsyncStorage, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import NetInfo from "@react-native-community/netinfo";


function showAlert() {
    Alert.alert("Alert!!!");
}


const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
);

export default function SelectableFlatList({ }) {

    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
    const [test, setTest] = useState(null);

    useEffect(() => {
        const getStatusInterval = setInterval(() => {
            downloadData();
        }, 2000); // 86400000 - period of day in mili seconds

        return () => {
            clearInterval(getStatusInterval)
        };
    }, [test]);

    function getData() {
        fetch('http://tgryl.pl/quiz/tests')
            .then((response) => response.json())
            .then((json) => setTest(json))
            .catch((error) => console.error(error))
            .finally(() => saveTestInAsync());
        // .finally(() => console.log("test"));
    };

    // *saving data in AsyncStorage
    const saveTestInAsync = async () => {
        try {
            let jsonValue = JSON.stringify(test);
            if (jsonValue !== null) {
                await AsyncStorage.setItem("Tests", jsonValue);
            }
        } catch (error) {
            alert(error);
        }
    }

    // *loading data from AsyncStorage
    const loadTestFromAsync = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem("Tests");
            if (jsonValue != null) {
                setTest(JSON.parse(jsonValue));
                console.log("TEST ASYNC" + test);
            }
        } catch (error) {
            alert(error);
        }
    }

    //* downloading data if is internet connection
    //* else loading data from AsyncStorage
    function downloadData() {
        NetInfo.fetch().then(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            if (state.type == 'wifi') {
                // setInterval(() => {
                console.log("Downloading data");
                getData();
                // }, 86400000);
            } else {
                loadTestFromAsync();
                console.log("Loaded data");
            }
        })
    }


    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "grey" : "orange";

        return (
            <Item
                item={item}
                // onPress={() => setSelectedId(item.id)}
                // onPress={() => showAlert()}
                onPress={() => navigation.navigate('Test', { testId: item.id })}
                // onPress={() => console.log({ item } + "#####" + item.id)}
                // onPress={() => navigation.navigate('Test', {
                //     testId: test[0].id,
                // })}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={test}
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
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontFamily: "Inter_700Bold",
    },
    description: {
        fontFamily: "Inter_500Medium"
    }
});
// export default SelectableFlatList;