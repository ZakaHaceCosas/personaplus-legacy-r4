import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Dash() {
    return (
        <View style={styles.view}>
            <Text style={styles.viewText}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    viewText: {
        color: 'white'
    }
});
