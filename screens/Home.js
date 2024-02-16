import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
const ImageUrl = require("../assets/wb.jpg");

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Image
                    source={ImageUrl }
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButtonContainer}
            >
                <Text style={styles.chatText}> Group chat</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={styles.chatButton}>
                    <Entypo name="chat" size={24} color={colors.lightGray} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
        },
        chatButtonContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 20,
            marginBottom: 50,
        },
        chatText: {
            color: 'green',
            fontSize: 18,
            marginRight: 10,
        },
        chatButton: {
            backgroundColor: 'transparent',
            borderRadius: 25,
            padding: 5,
        },
    });