import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, TextInput, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectableFlatList from '../components/SelectableFlatList';


export default function NameScreen({ navigation }) {
    const [name, setName] = useState();

    const saveNameInAsync = async () => {
        try {
            await AsyncStorage.setItem("MyName", name);
            if (name !== null) {
                navigation.navigate('Home');
            }
        } catch (error) {
            alert(error);
        }
    }

    const loadNameFromAsync = async () => {
        try {
            let name = await AsyncStorage.getItem("MyName");
            if (name !== null) {
                setName(name);
            }
        } catch (error) {
            alert(error);
        }
    }

    const removeNameFromAsync = async () => {
        try {
            await AsyncStorage.removeItem("MyName");
        } catch (error) {
            alert(error);
        } finally {
            setName("");
        }
    }

    useEffect(() => {
        loadNameFromAsync();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title} >Welcome {name}</Text>
            </View>

            <View style={styles.containerBottom}>
                <View style={styles.listContainer}>
                    <Text style={styles.name}>
                        Your name is set as: {name}
                    </Text>
                    <Text style={styles.name}>
                        You can change your name below
                    </Text>

                    <TextInput style={styles.input}
                        onChangeText={text => setName(text)}>

                    </TextInput>

                    <TouchableOpacity style={styles.button}
                        onPress={() => saveNameInAsync()}>
                        <Text style={styles.name}>Set my name.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                        onPress={() => removeNameFromAsync()}>
                        <Text style={styles.name}>Remove my name.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    containerBottom: {
        flex: 14,
        justifyContent: 'center'
    },
    header: {
        paddingTop: 38,
        backgroundColor: 'orange',
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: "Inter_900Black"
    },
    listContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: "Inter_900Black"
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'stretch',
        margin: 10,
        height: 64,
        paddingHorizontal: 16,
        fontSize: 20,
        fontFamily: "Inter_900Black",
    },
    button: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin: 10,
        borderRadius: 6,
    },

});