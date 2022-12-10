import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CardPoints = ({month = '', points = 0}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.month}>{month}</Text>
      </View>
      <View style={[styles.row, {flex: 2, justifyContent: 'center', alignItems: 'center'}]}>
        <Text style={styles.points}>{points} pts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#334ffa',
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  month: {
    fontSize: 16,
    color: '#fff',
  },
  points: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CardPoints;
