// utils/locationHelper.js
import * as Location from 'expo-location';

export const getCurrentLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return { error: 'लोकेशन परवानगी नाकारली गेली.' };
  }

  let location = await Location.getCurrentPositionAsync({});
  let geocode = await Location.reverseGeocodeAsync(location.coords);
  
  const region = geocode[0]?.district || 'अज्ञात';
  return { coords: location.coords, region };
};
