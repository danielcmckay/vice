import React from "react";
import { Pressable, Text, View } from "react-native";
import { Vice } from "../interfaces";
import { styles } from "../styles";
import { getDateRange } from "../utils/date-utils";

const today = new Date();
const startDate: number = new Date().setDate(today.getDate() - 3).valueOf();
const endDate: number = new Date().setDate(today.getDate() + 3).valueOf();

const DATE_RANGE = getDateRange(startDate, endDate);

export const ViceCardDateButtons = (props: {
  disabled?: boolean;
  vice: Vice;
  onPress: (date: Date) => void
}) => {
  return (
    <View style={styles.row}>
      {DATE_RANGE.map((d) => {
        return (
          <DateButton
            key={`${props.vice.id}-${d.getDate()}`}
            text={d.getDate()}
            onPress={() => props.onPress(d)}
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
