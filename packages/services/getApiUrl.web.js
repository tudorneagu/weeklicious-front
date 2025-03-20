const getApiUrl = () => {
  // This code will only be used in web builds where import.meta is supported.
  if (import.meta.env && import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  return "";
};

export default getApiUrl;
