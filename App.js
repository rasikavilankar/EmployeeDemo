import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EmployeeDetailsScreen from './src/modules/EmployeeDetailsScreen';
import RegistrationScreen from './src/modules/RegistrationScreen';
import ReportsScreen from './src/modules/ReportsScreen';
import EmployeeList from './src/modules/EmployeeList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Users" component={EmployeeList} />
      <HomeStack.Screen name="Details" component={EmployeeDetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Reports" component={ReportsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabSTack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
      }}>
      <Tab.Screen
        name="Users"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Reports"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="chart-pie"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none" headerShown={false}>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="HomeScreen" component={BottomTabSTack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
