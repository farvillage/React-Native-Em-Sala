import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'


const Ex02 = () => {

    const [ counter, setCounter ] = useState(0)
    function increase() {
        setCounter(counter + 1)
    }

    function decrease() {
        setCounter(counter - 1)
    }

    return (
    
    <View>
        <Button title='increase' onPress={increase}/>
        <Text>the counter is: { counter }</Text>
        <Button title='decrease' onPress={decrease}/>
    </View>
    )
}

export default Ex02