import React, { Component } from 'react'
import {View } from 'react-native'
import Axios from 'axios';
import AlbumDetails from './albumDetails';
export class albumList extends Component {
    state = {
        albums: []
    };
    componentWillMount() {
        console.log('ComponentWillMount: app.js');
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetails key={album.title} data={album}/>
        )
    }
    render() {
        console.log(this.state)
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default albumList
