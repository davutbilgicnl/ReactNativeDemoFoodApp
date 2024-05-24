import React from 'react';
import { View, StyleSheet, Platform, StyleProp, ViewStyle } from 'react-native';

interface ICardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<ICardProps> = React.memo(({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
});

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: 'white',

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: 'visible',
      },
      android: {
        elevation: 4,
        overflow: 'hidden',
      },
    }),
  },
});

export default Card;
