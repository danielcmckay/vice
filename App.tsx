import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { ViceCard } from "./components/vice-card";
import { Vice } from "./interfaces";
import { ViceCardModal } from "./components/vice-card-modal";

export default function App() {
  const [createMode, setCreateMode] = useState<boolean>(false);
  const [vices, setVices] = useState<Vice[]>([
    {
      name: "Stop snacking",
      id: "1",
      createdAt: 1000,
      createdBy: "user1",
      description: "No snacking after dinner",
      type: "save",
      frequency: "daily",
      history: [],
      balance: 45.0,
      price: 2.5,
    },
    {
      name: "Stop snacking",
      id: "1",
      createdAt: 1000,
      createdBy: "user1",
      description: "No snacking after dinner",
      type: "save",
      frequency: "daily",
      history: [],
      balance: 45.0,
      price: 2.5,
    },
    {
      name: "Stop snacking",
      id: "1",
      createdAt: 1000,
      createdBy: "user1",
      description: "No snacking after dinner",
      type: "save",
      frequency: "daily",
      history: [],
      balance: 45.0,
      price: 2.5,
    },
    {
      name: "Stop snacking",
      id: "1",
      createdAt: 1000,
      createdBy: "user1",
      description: "No snacking after dinner",
      type: "save",
      frequency: "daily",
      history: [],
      balance: 45.0,
      price: 2.5,
    },
  ]);

  return (
    <>
      <ViceCardModal
        visible={createMode}
        onDismiss={() => setCreateMode(false)}
        vice={{
          createdAt: 0,
          createdBy: "",
          description: "",
          history: [],
          id: "thing",
          name: "",
          type: "save",
          balance: 0,
        }}
        isEditMode={true}
      />
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.title}>Vice</Text>
          <View style={styles.avatar} />
        </View>
        <ScrollView style={styles.cardContainer}>
          {vices.map((vice) => (
            <ViceCard vice={vice} />
          ))}
        </ScrollView>

        <StatusBar style="auto" />
        <Pressable onPress={() => setCreateMode(true)}>
          <View style={styles.floatingActionButton}>
            <Text style={{ color: "#14F4E7", fontWeight: "bold" }}>+</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}
