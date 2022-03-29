
import React from 'react'
import { render } from 'react-dom';


import {View , Text, Image} from 'react-native'
import { Component } from 'react';

export default class SplashScreen extends Component{
    constructor(props)
    {
        super(props);
        setTimeout(()=>
        {
            this.props.navigation.navigate("login");
        },2000);
     };
    render(){

        return(
            <Image
            style={{
            justifyContent: 'center',  
            flex:1,    
            position: 'absolute',  
            width: '100%',  
            height: '100%',  
            }}
            source={require('../../assets/HomeSchool.png')}
          />
        )
    }
        
    }
    

