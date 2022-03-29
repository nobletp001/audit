import React from 'react'
import {

    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ScrollView,
    Button,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {   pagetwoZFAction } from '../../Store/AuditSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PageOneZF({ navigation }) {

    const [text, onChangeText] = React.useState("");
    const [text1, onChangeText1] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [text3, onChangeText3] = React.useState("");
    const [text4, onChangeText4] = React.useState("");
    const [text5, onChangeText5] = React.useState("");
    const [text6, onChangeText6] = React.useState("");
    const [text7, onChangeText7] = React.useState("");
    const [text8, onChangeText8] = React.useState("");

    const [text15, onChangeText15] = React.useState("");

    const dispatch = useDispatch()
    const data = {
        text,
        text1,
        text2,
        text3,
        text4,
        text5,
        text6,
        text7,
        text8,

    }


    const handleSubmit = () => {
        dispatch(  pagetwoZFAction(data))
        onChangeText('')
        onChangeText1('')
        onChangeText2('')
        onChangeText3('')
        onChangeText4('')
        onChangeText5('')
        onChangeText6('')
        onChangeText7('')
        onChangeText8('')

        onChangeText15('submited successfuly')
        navigation.navigate('pagetwozf1')


    }
    return (
        < ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Power plant brand and model: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Main Power plant voltage (48V or 24V): </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText1}
                            value={text1}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Rectifier count: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText2}
                            value={text2}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>- Converter count: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText3}
                            value={text3}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Breaker slots available (48V/24V): </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText4}
                            value={text4}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Is there a remote breaker panel?What model and how many empty slots?: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText5}
                            value={text5}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Battery Type? </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText6}
                            value={text6}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Battery Date of Manufacturing/Installation: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText7}
                            value={text7}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Battery Count?: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText8}
                            value={text8}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <Text style={{ fontSize: 9, color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{text15 && text15}</Text>

            <View style={styles.submitContainer}>
                <View style={{ width: "40%", marginRight: '20%' }}>
                    <Button
                        title="Submit"
                        color="#214d77"
                        onPress={handleSubmit}
                        style={{
                            borderRadius: 10

                        }}
                    />
                </View>

                <TouchableOpacity style={styles.nextButton}>
                    <Icon
                        name="chevron-right-box"
                        size={40}
                        color="#214d77"
                        iconStyle={{}}
                        onPress={() => navigation.navigate('pagetwozf1')}
                    />

                </TouchableOpacity>
            </View>
          









         
        </ ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        // marginHorizontal:8,
        marginBottom: 25
    },

    tableContainer: {
        paddingHorizontal: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    input: {

        borderWidth: 1,
        width: '100%',
        height: 40,
        borderColor: 'grey',
        color: 'black',
        borderRadius: 5


        // backgroundColor:'black'

    },
    input1: {

        borderWidth: 1,
        width: '100%',
        height: 75,
        borderColor: 'grey',
        color: 'black',
       
        borderRadius: 5


        // backgroundColor:'black'

    },

    tableText: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        color: '#5a5b5e',
        fontWeight: 'bold'
    },
    submitContainer: {
        marginVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'


    },
    nextButton: {

        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    }
});