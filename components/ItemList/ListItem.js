import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  CheckBox,
  View,
} from 'react-native';

const ListItem = ({ data, handleModal,isSelected,setSelection }) => {
  return (
    <View style={[styles.item, styles.shadow]}>
      <Text>{data.item.value}</Text>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      <Button
        title="X"
        color="#000000"
        onPress={() => handleModal(data.item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default ListItem;