import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import ListItem from './ListItem';

const List = ({ itemList, handleModal, isSelected,setSelection }) => {
  return (
    <FlatList
      data={itemList}
      renderItem={(data) => <ListItem handleModal={handleModal} isSelected={isSelected} setSelection={setSelection} data={data} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 20,
  },
});

export default List;