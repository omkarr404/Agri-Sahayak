// // navigation/MainTabs.js
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import SchemesScreen from '../screens/SchemesScreen';
// import ProduceListing from '../screens/ProduceListingScreen';
// import PriceNegotiation from '../screens/PriceNegotiationScreen';
// import Transaction from '../screens/TransactionScreen';
// import DemandForecast from '../screens/DemandForecastScreen';
// import GroupSelling from '../screens/GroupSellingScreen';
// import TrustSystem from '../screens/TrustSystemScreen';
// import Logistics from '../screens/LogisticsScreen';
// import ChatBotScreen from '../screens/ChatBotScreen';
// import OfflineMode from '../screens/OfflineModeScreen';
// import MarketAlerts from '../screens/MarketAlertsScreen';
// import GovtSchemes from '../screens/GovtSchemesScreen';
// import FarmerTrade from '../screens/FarmerTradeScreen';
// import MarketPrices from '../screens/MarketPricesScreen';
// import DirectToBuyersScreen from '../screens/DirectToBuyersScreen';
// import ProduceDetailScreen from '../screens/ProduceDetailScreen';
// import GroupChatScreen from '../screens/GroupChatScreen';
// import ChatScreen from '../screens/ChatScreen';
// import GroupListScreen from '../screens/GroupListScreen';
// import FarmerChatListScreen from '../screens/FarmerChatListScreen';
// import FarmerChatScreen from '../screens/FarmerChatScreen';
// import TrackServiceScreen from '../screens/TrackServiceScreen';
// import ServiceHistoryScreen from '../screens/ServiceHistoryScreen';
// import SchemeRegistrationScreen from '../screens/SchemeRegistrationScreen';
// import AddProductScreen from '../screens/AddProductScreen';
// import VoiceInputScreen from '../screens/VoiceInputScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'डॅशबोर्ड' }} />
//       <Stack.Screen name="ProduceListing" component={ProduceListing} />
//       <Stack.Screen name="PriceNegotiation" component={PriceNegotiation} />
//       <Stack.Screen name="Transaction" component={Transaction} />
//       <Stack.Screen name="DemandForecast" component={DemandForecast} />
//       <Stack.Screen name="GroupSelling" component={GroupSelling} />
//       <Stack.Screen name="TrustSystem" component={TrustSystem} />
//       <Stack.Screen name="Logistics" component={Logistics} />
//       <Stack.Screen name="Chatbot" component={ChatBotScreen} options={{ title: 'चॅटबॉट' }} />
//       <Stack.Screen name="OfflineMode" component={OfflineMode} />
//       <Stack.Screen name="MarketAlerts" component={MarketAlerts} />
//       <Stack.Screen name="GovtSchemes" component={GovtSchemes} />
//       <Stack.Screen name="FarmerTrade" component={FarmerTrade} />
//       <Stack.Screen name="MarketPrices" component={MarketPrices} /> 
//       <Stack.Screen name="DirectToBuyers" component={DirectToBuyersScreen} />
//       <Stack.Screen name="ProduceDetail" component={ProduceDetailScreen} options={{ title: 'उत्पन्न तपशील' }} />
//       <Stack.Screen name="GroupChat" component={GroupChatScreen} />
//       <Stack.Screen name="Chat" component={ChatScreen} />
//       <Stack.Screen name="GroupList" component={GroupListScreen} />
//       <Stack.Screen name="FarmerChatList" component={FarmerChatListScreen} />
//       <Stack.Screen name="FarmerChat" component={FarmerChatScreen} />
//       <Stack.Screen name="TrackService" component={TrackServiceScreen} />
//       <Stack.Screen name="ServiceHistory" component={ServiceHistoryScreen} />
//       <Stack.Screen name="SchemeRegistration" component={SchemeRegistrationScreen} />
//       <Stack.Screen name="AddProduct" component={AddProductScreen} options={{ title: 'उत्पन्न जोडा' }} />
//       <Stack.Screen name="VoiceInput" component={VoiceInputScreen} options={{ title: 'बोलून टाका' }} />
//     </Stack.Navigator>
//   );
// }

// export default function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: '#2e7d32',
//         tabBarInactiveTintColor: 'gray',
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === 'Home') iconName = 'home';
//           else if (route.name === 'Schemes') iconName = 'document-text';
//           else if (route.name === 'Profile') iconName = 'person';

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeStack} options={{ title: 'मुख्य' }} />
//       <Tab.Screen name="Schemes" component={SchemesScreen} options={{ title: 'योजना' }} />
//       <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'प्रोफाईल' }} />
//       <Tab.Screen
//   name="Chatbot"
//   component={ChatBotScreen}
//   options={{
//     tabBarLabel: 'बॉट',
//     tabBarIcon: ({ color, size }) => (
//       <Ionicons name="chatbubble-ellipses" size={size} color={color} />
//     ),
//   }}
// />


