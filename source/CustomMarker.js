import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const CustomMarker = ({item}) => {
    return (
        <View>
            <Image style={styles.roundImage} source={{uri: item.markerImage}}/>
        </View>
    )
}

export default CustomMarker;

const styles = StyleSheet.create({
    roundMarker: {
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 25
    },
    roundImage: {
        height: 33,
        width: 27,
        
    }

})
