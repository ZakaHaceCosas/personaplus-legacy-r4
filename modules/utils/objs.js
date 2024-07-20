import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TopSpeedFilled, ArrowRepeatAllFilled, SnoozeFilled, TimerFilled, CubeFilled, ChevronUpDownFilled } from '@fluentui/react-native-icons';

const Objectives = () => {
    const [data, setData] = useState([]);
    const objs = [
        {
            "id": "000001",
            "name": "1st objective",
            "data": {
                "general": {
                    "freq": {
                        "mon": true,
                        "tue": true,
                        "wed": true,
                        "thu": true,
                        "fri": true,
                        "sat": false,
                        "sun": false
                    },
                    "repeat": 5,
                    "rests": {
                        "amount": 0,
                        "duration": 0
                    }
                },
                "extra": {
                    1: {
                        "icon": "CubeFilled",
                        "value": "3 kg"
                    },
                    2: {
                        "icon": "ChevronUpDownFilled",
                        "value": "10" // in extras, make the value a string even if it is a number
                    }
                }
            }
        },
        {
            "id": "000002",
            "name": "2nd objective",
            "data": {
                "general": {
                    "freq": {
                        "mon": true,
                        "tue": true,
                        "wed": true,
                        "thu": true,
                        "fri": true,
                        "sat": true,
                        "sun": true
                    },
                    "repeat": 0,
                    "rests": {
                        "amount": 0,
                        "duration": 0
                    }
                },
                "extra": {
                    1: {
                        "icon": "FluentIconHere4",
                        "value": "10 minutes"
                    },
                    2: {
                        "icon": "FluentIconHere3",
                        "value": "Jog"
                    }
                }
            }
        }
    ];

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('objs', JSON.stringify(objs));
            // // console.log("%cOBJS data saved to AsyncStorage", 'color: lightgreen; font-size: 20px; font-weight: bold;')
        } catch (error) {
            // console.error("%cOBJS data NOT saved to AsyncStorage:", error, 'font-size: 20px; font-weight: bold;')
        }
    }

    const readData = async () => {
        try {
            const jsonData = await AsyncStorage.getItem('objs');
            if (jsonData !== null) {
                setData(JSON.parse(jsonData));
                // // console.log("%cOBJS Data retrieved successfully!", "color: lightgreen; font-size: 20px; font-weight: bold;");
            }
        } catch (error) {
            console.error("Error reading OBJS data:", error);
        }
    };

    useEffect(() => {
        readData();
    }, []);

    return (
        <View style={styles.view}>
            {/*
            <Button title="Save Data" onPress={saveData} />
            {data.map(obj => (
                <View key={obj.id}>
                    <Text>Name: {obj.name}</Text>
                    <Text>Frequency: {JSON.stringify(obj.data.general.freq)}</Text>
                    <Text>Repeat: {obj.data.general.repeat}</Text>
                    <Text>Rests Amount: {obj.data.general.rests.amount}</Text>
                    <Text>Rests Duration: {obj.data.general.rests.duration}</Text>
                    <Text>Extras:</Text>
                    {Object.values(obj.data.extra).map((extra, index) => (
                        <View key={index}>
                            <Text>Icon: {extra.icon}</Text>
                            <Text>Value: {extra.value}</Text>
                        </View>
                    ))}
                </View>
            ))}
            */}
        </View>
    );
};

export default Objectives;

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white'
    },
});