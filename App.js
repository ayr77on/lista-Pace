import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AddItem from './components/AddItem';
import List from './components/ItemList';
import Modal from './components/Modal';
import { StyleSheet, View } from 'react-native';
import { Stack, Alert, Center, NativeBaseProvider  } from "native-base";

export default function App() {
  const [itemToAdd, setItemToAdd] = useState("");
  const [inputError, setInputError] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const [isSelected, setSelection] = useState(false);

  const handleChangeText = (t) => setItemToAdd(t);

  const handleAddItem = () => {
    if (itemToAdd) {
      for (var i=0; i < itemList.length; i++) {
          if (itemList[i].value === itemToAdd) {
              setInputError('Item ya existente!');
              return false;
          }
      }
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(),
          value: itemToAdd,
        },
      ]);
      setItemToAdd('');
      setInputError('');
    } else {
      setInputError('Requerido!');
    }
  }

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  }

  const handleModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NativeBaseProvider>
        <Center flex={1}>
          <AddItem
            handleChangeText={handleChangeText}
            inputError={inputError}
            itemToAdd={itemToAdd}
            handleAddItem={handleAddItem}
          />
          
          <List
            itemList={itemList}            
            isSelected={isSelected}
            setSelection={setSelection}
            handleModal={handleModal}
          />
          <Modal
            modalVisible={modalVisible}
            handleConfirmDelete={handleConfirmDelete}
            itemSelected={itemSelected}
          />
        </Center>
      </NativeBaseProvider>
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
  },
});
