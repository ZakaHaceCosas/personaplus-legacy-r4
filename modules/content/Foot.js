import React from 'react';
import { Pressable, Text, View, StyleSheet } from "react-native";
import { HomeFilled, BoardFilled, PersonFilled } from "@fluentui/react-native-icons";

export default function Foot({ activetab, changePage }) {
    let hColor = "#FFF";
    let dColor = "#FFF";
    let pColor = "#FFF";

    switch (activetab) {
        case "Home":
            hColor = "#FFFFFF";
            dColor = "#8A8C8E";
            pColor = "#8A8C8E";
            break;
        case "Dash":
            dColor = "#FFFFFF";
            hColor = "#8A8C8E";
            pColor = "#8A8C8E";
            break;
        case "Prof":
            pColor = "#FFFFFF";
            hColor = "#8A8C8E";
            dColor = "#8A8C8E";
            break;
        default:
            break;
    }

    return (
        <View style={styles.foot}>
            <Pressable onPress={() => changePage('Home')} style={styles.tab} id="htab">
                <HomeFilled style={[styles.tabi, { color: hColor }]} />
                <Text style={[styles.tabt, { color: hColor }]}>Home</Text>
            </Pressable>
            <Pressable onPress={() => changePage('Dash')} style={styles.tab} id="dtab">
                <BoardFilled style={[styles.tabi, { color: dColor }]} />
                <Text style={[styles.tabt, { color: dColor }]}>Dashboard</Text>
            </Pressable>
            <Pressable onPress={() => changePage('Prof')} style={styles.tab} id="ptab">
                <PersonFilled style={[styles.tabi, { color: pColor }]} />
                <Text style={[styles.tabt, { color: pColor }]}>My profile</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    foot: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        backgroundColor: "#16191E",
        position: 'fixed',
        zIndex: 999,
        bottom: 0,
        left: 0,
        right: 0
    },
    tab: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    tabi: {
        width: 30,
        height: 30
    },
    tabt: {
        fontFamily: 'BeVietnamPro-Bold',
        fontSize: 10
    }
});
