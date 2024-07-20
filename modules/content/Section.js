import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { moreHorizontalFilled, CalendarDayFilled, HeartPulseFilled, WindowDevEditFilled, NewFilled } from '@fluentui/react-native-icons';

export default function Section({ children, kind }) {
    let IconComponent;
    let label;

    switch (kind) {
        case "1":
            IconComponent = CalendarDayFilled;
            label = "YOUR DAILY OBJECTIVES";
            break;
        case "2":
            IconComponent = HeartPulseFilled;
            label = "HOW YOU ARE DOING";
            break;
        case "3":
            IconComponent = moreHorizontalFilled;
            label = "MORE";
            break;
        case "3":
            IconComponent = NewFilled;
            label = "CREATE AN OBJECTIVE";
            break;
        default:
            IconComponent = null;
            label = "Unknown";
            break;
        case "D":
            IconComponent = WindowDevEditFilled;
            label = "Developer Only"
            break;
    }

    return (
        <View style={styles.mainview}>
            <View style={styles.top}>
                {IconComponent && <IconComponent style={styles.stuff} />}
                <Text style={styles.stuff}>{label}</Text>
            </View>
            <View style={styles.divflex}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainview: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#14171C',
        width: '100%',
        borderRadius: 10,
        height: 'auto',
        overflow: 'hidden'
    },
    top: {
        display: 'flex',
        gap: 10,
        padding: 15,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    stuff: {
        color: '#DDDDDD',
        fontFamily: 'BeVietnamPro-Bold',
        fontSize: 15,
        lineHeight: 20,
        height: 20
    },
    divflex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
});
