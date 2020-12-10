import React, { useState } from 'react';
import { Alert, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DATA = [
    {
        id: '1',
        title: 'First Item',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make ' +
            'a type specimen book.It has survived not only five centuries, but also the leap ' +
            'into electronic typesetting, remaining essentially unchanged.It was popularised ' +
            'in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
            'and more recently with desktop publishing software like Aldus PageMaker ' +
            'including versions of Lorem Ipsum.'
    },
    {
        id: '2',
        title: 'Second Item',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make ' +
            'a type specimen book.It has survived not only five centuries, but also the leap ' +
            'into electronic typesetting, remaining essentially unchanged.It was popularised ' +
            'in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
            'and more recently with desktop publishing software like Aldus PageMaker ' +
            'including versions of Lorem Ipsum.'
    },
    {
        id: '3',
        title: 'Third Item',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make ' +
            'a type specimen book.It has survived not only five centuries, but also the leap ' +
            'into electronic typesetting, remaining essentially unchanged.It was popularised ' +
            'in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
            'and more recently with desktop publishing software like Aldus PageMaker ' +
            'including versions of Lorem Ipsum.'
    },
    {
        id: '4',
        title: 'Fourth Item',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make ' +
            'a type specimen book.It has survived not only five centuries, but also the leap ' +
            'into electronic typesetting, remaining essentially unchanged.It was popularised ' +
            'in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
            'and more recently with desktop publishing software like Aldus PageMaker ' +
            'including versions of Lorem Ipsum.'
    },
    {
        id: '5',
        title: 'Fifth Item',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make ' +
            'a type specimen book.It has survived not only five centuries, but also the leap ' +
            'into electronic typesetting, remaining essentially unchanged.It was popularised ' +
            'in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
            'and more recently with desktop publishing software like Aldus PageMaker ' +
            'including versions of Lorem Ipsum.'
    },
    {
        id: '6',
        title: 'Sixth Item',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make ' +
            'a type specimen book.It has survived not only five centuries, but also the leap ' +
            'into electronic typesetting, remaining essentially unchanged.It was popularised ' +
            'in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
            'and more recently with desktop publishing software like Aldus PageMaker ' +
            'including versions of Lorem Ipsum.'
    },
    {
        id: '7',
        title: 'Seventh Item',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make ' +
            'a type specimen book.It has survived not only five centuries, but also the leap ' +
            'into electronic typesetting, remaining essentially unchanged.It was popularised ' +
            'in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
            'and more recently with desktop publishing software like Aldus PageMaker ' +
            'including versions of Lorem Ipsum.'
    },
    {
        id: '8',
        title: 'Eighth Item',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make ' +
            'a type specimen book.It has survived not only five centuries, but also the leap ' +
            'into electronic typesetting, remaining essentially unchanged.It was popularised ' +
            'in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
            'and more recently with desktop publishing software like Aldus PageMaker ' +
            'including versions of Lorem Ipsum.'
    },
    {
        id: '9',
        title: 'Nineth Item',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
            'when an unknown printer took a galley of type and scrambled it to make ' +
            'a type specimen book.It has survived not only five centuries, but also the leap ' +
            'into electronic typesetting, remaining essentially unchanged.It was popularised ' +
            'in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
            'and more recently with desktop publishing software like Aldus PageMaker ' +
            'including versions of Lorem Ipsum.'
    },
];


const tasks = [{
    "question": "Nie ma skrzydeł, a trzepocze, nie ma ust, a mamrocze," +
        "nie ma nóg, a pląsa, nie ma zębów, a kąsa.",
    "answers": [{
        "content": "Wiatr",
        "isCorrect": true
    },
    {
        "content": "Woda",
        "isCorrect": false
    },
    {
        "content": "Ogień",
        "isCorrect": false
    },
    {
        "content": "Mucha",
        "isCorrect": false
    },
    ],
    "duration": 30
},
{
    "question": "Nie oddycha, a żyje, nie pragnie, a wciąż pije.",
    "answers": [{
        "content": "Ryba",
        "isCorrect": true
    },
    {
        "content": "Obelix",
        "isCorrect": false
    },
    {
        "content": "Trup",
        "isCorrect": false
    },
    {
        "content": "Mucha",
        "isCorrect": false
    },
    ],
    "duration": 30
},
];

const test = [{
    "id": 0,
    "name": "Zagadki",
    "description": "Sprawdź swoją wiedzę w najciekawszych zagadkach.",
    tasks,
},
{
    "id": 1,
    "name": "Powiedzenia",
    "description": "Sprawdź swoją wiedzę w powiedzeniach.",
    tasks: [{
        "question": "Siała baba mak...",
        "answers": [{
            "content": "...dziadek wiedział",
            "isCorrect": false
        },
        {
            "content": "...i zasiała koguta",
            "isCorrect": false
        },
        {
            "content": "...nie wiedziała jak",
            "isCorrect": true
        },
        {
            "content": "...a mucha lata koło brzucha",
            "isCorrect": false
        },
        ],
        "duration": 30
    },
    {
        "question": "Nie oddycha, a żyje, nie pragnie, a wciąż pije.",
        "answers": [{
            "content": "Ryba",
            "isCorrect": true
        },
        {
            "content": "Obelix",
            "isCorrect": false
        },
        {
            "content": "Trup",
            "isCorrect": false
        },
        {
            "content": "Mucha",
            "isCorrect": false
        },
        ],
        "duration": 30
    },
    ],
},
];

function showAlert() {
    Alert.alert("Alert!!!");
}

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.description}</Text>
    </TouchableOpacity>
);

export default function SelectableFlatList({ }) {
    // const SelectableFlatList = ({ navigation }) => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "grey" : "orange";

        return (
            <Item
                item={item}
                // onPress={() => setSelectedId(item.id)}
                // onPress={() => showAlert()}
                // onPress={() => navigation.navigate('Test', { item })}
                onPress={() => console.log({ item } + "#####" + item)}
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
        fontSize: 32,
    },
});
// export default SelectableFlatList;