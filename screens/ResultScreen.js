import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import ResultsFlatList from '../components/ResultsFlatList';

export default function ResultScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={styles.header}>
                <Text style={styles.title}>Result Screen</Text>
                {/* <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            /> */}
            </View>
            {/* <View style={{ justifyContent: 'flex-start', }}> */}
            <View style={styles.headerNickPointTypeData}>
                <View style={{ width: '38%', marginHorizontal: 2, height: '100%', backgroundColor: '#5C4200', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>nick</Text>
                </View>
                <View style={{ width: '12%', marginHorizontal: 2, height: '100%', backgroundColor: '#5C4200', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>point</Text>
                </View>
                <View style={{ width: '24%', marginHorizontal: 2, height: '100%', backgroundColor: '#5C4200', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>type</Text>
                </View>
                <View style={{ width: '23%', marginHorizontal: 2, height: '100%', backgroundColor: '#5C4200', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>date</Text>
                </View>
            </View>
            {/* </View> */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ResultsFlatList></ResultsFlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
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
        flexDirection: 'row', padding: 2,
        marginVertical: 1,
        marginHorizontal: 16,
        alignSelf: 'flex-start',
        backgroundColor: '#FBB500',
        height: 60,
        borderWidth: 4,
        borderColor: '#FBB500'
    }
})