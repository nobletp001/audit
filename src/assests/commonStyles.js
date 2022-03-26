import { StyleSheet, Platform } from 'react-native';



export const commonStyles = StyleSheet.create({
    screenHeader: {
        backgroundColor: '#214d77',
        height: Platform.OS == "ios" ? 125 : 90,
    },
    headerTitleStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize:13
    },
    headerImageStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 150,
        resizeMode: 'contain'
    }
});