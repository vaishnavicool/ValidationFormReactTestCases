let { REACT_APP_API_PATH } = process.env

if (!REACT_APP_API_PATH)
  REACT_APP_API_PATH =
    "http://localhost:3004"

export { REACT_APP_API_PATH }
