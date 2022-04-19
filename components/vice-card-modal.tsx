import React, { useState } from "react";
import { Modal, Pressable, Switch, Text, TextInput, View } from "react-native";
import { Vice } from "../interfaces";
import { styles } from "../styles";
import { numToCurrency } from "../utils/number-format-utils";
import { ViceCardDateButtons } from "./vice-card-date-buttons";

export const ViceCardModal = (props: {
  visible: boolean;
  onDismiss: () => void;
  vice: Vice;
  isEditMode?: boolean;
}) => {
  const [editMode, setEditMode] = useState<boolean>(!!props.isEditMode);

  return (
    <Modal visible={props.visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.viceModal}>
          <View style={styles.viceModalContent}>
            <View style={styles.cardTitle}>
              {!editMode ? (
                <Text style={styles.cardSaveTitle}>{props.vice.name}</Text>
              ) : (
                <TextInput
                  style={{ ...styles.inlineInput, ...styles.cardSaveTitle }}
                  defaultValue={props.vice.name}
                  placeholder="Title"
                  placeholderTextColor={"#AEACAC"}
                />
              )}
              <Text style={styles.cardSaveAmt}>
                {numToCurrency(props.vice.balance ?? 0)}
              </Text>
            </View>
            {editMode ? (
              <>
                <Text style={styles.appText}>
                  Type: {props.vice.type === "save" ? "Save" : "Track"}
                </Text>
                <Switch value={props.vice.type === "save"} />
              </>
            ) : (
              <></>
            )}
            <Text style={styles.cardText}>
              ${props.vice.price} committed per day
            </Text>
            <Text style={styles.cardText}>
              Once a day – No snacking after dinner
            </Text>
            <ViceCardDateButtons
              vice={props.vice}
              onPress={(date: Date) => console.log(date)}
              disabled={!editMode}
            />
          </View>
          <View style={styles.row}>
            <Pressable onPress={() => setEditMode(!editMode)}>
              <Text
                style={{
                  ...styles.viceModalButton,
                  ...styles.viceModalButtonOutline,
                }}
              >
                {!editMode ? "Edit" : "Save"}
              </Text>
            </Pressable>
            <Pressable onPress={props.onDismiss}>
              <Text style={styles.viceModalButton}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
