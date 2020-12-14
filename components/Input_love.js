import React, { Component } from 'react';
import {View} from 'react-native';
import { TextInput, Button, Appbar} from 'react-native-paper';
import Result_love from './Result_love';

export default class App extends Component{
    state={
        male:'',
        female:'',
        result:'Loading'
    }
    submited(){
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.male}&sname=${this.state.female}`,{
            headers:{
                "X-RapidAPI-Host":"love-calculator.p.rapidapi.com",
                "X-RapidAPI-Key":"ENTER_YOUR_API_KEY"
            }
        })
        .then(data=>data.json())
        .then(data2 => {
            this.setState({
                result:data2
            })
        })
    }
    render() {
        return(
            <View>
            <Appbar.Header>
                <Appbar.Content
                style={{alignItems:'center'}}
                title="Love % Calculator"
                />
            </Appbar.Header>
            <TextInput
                style={{margin:10}}
                label='Male'
                value={this.state.text}
                onChangeText={text => this.setState({ male:text })}
            />
            <TextInput
                style={{margin:10}}
                label='Female'
                value={this.state.text}
                onChangeText={text => this.setState({ female:text })}
            />
            <Button 
            icon="heart" 
            style={{margin:20}}
            mode="contained"
            onPress={this.submited.bind(this)} >
                Calculate
            </Button>
              <Result_love data={this.state.result} />
            </View>
        );
    }
}
