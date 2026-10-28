import {Image, Text, View} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { ScrollView } from 'react-native';

const Movie = ({title, year, icon_name, icon_colour, poster}) => {
    return (
        <View>
        <ScrollView>
            <Text>
            </Text>
            <Image source={({poster})} style={{width:400, height:500}}/>
            <Text>
                Movie: {title} {year} <FontAwesome6 name={icon_name} size={40} color={icon_colour} />
            </Text>
           </ScrollView>
        </View>
    );
};

export default Movie;