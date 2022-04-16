import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

const ItemCard = () => {
    return (
        <View styles= {styles.cardContainer}>
            <Text>Item Card</Text>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer: { 
        width: deviceWidth,
        backgroundColor: '#F7B257'
    },
});

export default ItemCard;