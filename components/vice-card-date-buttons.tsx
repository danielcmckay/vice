import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles";

export const ViceCardDateButtons = (props: { disabled?: boolean }) => {
  return (
    <View style={styles.row}>
      {[...Array(7)].map((i) => {
        return (
          <DateButton
            text={i}
            onPress={() => console.log("pressed")}
            disabled={!!props.disabled}
          />
        );
      })}
    </View>
  );
};

const DateButton = (props: {
  text: number;
  onPress: () => void;
  disabled: boolean;
}) => {
  return (
    <View style={styles.dateIndicator}>
      <Pressable disabled={!!props.disabled} onPress={props.onPress}>
        <Text>{props.text}</Text>
      </Pressable>
    </View>
  );
};
