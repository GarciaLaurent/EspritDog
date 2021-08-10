import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reactotronRedux } from "reactotron-redux";

const rc = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: "Reactotron In Expo demo",
    host: "10.24.4.20",
  })
  .useReactNative()
  .use(reactotronRedux())
  .connect(); // let's connect!
export default rc;
