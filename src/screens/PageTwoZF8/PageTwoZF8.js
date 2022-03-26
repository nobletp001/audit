import React, { useState } from 'react'
import {

    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    Pressable,
    Alert,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import {  pagetwoZF8Action } from '../../Store/AuditSlice';


// const createFormData = (photo, body) => {
//     const data = new FormData();

//     data.append('photo', {
//         name: photo.fileName,
//         type: photo.type,
//         uri:
//             Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
//     });

//     Object.keys(body).forEach((key) => {
//         data.append(key, body[key]);
//     });

//     return data;
// };

export default function PageTwoZF8({ navigation }) {

    const [modalVisible, setModalVisible] = React.useState(false);
    const dispatch = useDispatch()
    const [imagePicker, setImagePicker] = useState({

    });
    console.log(imagePicker.uri);
    const [msg, setMgs] = useState('');

    const selectImage = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            maxWidth: 256,
            maxHeight: 256,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        launchImageLibrary(options, (response) => {


            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {




                setModalVisible(!modalVisible)

                // You can also display the image using data:

                // alert(JSON.stringify(response));s
                // const data = {
                //     fileName: sourcefilename,
                //     uri: sourceUri
                // }
                response.assets.map((asset) => {

                    console.log('uri -> ', asset.uri);

                    setImagePicker({
                        uri: asset.uri
                    })

                    dispatch( pagetwoZF8Action({
                        uri: asset.uri
                    }))
                });



                setMgs('Image upload successfully')

            }
        });
    }

    // /////
    const CameraImage = async () => {




        const grantedcamera = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "App Camera Permission",
                message: "App needs access to your camera ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        const grantedstorage = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "App Camera Permission",
                message: "App needs access to your camera ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED && grantedstorage === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera & storage permission given");

            let options = {
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            };
            launchCamera(options, (response) => {


                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                    alert(response.customButton);
                } else {

                    response.assets.map((asset) => {

                        console.log('uri -> ', asset.uri);

                        setImagePicker({
                            uri: asset.uri
                        })

                        dispatch( pagetwoZF8Action({
                            uri: asset.uri
                        }))
                    });
                    setMgs('Camera taken successfully')

                    setModalVisible(!modalVisible)


                }
            });


        } else {
            console.log("Camera permission denied");
        }

    }
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.card}>


                    <TouchableOpacity style={styles.button}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.headingLight}> Upload Picture
                            <Icon
                                name="upload"
                                size={23}
                                color="#fff"
                                iconStyle={{}}
                            //   onPress={() => navigation.navigate('pagetwo')}
                            />
                        </Text>
                    </TouchableOpacity>

                </View>


                <Text style={{ fontSize: 8, color: 'black', marginTop: 5, color: 'red' }}>{msg && msg}</Text>


                {imagePicker.uri && <Image
                    source={{ uri: imagePicker.uri }}
                    style={styles.imageStyle}
                />}
            </View>
            <TouchableOpacity style={styles.arrowNext}>
                <Icon
                    name="chevron-right"
                    size={60}
                    color="#214d77"
                    iconStyle={{}}
                    onPress={() => navigation.navigate('pagetwozf9')}
                />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    //   Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <TouchableOpacity style={styles.TakePicture}
                            onPress={CameraImage}
                        >
                            <Text style={styles.TakeTest}>Take  Picture...


                            </Text>
                            <Icon
                                name="camera"
                                size={23}
                                color="#fff"
                                style={{ marginLeft: 2, marginTop: 5 }}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TakePicture}
                            onPress={selectImage}
                        >
                            <Text style={styles.TakeTest}>Choose from Library...


                            </Text>
                            <Icon
                                name="upload"
                                size={23}
                                color="#fff"
                                style={{ marginLeft: 2, marginTop: 5 }}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TakePicture}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.TakeTest}>Cancel


                            </Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}



const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',
        borderRadius: 8,

        width: '80%',
        height: '20%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        paddingHorizontal: 10,
        alignItems: 'center', justifyContent: 'center'



    },
    button: {
        width: '100%',

        backgroundColor: "#214d77",
        padding: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    headingLight: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
        height: '30%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    TakePicture: {
        width: "100%",
        backgroundColor: '#214d77',
        height: 50,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TakeTest: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',

    },
    arrowNext: {
        justifyContent: 'flex-end',
        paddingHorizontal: 40,

        alignItems: 'flex-end',
        marginBottom: 30
    },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
    },


});