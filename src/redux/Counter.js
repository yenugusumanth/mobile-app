import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {counterValue, decremented, incremented} from './counterReducer';
const Counter = () => {
  const value = useSelector(counterValue);
  const dispatch = useDispatch();
  console.log('Counter Value', value);
  return (
    <SafeAreaView>
      <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
        {value}
      </Text>
      <Button
        onPress={() => dispatch(incremented())}
        title="Increment Counter"
      />
      <Text> </Text>
      <Button
        onPress={() => dispatch(decremented())}
        title="Decrement Counter"
      />
    </SafeAreaView>
  );
};

export default Counter;