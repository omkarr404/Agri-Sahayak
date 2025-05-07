// // App.js
// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MainTabs from './navigation/MainTabs';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import OnboardingScreen from './screens/OnboardingScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkLogin = async () => {
//       const loggedIn = await AsyncStorage.getItem('isLoggedIn');
//       const userName = await AsyncStorage.getItem('userName');
//       const userDistrict = await AsyncStorage.getItem('userDistrict');
//       console.log('User:', userName, 'District:', userDistrict); // Just for debug
  
//       setIsLoggedIn(loggedIn === 'true');
//       setIsLoading(false);
//     };
//     checkLogin();
//   }, []);
  

//   if (isLoading) return null;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {isLoggedIn ? (
//           <Stack.Screen name="MainTabs" component={MainTabs} />
//         ) : (
//           <>
//             <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Register" component={RegisterScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './navigation/MainTabs';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  /*
  useEffect(() => {
    const checkLogin = async () => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      const userName = await AsyncStorage.getItem('userName');
      const userDistrict = await AsyncStorage.getItem('userDistrict');
      console.log('User:', userName, 'District:', userDistrict); // Just for debug
  
      setIsLoggedIn(loggedIn === 'true');
      setIsLoading(false);
    };
    checkLogin();
  }, []);
  */

  if (isLoading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="MainTabs" component={MainTabs} />
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
