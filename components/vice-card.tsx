import React, { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { Vice } from "../interfaces";
import { styles } from "../styles";
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
          <Text style={styles.cardSaveAmt}>${props.vice.balance}</Text>
        </View>
        <Text style={styles.cardText}>
          ${props.vice.price} committed per day
        </Text>
        <Text style={styles.cardText}>
          Once a day – No snacking after dinner
        </Text>
        <ViceCardDateButtons />
      </View>
    </>
  );
};
