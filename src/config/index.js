let { REACT_APP_API_PATH } = process.env

if (!REACT_APP_API_PATH)
  REACT_APP_API_PATH =
    "https://ceionecore-nonprod-api-dev.azurewebsites.net/api"

export { REACT_APP_API_PATH }
