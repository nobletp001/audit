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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { pagetwoRAction } from '../../Store/AuditSlice';

export default function PageTwoR({ navigation }) {

    const [text, onChangeText] = React.useState("");
    const [text1, onChangeText1] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [text3, onChangeText3] = React.useState("");
    const [text4, onChangeText4] = React.useState("");

    const [text15, onChangeText15] = React.useState("");

    const dispatch = useDispatch()
    const data = {
        text,
        text1,
        text2,
        text3,
        text4,

    }


    const handleSubmit = () => {
        dispatch(pagetwoRAction(data))
        onChangeText('')
        onChangeText1('')
        onChangeText2('')
        onChangeText3('')
        onChangeText4('')

        onChangeText15('submited successfuly')
        navigation.navigate('pagetwos')


    }
    return (
        < ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>- Is there room in any rack, except the CRAN active & passive racks (if applicable), for a new 8300 DaFi Dimension: 19 (W) x 12 (D) X 7(H)[in](4 Rack Units)?Note: Preferable in existing rack housing BBUs.Please take photo of entire rack.TAPE 8300 LOCATION WITH BLUE TAPE AND LABEL – “8300 DaFi Equipment”: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input2}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>- Is there room in any rack, except the CRAN active & passive racks (if applicable), for a new 8300 DaFi Dimension: 19 (W) x 12 (D) X 7(H)[in](4 Rack Units)?Note: Preferable in existing rack housing BBUs.Please take photo of entire rack.TAPE 8300 LOCATION WITH BLUE TAPE AND LABEL – “8300 DaFi Equipment”: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input2}
                            onChangeText={onChangeText1}
                            value={text1}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>- If no, did you identify equipment to be decommissioned to make space	 and take photo: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input1}
                            onChangeText={onChangeText2}
                            value={text2}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>- Can power and ground be provided for the new 8300 DaFi?(Yes/No): </Text></View>
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
                    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}> What will be the jumper length from the new 8300 DaFi to the new 12 fiber Mobility LGX?: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText4}
                            value={text4}
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
                        onPress={() => navigation.navigate('pagetwos')}
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
        height: 50,
        borderColor: 'grey',
        textAlignVertical: 'top',
        color: 'black'

        // backgroundColor:'black'

    },
    input1: {

        borderWidth: 1,
        width: '100%',
        height: 65,
        borderColor: 'grey',
        textAlignVertical: 'top',
        color: 'black'


        // backgroundColor:'black'

    },
    input2: {

        borderWidth: 1,
        width: '100%',
        height: 180,
        borderColor: 'grey',
        textAlignVertical: 'top',
        color: 'black'

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