import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Card from './card';
import CardSection from './cardSection';

export default class albumDetails extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text> {this.props.data.title} </Text>
                </CardSection>

            </Card>
        )
    }
}
