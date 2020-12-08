import React, { useState } from 'react';
import { Alert, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, RefreshControl } from 'react-native';

const DATA = [
    {
        id: '1',
        nick: 'PR0R0CK',
        point: '20/20',
        type: 'test1',
        date: '01-12-2020'
    },
    {
        id: '2',
        nick: 'Geralt',
        point: '18/20',
        type: 'test1',
        date: '28-11-2020'
    },
    {
        id: '3',
        nick: 'PyramidHead',
        point: '2/20',
        type: 'test1',
        date: '01-10-2020'
    },
    {
        id: '4',
        nick: 'PR0R0CK',
        point: '20/20',
        type: 'test1',
        date: '01-12-2020'
    },
    {
        id: '5',
        nick: 'Geralt',
        point: '18/20',
        type: 'test1',
        date: '28-11-2020'
    },
    {
        id: '6',
        nick: 'PyramidHead',
        point: '2/20',
        type: 'test1',
        date: '01-10-2020'
    },
    {
        id: '7',
        nick: 'PR0R0CK',
        point: '20/20',
        type: 'test1',
        date: '01-12-2020'
    },
    {
        id: '8',
        nick: 'Geralt',
        point: '18/20',
        type: 'test1',
        date: '28-11-2020'
    },
    {
        id: '9',
        nick: 'PyramidHead',
        point: '2/20',
        type: 'test1',
        date: '01-10-2020'
    },
];

const results = [
    {
        "nick": 'Marek',
        "score": 18,
        "total": 20,
        "type": 'historia',
        "date": '2018-11-22'
    },
    {
        "nick": 'Darek',
        "score": 17,
        "total": 20,
        "type": 'biologia',
        "date": '2018-11-24'
    },
];

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
                <Text style={{ color: 'white' }}>{item.nick}</Text>
            </View>
            <View style={styles.elementInRow}>
                <Text style={{ color: 'white' }}>{item.score}/{item.total}</Text>
            </View>
            <View style={styles.elementInRow}>
                <Text style={{ color: 'white' }}>{item.type}</Text>
            </View>
            <View style={styles.elementInRow}>
                <Text style={{ color: 'white' }}>{item.date}</Text>
            </View>

        </View>
    </TouchableOpacity>
);

const ResultsFlatList = () => {
    const [selectedId, setSelectedId] = useState(null);

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

    const [refreshing, setRefreshing] = React.useState(false);
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