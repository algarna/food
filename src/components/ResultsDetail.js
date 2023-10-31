import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.containerStyle}>
            <Image 
                source={{uri: result.image_url}}
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15
    },
    imageStyle: {
        width: 200,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;