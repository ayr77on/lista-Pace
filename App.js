import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { Center, NativeBaseProvider  } from "native-base";
import ContainerList from './components/ContainerList';
import Login from './components/Login';
import MenuNavigation from './components/MenuNavigation';

export default function App() {
  const [userLogged,setUserLogged] = useState(false);
  const [errorLogin,setErrorLogin] = useState("");
  const [userName,setUserName] = useState("");
  const [userPass,setUserPass] = useState("");

  const handleChangeUserName = (t) => setUserName(t);
  const handleChangeUserPass = (t) => setUserPass(t);

  const validateUser = () => {
    if(userName == "" || userPass == ""){
      setErrorLogin("Complete los campos");
    }else{
      setUserLogged(true);
    }
  }

  let content = 
  <View>
    <View style={styles.container}>
        <NativeBaseProvider>
          <Center flex={1}>
          <Login
            userName={userName}
            userPass={userPass}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPass={handleChangeUserPass}
            errorLogin={errorLogin}
            validateUser={validateUser}
          />
          </Center>
      </NativeBaseProvider>
  </View>
  <NativeBaseProvider>
    <MenuNavigation  text="Menu Login"/>
  </NativeBaseProvider>
  </View>

  if (userLogged) {
    content =  
    <View>
    <View style={styles.container}>
      <NativeBaseProvider>
        <ContainerList/>
    </NativeBaseProvider>
    </View>
    <NativeBaseProvider>
        <MenuNavigation  text="Menu ContainerList"/>
    </NativeBaseProvider>
    </View>
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "50%",
  }
});
