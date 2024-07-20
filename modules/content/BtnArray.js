import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function BtnArray({children}) {
    return (
        <View style={styles.btnarray}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    btnarray: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: 10
    }
})