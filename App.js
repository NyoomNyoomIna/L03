import React from 'react';
import {image,View, Text} from 'react-native';
import Movie from './components/Movie.js';
import { ScrollView } from 'react-native';

const AllMovies= () => {
    return (
        <ScrollView>
            <Movie title="Doctor Sleep" year="2019" icon_name="skull" poster={require("./img/doctor-sleep.jpg")}/>
            <Movie title="Midway" year="2020" icon_name="person-rifle" poster={require("./img/midway.jpg")}/>
            <Movie title="Midwdadaay" year="1020" icon_name="person-rifle" poster={{ uri: 'https://reactjs.org/logo-og.png' }}/>
        </ScrollView>
        )
}
export default AllMovies


    