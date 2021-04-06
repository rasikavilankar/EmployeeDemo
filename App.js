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
import {persistor, storePersist} from './src/redux/PersistConfig';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const UserStack = createStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="Users" component={EmployeeList} />
      <UserStack.Screen name="Details" component={EmployeeDetailsScreen} />
    </UserStack.Navigator>
  );
}

const ReportStack = createStackNavigator();

function ReportStackScreen() {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen name="Reports" component={ReportsScreen} />
    </ReportStack.Navigator>
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
        component={UserStackScreen}
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
        component={ReportStackScreen}
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
  // console.disableYellowBox = true;
  return (
    // <Provider store={storePersist}>
    //   <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator headerMode="none" headerShown={false}>
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="HomeScreen" component={BottomTabSTack} />
          </MainStack.Navigator>
        </NavigationContainer>
    //   </PersistGate>
    // </Provider>
  );
}
