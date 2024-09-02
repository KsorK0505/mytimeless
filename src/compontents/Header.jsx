import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
  },
});

export default Header;