//     </Tab.Navigator>
//   );
// }

// navigation/MainTabs.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SchemesScreen from '../screens/SchemesScreen';
import ProduceListing from '../screens/ProduceListingScreen';
import PriceNegotiation from '../screens/PriceNegotiationScreen';
import Transaction from '../screens/TransactionScreen';
import DemandForecast from '../screens/DemandForecastScreen';
import GroupSelling from '../screens/GroupSellingScreen';
import TrustSystem from '../screens/TrustSystemScreen';
import Logistics from '../screens/LogisticsScreen';
import ChatBotScreen from '../screens/ChatBotScreen';
import OfflineMode from '../screens/OfflineModeScreen';
import MarketAlerts from '../screens/MarketAlertsScreen';
import GovtSchemes from '../screens/GovtSchemesScreen';
import FarmerTrade from '../screens/FarmerTradeScreen';
import MarketPrices from '../screens/MarketPricesScreen';
import DirectToBuyersScreen from '../screens/DirectToBuyersScreen';
import ProduceDetailScreen from '../screens/ProduceDetailScreen';
import GroupChatScreen from '../screens/GroupChatScreen';
import ChatScreen from '../screens/ChatScreen';
import GroupListScreen from '../screens/GroupListScreen';
import FarmerChatListScreen from '../screens/FarmerChatListScreen';
import FarmerChatScreen from '../screens/FarmerChatScreen';
import TrackServiceScreen from '../screens/TrackServiceScreen';
import ServiceHistoryScreen from '../screens/ServiceHistoryScreen';
import SchemeRegistrationScreen from '../screens/SchemeRegistrationScreen';
import AddProductScreen from '../screens/AddProductScreen';
import VoiceInputScreen from '../screens/VoiceInputScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'डॅशबोर्ड' }} />
      <Stack.Screen name="ProduceListing" component={ProduceListing} />
      <Stack.Screen name="PriceNegotiation" component={PriceNegotiation} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="DemandForecast" component={DemandForecast} />
      <Stack.Screen name="GroupSelling" component={GroupSelling} />
      <Stack.Screen name="TrustSystem" component={TrustSystem} />
      <Stack.Screen name="Logistics" component={Logistics} />
      <Stack.Screen name="Chatbot" component={ChatBotScreen} options={{ title: 'चॅटबॉट' }} />
      <Stack.Screen name="OfflineMode" component={OfflineMode} />
      <Stack.Screen name="MarketAlerts" component={MarketAlerts} />
      <Stack.Screen name="GovtSchemes" component={GovtSchemes} />
      <Stack.Screen name="FarmerTrade" component={FarmerTrade} />
      <Stack.Screen name="MarketPrices" component={MarketPrices} /> 
      <Stack.Screen name="DirectToBuyers" component={DirectToBuyersScreen} />
      <Stack.Screen name="ProduceDetail" component={ProduceDetailScreen} options={{ title: 'उत्पन्न तपशील' }} />
      <Stack.Screen name="GroupChat" component={GroupChatScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="GroupList" component={GroupListScreen} />
      <Stack.Screen name="FarmerChatList" component={FarmerChatListScreen} />
      <Stack.Screen name="FarmerChat" component={FarmerChatScreen} />
      <Stack.Screen name="TrackService" component={TrackServiceScreen} />
      <Stack.Screen name="ServiceHistory" component={ServiceHistoryScreen} />
      <Stack.Screen name="SchemeRegistration" component={SchemeRegistrationScreen} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} options={{ title: 'उत्पन्न जोडा' }} />
      <Stack.Screen name="VoiceInput" component={VoiceInputScreen} options={{ title: 'बोलून टाका' }} />
    </Stack.Navigator>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2e7d32',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Schemes') iconName = 'document-text';
          else if (route.name === 'Profile') iconName = 'person';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ title: 'मुख्य' }} />
      <Tab.Screen name="Schemes" component={SchemesScreen} options={{ title: 'योजना' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'प्रोफाईल' }} />
      <Tab.Screen
        name="Chatbot"
        component={ChatBotScreen}
        options={{
          tabBarLabel: 'बॉट',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
