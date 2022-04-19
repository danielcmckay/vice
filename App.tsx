import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { ViceCard } from "./components/vice-card";
import { Vice } from "./interfaces";
import { ViceCardModal } from "./components/vice-card-modal";
import { FontAwesome } from "@expo/vector-icons";
import {
  useFonts,
  Kadwa_400Regular,
  Kadwa_700Bold,
} from "@expo-google-fonts/kadwa";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Kadwa_400Regular,
    Kadwa_700Bold,
  });

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
      id: "2",
      createdAt: 1000,
      createdBy: "user1",
      description: "No snacking after dinner",
      type: "save",
      frequency: "weekly",
      history: [],
      balance: 45.0,
      price: 2.5,
    },
  ]);

  const SAVED_TOTAL = vices
    .filter((v) => v.balance)
    .map((v) => v.balance)
    .reduce((acc, curr) => acc! + curr!);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
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
            <View style={styles.avatar}>
              <FontAwesome name="user" size={40} color="#333333" />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.subTitle}>
              <Text style={{ color: "#14F4E7", fontWeight: "bold" }}>
                ${SAVED_TOTAL}{" "}
              </Text>
              saved over 50 days
            </Text>
          </View>
          <ScrollView style={styles.cardContainer}>
            {vices.map((vice) => (
              <ViceCard key={vice.id} vice={vice} />
            ))}
          </ScrollView>

          <StatusBar style="auto" translucent={true} />
          <Pressable onPress={() => setCreateMode(true)}>
            <View style={styles.floatingActionButton}>
              <Text style={{ color: "#14F4E7", fontWeight: "bold" }}>+</Text>
            </View>
          </Pressable>
        </View>
      </NavigationContainer>
    );
  }
}
