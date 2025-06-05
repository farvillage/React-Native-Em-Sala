import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ex01 = ({ nome }) => {
    return (
    <View>
        <Text>ola, {nome}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    }
})

export default Ex01