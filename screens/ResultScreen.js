import * as React from 'react';
import { StyleSheet, View, Text, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ResultsFlatList from '../components/ResultsFlatList';


export default function ResultScreen({ navigation }) {
    // const wait = (timeout) => {
    //     return new Promise(resolve => {
    //         setTimeout(resolve, timeout);
    //     });
    // }

    // const [refreshing, setRefreshing] = React.useState(false);
    // const onRefresh = React.useCallback(() => {
    //     setRefreshing(true);

    //     wait(2000).then(() => setRefreshing(false));
    // }, []);

    // refreshControl = {
    //                 < RefreshControl refreshing = { refreshing } onRefresh = { onRefresh } />}

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Result Screen</Text>
            </View>
            <View style={styles.headerNickPointTypeData}>
                <View style={styles.elementInRow}>
                    <Text style={{ fontFamily: "Inter_500Medium", color: 'white' }}>nick</Text>
                </View>
                <View style={styles.elementInRow}>
                    <Text style={{ fontFamily: "Inter_500Medium", color: 'white' }}>point</Text>
                </View>
                <View style={styles.elementInRow}>
                    <Text style={{ fontFamily: "Inter_500Medium", color: 'white' }}>type</Text>
                </View>
                <View style={styles.elementInRow}>
                    <Text style={{ fontFamily: "Inter_500Medium", color: 'white' }}>date</Text>
                </View>
            </View>
            <View style={styles.resultFlatList}>
                <ResultsFlatList></ResultsFlatList>
            </View>
        </View>
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
    title: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontFamily: "Inter_900Black"
    },
    nickPointTypeDate: {
        marginHorizontal: 2,
        height: '100%',
        backgroundColor: '#5C4200',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerNickPointTypeData: {
        flex: 1,
        // height: 60,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 2,
        marginVertical: 1,
        marginHorizontal: 16,
        backgroundColor: '#FBB500',
        borderWidth: 4,
        borderColor: '#FBB500'
    },
    elementInRow: {
        flex: 1,
        marginHorizontal: 2,
        backgroundColor: '#5C4200',
        alignItems: 'center',
        justifyContent: 'center'
    },
    resultFlatList: {
        flex: 13,
        justifyContent: 'center'
    }
})