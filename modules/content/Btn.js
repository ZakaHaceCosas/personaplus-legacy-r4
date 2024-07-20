import React, { useRef } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";

export default function Btn({ children, kind, onPress }) {
    let bgclr, aceclr, clr;

    switch (kind) {
        case "GOD":
            bgclr = "#32FF80";
            aceclr = "#198040";
            clr = "#000";
            break;
        case "HMM":
            bgclr = "#FFC832";
            aceclr = "#806419";
            clr = "#FFF";
            break;
        case "ACE":
            bgclr = "#3280FF";
            aceclr = "#194080";
            clr = "#FFF";
            break;
        case "WOR":
            bgclr = "#FF3232";
            aceclr = "#801919";
            clr = "#000";
            break;
        default:
            bgclr = "#000000";
            aceclr = "#FFFFFF";
            clr = "#FFF";
            break;
    }

    const scaleValue = React.useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.7,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 1,
            tension: 100,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[styles.tocont, { backgroundColor: bgclr, borderColor: aceclr, transform: [{ scale: scaleValue }] }]}
        >
            <Animated.View style={[styles.view]}>
                <Text style={[styles.lbl, { color: clr }]}>
                    {children}
                </Text>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    tocont: {
        width: '100%',
        height: 'auto',
        flex: 1,
        paddingTop: 12,
        paddingBottom: 12,
        borderWidth: 3,
        borderRadius: 12,
        overflow: 'hidden'
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lbl: {
        fontFamily: 'BeVietnamPro-Bold',
        fontSize: 12,
        textAlign: 'center'
    }
});
