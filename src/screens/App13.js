import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { images } from '../res/images/index';//for images

function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

function Notifications({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <Avatar.Image
                                source={images.IMG_FIRST}
                                size={50} />
                            <View style={{ marginLeft: 15, flexDirection: "column" }}>
                                <Title style={styles.title}>XYZ ABX</Title>
                                <Caption style={styles.caption}>@xyzsddfe</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="home" color={color} size={size} />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate("Notifications") }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="message-text-outline" color={color} size={size} />
                            )}
                            label="Messages"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="account-multiple-outline" color={color} size={size} />
                            )}
                            label="My Subscribers"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="hammer-screwdriver" color={color} size={size} />
                            )}
                            label="Settings"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="bell-ring-outline" color={color} size={size} />
                            )}
                            label="Notification"
                            onPress={() => { }} />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={() => { }} />
            </Drawer.Section>
        </View>
    );
}

const Drawers = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawers.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawers.Screen name="Feed" component={Feed} />
            <Drawers.Screen name="Notifications" component={Notifications} />
        </Drawers.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});