import React from 'react';
import {  TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const BackIcon = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity>
            <Icon
                name="chevron-left"
                size={30}
                color="#fff"
                iconStyle={{}}
                onPress={() => navigation.goBack()}
            />
        </TouchableOpacity>
    );
};

export default BackIcon;