import React, { useState } from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Untitled from "./src/screens/Untitled";
import Untitled1 from "./src/screens/Untitled1";
import Untitled2 from "./src/screens/Untitled2";
import Untitled3 from "./src/screens/Untitled3";
import Untitled4 from "./src/screens/Untitled4";

const DrawerNavigation = DrawerNavigator({
  Untitled: {
    screen: Untitled
  },
  Untitled1: {
    screen: Untitled1
  },
  Untitled2: {
    screen: Untitled2
  },
  Untitled3: {
    screen: Untitled3
  },
  Untitled4: {
    screen: Untitled4
  }
});

const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Untitled: {
      screen: Untitled
    },
    Untitled1: {
      screen: Untitled1
    },
    Untitled2: {
      screen: Untitled2
    },
    Untitled3: {
      screen: Untitled3
    },
    Untitled4: {
      screen: Untitled4
    }
  },
  {
    headerMode: "none"
  }
);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <StackNavigation /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
