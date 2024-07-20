import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WindowDevEditFilled } from '@fluentui/react-native-icons';

export default function Division({style, children, dtitle, dlabel, dslabel, icon}) {
    let bgcolor, Icon;

    switch (style) {
        case "REGULAR":
            bgcolor = "#202328";
            break;
        default:
            bgcolor = "#202328";
            break;
    }

    switch (icon) {
        case "A":
            Icon = WindowDevEditFilled;
            break;
        default:
            Icon = null;
            break;
    }

    return(
        <View style={[styles.flex, {backgroundColor: bgcolor}]}>
            <Text style={styles.dtitle}>{dtitle}</Text>
            <View style={styles.container}>
                { Icon && <Icon style={styles.icon} /> }
                <View style={styles.actualcontent}>
                    <Text style={styles.dlabel}>{dlabel}</Text>
                    <Text style={styles.dslabel}>{dslabel}</Text>
                    {children}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 10,
        padding: 20
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 10,
        width: '100%'
    },
    actualcontent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 10,
    },
    icon: {
        width: 70,
        height: 70,
        color: 'white'
    },
    dtitle: {
        fontFamily: 'BeVietnamPro-Bold',
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 10,
        lineHeight: 10
    },
    dlabel: {
        fontFamily: 'BeVietnamPro-Bold',
        color: 'white',
        fontSize: 22,
        lineHeight: 22
    },
    dslabel: {
        fontFamily: 'BeVietnamPro-Medium',
        color: '#C8C8C8',
        fontSize: 12,
        lineHeight: 12
    }
})