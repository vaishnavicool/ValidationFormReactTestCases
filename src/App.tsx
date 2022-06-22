import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { IntlProvider } from "react-intl"
import messages_en from "local/en.json"
import store, { persistor } from "./store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import MainWrapper from "layout"


const App: React.FunctionComponent = () => {
  const messages: any = {
    en: messages_en,
  }
  const language = navigator.language.split(/[-_]/)[0]

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <IntlProvider locale={language} messages={messages[language]}>
            <MainWrapper />
          </IntlProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
