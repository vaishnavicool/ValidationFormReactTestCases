import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import { persistReducer, persistStore } from "redux-persist"
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync"
import storage from "redux-persist/lib/storage"
import reducers from "./reducer"

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, reducers)
let logger = createLogger({ collapsed: true })

const config = {
  // TOGGLE_TODO will not be triggered in other tabs
  whitelist: ["SET_USER"],
}
const middlewares = [createStateSyncMiddleware(config), logger]

let store = createStore(persistedReducer, applyMiddleware(...middlewares))

initMessageListener(store)

let persistor = persistStore(store)

export default store
export { persistor }
