import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";

const Model = props => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/Model3.jpeg')} style={styles.image}/>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Model S</Text>
                <Text style={styles.subTitle}>View Inventory</Text>
            </View>
        </View>
    );
};

Model.propTypes = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    text: {
        fontSize: 40
    },
    subTitle: {
        fontSize: 20,
        opacity: 0.4
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    wrapper: {
        marginTop: '30%'
    }
});

export default Model;
