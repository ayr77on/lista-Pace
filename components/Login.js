import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"
import {
    FormControl,
    Container,
    Alert,
    Input,
    Icon,
    Stack,
    Button,
  } from "native-base";

const Login = ({userName,userPass,errorLogin,validateUser,handleChangeUserName,handleChangeUserPass}) => {
    return (
        <View>
             <FormControl isRequired isInvalid>
                <Stack mx={4}>
                    <FormControl.Label>Usuario</FormControl.Label>
                    <Input 
                        type="text"
                        variant="rounded"
                        onChangeText={handleChangeUserName}
                        value={userName}
                        p={2}
                        placeholder="Ingrese su usuario"
                        InputRightElement={
                            <Icon
                              as={<MaterialIcons name="person" />}
                              size="xs"
                              m={2}
                              _light={{
                                color: "black",
                              }}
                              _dark={{
                                color: "gray.300",
                              }}
                            />
                        }
                    />
                    <FormControl.Label>Contraseña</FormControl.Label>
                    <Input
                     type="password"
                     onChangeText={handleChangeUserPass}
                     value={userPass}
                     variant="rounded" 
                     p={2} 
                     placeholder="Contraseña" 
                     InputRightElement={
                        <Icon
                          as={<MaterialIcons name="https" />}
                          size="xs"
                          m={2}
                          _light={{
                            color: "black",
                          }}
                          _dark={{
                            color: "gray.300",
                          }}
                        />
                    }
                    />
                    <FormControl.HelperText>
                    Inicie sesión para realizar compras
                    </FormControl.HelperText>
                    <Container style={styles.alertError} >
                    {errorLogin != "" &&
                        <Alert status="error" w="100%">
                            <Alert.Icon />
                            <Alert.Title
                            flexShrink={1}
                            >{errorLogin}</Alert.Title>
                        </Alert>
                    }
                    </Container>
                    <Button onPress={validateUser}>Ingresar</Button>
                </Stack>
            </FormControl>
        </View>
    );
};

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

export default Login;


