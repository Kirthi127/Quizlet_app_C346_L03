import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({name,description, icon_name, poster})=> {
    return (
        <View>
            <Icon name={icon_name} size={20}  /><Text> {name}  {description}</Text>
            <Image source={poster} style={{width:400, height:500}}></Image>
        </View>
    );
}

export default Boat;

const styles = StyleSheet.create({

})
