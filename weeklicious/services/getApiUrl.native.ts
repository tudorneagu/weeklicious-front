import Constants from "expo-constants";

const getApiUrl = () => {
  // Ensure your Expo config has the extra field set properly
  return Constants.expoConfig?.extra?.API_URL || "";
};

export default getApiUrl;
