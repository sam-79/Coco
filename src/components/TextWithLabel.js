import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextWithLabel = ({ label, textValue, style }) => {

    return (
        <View style={{...style}}>
            <Text style={styles.label}>{label}</Text>
            {
                textValue &&
                <Text style={styles.textValue}>{textValue}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#a5a5a5',
        marginBottom: 2

    },
    textValue: {
        height: 30,
        fontSize: 18,
        color: '#000',
        borderBottomWidth: 1,
        borderColor: "#a5a5a5",
        paddingHorizontal:5
    }
});

export default TextWithLabel