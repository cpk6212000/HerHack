import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios';
import _ from "lodash";

export default class PlaceInput extends Component {

    constructor(props)
    {
        super();
        this.state = {
            predictions:[],
            destination:""
        };
        this.getPlaces = this.getPlaces.bind(this);
        this.getPlaceDebounced = _.debounce(this.getPlaces,1000);
        this.setDestination = this.setDestination.bind(this);  
    }
    async getPlaces(input){
        const result = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&language=pt_BR&key=AIzaSyAVw-BZY5Lj8xn-PWiUoP-_j7bg3pwpXro`);
        console.log(result.data);
        this.setState({predictions:result.data.predictions});
    }   
    setDestination(main_text)
    {
        this.setState({destination:main_text,predictions : []});
    }
    render() {
        
        const predictions = this.state.predictions.map(prediction => (
        <TouchableOpacity key = {prediction.id} onPress={() => this.setDestination(prediction.structured_formatting.main_text)}>
        <View style={styles.suggestionStyle}>
            <Text>{prediction.structured_formatting.main_text}</Text>
            <Text style={styles.secondary_text}>{prediction.structured_formatting.secondary_text}</Text>
        </View>
        </TouchableOpacity>));


        return (
            <View>
                <TextInput 
                value = {this.state.destination}
                autoCapitalize="none"
                autoCorrect={false} 
                placeholder="Destination: " 
                style={styles.PlaceInputStyle} 
                onChangeText={input=>{
                    this.setState({destination:input});
                    this.getPlaces(input);
                }}
                />
            {predictions}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    PlaceInputStyle:{
        backgroundColor: "#fff",
        height: 40,
        padding: 10,
        marginTop: 10
    },
    suggestionStyle:{
        borderTopWidth:0.5,
        backgroundColor:"white",
        padding:5
    },
    secondary_text:{
        color: "#777"
    }
})

