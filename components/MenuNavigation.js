import React from 'react';
import { StyleSheet, View , Text} from 'react-native';

const MenuNavigation = ({text}) => {
    return (
        <View style={ styles.bottomView} > 
          <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomView:{
      width: '100%', 
      height: 50, 
      backgroundColor: '#FF9800', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
    textStyle:{
   
      color: '#fff',
      fontSize:22
    }
  });

export default MenuNavigation;

