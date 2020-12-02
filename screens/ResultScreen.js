import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ResultsFlatList from '../components/ResultsFlatList';

export default function ResultScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Result Screen</Text>
            </View>
            <View style={styles.headerNickPointTypeData}>
                <View style={styles.elementInRow}>
                    <Text style={{ color: 'white' }}>nick</Text>
                </View>
                <View style={styles.elementInRow}>
                    <Text style={{ color: 'white' }}>point</Text>
                </View>
                <View style={styles.elementInRow}>
                    <Text style={{ color: 'white' }}>type</Text>
                </View>
                <View style={styles.elementInRow}>
                    <Text style={{ color: 'white' }}>date</Text>
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
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
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