import React, { useEffect, useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import Btn from "../content/Btn";
import Section from "../content/Section";
import Division from "../division/Division";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BtnArray from "../content/BtnArray";

function startSess(id) {
    // console.log("ID " + id);
    // console.log("%cStarted session", 'color: lightblue; font-size: 15px; font-weight: bold;');
}
    
function logDoneObj(id) {
    // console.log("ID " + id)
    // console.log("%cDone", 'color: lightgreen; font-size: 15px; font-weight: bold;')
}

export default function Home() {
    const [objs, setObjs] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('objs');
            setObjs(jsonValue != null ? JSON.parse(jsonValue) : null);
          } catch (error) {
            console.error("Error reading OBJS data:", error);
          }
        };
    
        getData();
      }, []);

    return (
        <View style={styles.view}>
            <View style={styles.body}>
                <Section kind="1" id="dailyobjssect">
                {objs && objs.map(obj => (
                    <Division key={obj.id} dtitle='OBJECTIVE' dlabel={obj.name}>
                        <BtnArray>
                            <Btn kind='ACE' onPress={() => startSess(obj.id)}>
                                Let's do it now!
                            </Btn>
                            <Btn kind='GOD' onPress={() => logDoneObj(obj.id)}>
                                Done it
                            </Btn>
                        </BtnArray>
                    </Division>
                ))}
                </Section>

                <Section kind="2" id="summarysect">

                </Section>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    body: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    viewText: {
        color: 'white'
    }
});
