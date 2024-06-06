import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

type IconName = 'star' | 'star-outline' | undefined;

interface IconButtonProps {
  iconName: IconName;
  color?: string;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [pressed && styles.pressed]}>
      <Ionicons name={iconName} size={24} color={color} style={{ marginRight: 8 }} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
