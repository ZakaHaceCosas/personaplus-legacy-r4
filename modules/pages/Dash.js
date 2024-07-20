import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal, View, Text, StyleSheet, Pressable, TextInput, Switch } from "react-native";
import Section from "../content/Section";
import Division from "../division/Division";
import Btn from "../content/Btn";
import Objectives from "../utils/objs";

const handleSubmit = async () => {
    // Obtener los objetos almacenados en AsyncStorage
    let objs = [];
    try {
      const jsonValue = await AsyncStorage.getItem('objs');
      objs = jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error("Error reading OBJS data:", error);
    }
  
    // Generar el nuevo objeto con ID autoincremental
    const newId = objs.length > 0 ? String(parseInt(objs[objs.length - 1].id) + 1).padStart(6, '0') : '000001';
    const newData = {
      id: newId,
      name: name,
      data: {
        general: {
          freq: freq,
          repeat: repeat,
          rests: {
            amount: restAmount,
            duration: restDuration
          }
        },
        extra: {
          1: {
            icon: extra1Icon,
            value: extra1Value
          },
          2: {
            icon: extra2Icon,
            value: extra2Value
          }
        }
      }
    };
  
    objs.push(newData);
    try {
      await AsyncStorage.setItem('objs', JSON.stringify(objs));
      console.log('New object added:', newData);
    } catch (error) {
      console.error("Error adding new object:", error);
    }
  
    setName('');
    setFreq({
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false
    });
    setRepeat('');
    setRestAmount('');
    setRestDuration('');
    setExtra1Icon('');
    setExtra1Value('');
    setExtra2Icon('');
    setExtra2Value('');
  
    setModalVisible(false);
  };

export default function Dash() {
    const [modalVisible, setModalVisible] = useState(false);
    const [objs, setObjs] = useState(null);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [freq, setFreq] = useState({
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false
    });
    const [repeat, setRepeat] = useState('');
    const [restAmount, setRestAmount] = useState('');
    const [restDuration, setRestDuration] = useState('');
    const [extra1Icon, setExtra1Icon] = useState('');
    const [extra1Value, setExtra1Value] = useState('');
    const [extra2Icon, setExtra2Icon] = useState('');
    const [extra2Value, setExtra2Value] = useState('');
  
    const handleSubmit = () => {
      const data = {
        id: id,
        name: name,
        data: {
          general: {
            freq: freq,
            repeat: repeat,
            rests: {
              amount: restAmount,
              duration: restDuration
            }
          },
          extra: {
            1: {
              icon: extra1Icon,
              value: extra1Value
            },
            2: {
              icon: extra2Icon,
              value: extra2Value
            }
          }
        }
      };
  
      const jsonData = JSON.stringify(data);
      console.log(jsonData);

      setId('');
      setName('');
      setFreq({
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false
      });
      setRepeat('');
      setRestAmount('');
      setRestDuration('');
      setExtra1Icon('');
      setExtra1Value('');
      setExtra2Icon('');
      setExtra2Value('');
    };

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

    function createObj() {
        setModalVisible(true);
    }

    function comingSoon(feature) {
        console.log(feature + " is coming soon");
    }

    return (
        <View style={styles.view}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <Section kind="4">
                    <Text>Create an OBJ</Text>
                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <Text>Frequency</Text>
                    <View>
                        <Text style={styles.switchText}>Mon</Text>
                        <Switch value={freq.mon} onValueChange={value => setFreq({ ...freq, mon: value })} />
                    </View>
                    <TextInput  style={styles.input}
                        placeholder="Repeat"
                        value={repeat}
                        onChangeText={setRepeat}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="Rest Amount"
                        value={restAmount}
                        onChangeText={setRestAmount}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="Rest Duration"
                        value={restDuration}
                        onChangeText={setRestDuration}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="Extra 1 Icon"
                        value={extra1Icon}
                        onChangeText={setExtra1Icon}
                    />
                    <TextInput
                        placeholder="Extra 1 Value"
                        value={extra1Value}
                        onChangeText={setExtra1Value}
                    />
                    <TextInput
                        placeholder="Extra 2 Icon"
                        value={extra2Icon}
                        onChangeText={setExtra2Icon}
                    />
                    <TextInput
                        placeholder="Extra 2 Value"
                        value={extra2Value}
                        onChangeText={setExtra2Value}
                    />
                    <Btn kind='GOD' onPress={handleSubmit}>
                        Do it!
                    </Btn>
                </Section>
            </Modal>
            <Section kind="1">
                {objs && objs.map(obj => (
                    <Division key={obj.id} dtitle='OBJECTIVE' dlabel={obj.name} dslabel="HOLA PIBES" icon="A">
                        <Text>children aqui</Text>
                    </Division>
                ))}
                <View style={[{display: 'flex', flexDirection: 'row', gap: 20, padding: 20}]}>
                    <Btn kind='GOD' onPress={() => createObj()}>
                        Create objective
                    </Btn>
                    <Btn kind='ACE' onPress={() => comingSoon("Assistant")}>
                        Ask assistant
                    </Btn>
                </View>
            </Section>
            <Objectives></Objectives>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    modalContainer: {
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    modalText: {
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    switchText: {
      marginRight: 10,
      fontSize: 16,
    },
    buttonContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  