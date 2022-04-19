import React, { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { Vice } from "../interfaces";
import { styles } from "../styles";
import { numToCurrency } from "../utils/number-format-utils";
import { capitalize } from "../utils/string-utils";
import { ViceCardDateButtons } from "./vice-card-date-buttons";
import { ViceCardModal } from "./vice-card-modal";

export const ViceCard = (props: { vice: Vice }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <ViceCardModal
        visible={showModal}
        vice={props.vice}
        onDismiss={() => setShowModal(false)}
      />
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Pressable onPress={() => setShowModal(true)}>
            <Text style={styles.cardSaveTitle}>{props.vice.name}</Text>
          </Pressable>
          <Text style={styles.cardSaveAmt}>
            {numToCurrency(props.vice.balance ?? 0)}
          </Text>
        </View>
        <Text style={styles.cardText}>
          {numToCurrency(props.vice.price ?? 0)} committed per day
        </Text>
        <Text style={styles.cardText}>
          {capitalize(props.vice.frequency ?? "")} – {props.vice.description}
        </Text>
        <ViceCardDateButtons
          onPress={(date: Date) => console.log(date)}
          vice={props.vice}
        />
      </View>
    </>
  );
};
