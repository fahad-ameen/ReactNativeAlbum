import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class header extends Component {
    render() {
        return (
            <View style={styles.textView}>
                <Text style={styles.text}> {this.props.text} </Text>
            </View>
        )
    }
}
export default header
const styles = StyleSheet.create({
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 10,
        position: 'relative'
    },
    text: {
        fontSize: 20
    }
})
