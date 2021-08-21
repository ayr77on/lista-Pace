import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Alert, Button,Stack,Input } from "native-base";

const AddItem = ({handleChangeText,itemToAdd,handleAddItem,inputError}) => {
 
  return (
          <Container flex={1}>
            <Container  style={styles.inputContainer}>
            <Input
                w="60%"
                mx={3}
                placeholder="Agregar item"
                onChangeText={handleChangeText}
                value={itemToAdd}
              />
              <Button onPress={handleAddItem}>Agregar</Button>
            </Container>
            <Container style={styles.alertError} >
              {inputError != "" &&
                  <Alert  status="error" w="80%">
                    <Alert.Icon />
                    <Alert.Title
                      flexShrink={1}
                    >{inputError}</Alert.Title>
                  </Alert>
              }
            </Container>
          </Container>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  alertError: {
    flexDirection: 'row',
    alignItems: "center",
    position: "relative",
    // justifyContent: 'space-between',
  },
});


export default AddItem;