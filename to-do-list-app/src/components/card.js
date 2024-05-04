import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';

export default function Card({ text, removeAction }) {
    return (
        <View style={cards.Card}>
            <Text style={cards.Text}>{text}</Text>
            <TouchableOpacity style={cards.Button} onPress={removeAction}><Text style={cards.ButtonText}>X</Text></TouchableOpacity>
        </View>
    );
}

const cards = StyleSheet.create({
    Card: {
        flexDirection: 'row',
        width: 310,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    Text: {
        flexWrap: 'wrap',
        width: '90%',
        paddingLeft: 10
    },
    Button: {
        flexWrap: 'wrap',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    ButtonText: {
        color: 'red',
        fontWeight: 'bold'
    }
});