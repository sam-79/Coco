import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/reducers/UserSlice';

const CustomToast = ({ message, showButton, buttonText, buttonAction }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            {
                showButton && <Pressable onPress={buttonAction}>
                    <Text style={styles.message}>{buttonText}</Text>
                </Pressable>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    message: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CustomToast;
