import React, { useState, useEffect } from 'react';
import {
    Alert, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,
    TouchableOpacity, RefreshControl, AsyncStorage
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

function showAlert() {
    Alert.alert("Alert!!!");
}

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}


const Item = ({ item, style }) => (
    <TouchableOpacity onPress={() => { showAlert() }} style={[styles.item, style]}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.elementInRow}>
                <Text style={{ fontFamily: "Inter_500Medium", color: 'white' }}>{item.nick}</Text>
            </View>
            <View style={styles.elementInRow}>
                <Text style={{ fontFamily: "Inter_500Medium", color: 'white' }}>{item.score}/{item.total}</Text>
            </View>
            <View style={styles.elementInRow}>
                <Text style={{ fontFamily: "Inter_500Medium", color: 'white' }}>{item.type}</Text>
            </View>
            <View style={styles.elementInRow}>
                <Text style={{ fontFamily: "Inter_500Medium", color: 'white' }}>{item.date}</Text>
            </View>

        </View>
    </TouchableOpacity>
);


const ResultsFlatList = () => {
    const [results, setResults] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        const getStatusInterval = setInterval(() => {
            downloadData();
        }, 2000);

        return () => {
            clearInterval(getStatusInterval);
        };
    });

    function getData() {
        fetch('http://tgryl.pl/quiz/results')
            .then((response) => response.json())
            .then((json) => setResults(json))
            .catch((error) => console.error(error))
            .finally(() => saveTestInAsync());
        // .finally(() => console.log(results));
    };

    // *saving data in AsyncStorage
    const saveTestInAsync = async () => {
        try {
            let jsonValue = JSON.stringify(results);
            if (jsonValue !== null) {
                await AsyncStorage.setItem("Results", jsonValue);
            }
        } catch (error) {
            alert(error);
        }
    }

    // *loading data from AsyncStorage
    const loadTestFromAsync = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem("Results");
            if (jsonValue != null) {
                setResults(JSON.parse(jsonValue));
                console.log("TEST ASYNC" + results);
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
                console.log("Downloading data");
                getData();
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
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={results}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}

                refreshControl={
                    < RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
        padding: 2,
        marginVertical: 2,
        marginHorizontal: 16,
        borderWidth: 4,
        borderColor: '#FBB500'
    },
    listRow: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    elementInRow: {
        flex: 1,
        marginHorizontal: 2,
        backgroundColor: '#976D00',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default ResultsFlatList;