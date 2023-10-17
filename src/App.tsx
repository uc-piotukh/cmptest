
import { Usercentrics, UsercentricsOptions, UsercentricsLoggerLevel, BannerSettings, UsercentricsReadyStatus } from '@usercentrics/react-native-sdk';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { HomeScreen } from './screens/Index';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    let options: UsercentricsOptions = { settingsId: "WGSo-AvsCxM5d2" };
    options.loggerLevel = UsercentricsLoggerLevel.debug;
    Usercentrics.configure(options);
    showLayer();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

async function showLayer(){

try {
  const status = await Usercentrics.status();

  if (status.shouldCollectConsent) {
    console.log("should collect consents");
    let bannerSettings = new BannerSettings();
    const response = await Usercentrics.showFirstLayer(bannerSettings);
    console.log("Consents -> ${response.consents}", response.consents);
    console.log("User Interaction -> ${response.userInteraction}", response.userInteraction);
    console.log("Controller Id -> ${response.controllerId}", response.controllerId);
  } else {
    console.log("no need to collect consents");

  }
} catch (error) {
  // Handle non-localized error
}

}
export default App;