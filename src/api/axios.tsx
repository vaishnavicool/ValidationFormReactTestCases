import axios from "axios"
import _ from "lodash"
import { toast } from "react-toastify"
import store from "store"
import { formatMessage } from "shared"
import { SET_LOADING_STATUS } from "store/reducer/actionType"

toast.configure({
  position: "top-center",
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  limit: 1,
  bodyClassName:"myToastClass"
})

declare module "axios" {
  interface AxiosRequestConfig {
    loading_key?: string
  }
}

axios.defaults.headers.common["Accept"] = "application/json"

axios.interceptors.request.use(
  function (config: any) {
    let { loading_key } = config
    if (loading_key) {
      store.dispatch({ type: SET_LOADING_STATUS, loading_key, status: true })
    }
    if (localStorage.idToken) {
      config.headers.Authorization = `Bearer ${localStorage.idToken}`
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
let loggedOut = false

axios.interceptors.response.use(
  function (response) {
    let { loading_key }: any = response.config
    if (loading_key) {
      store.dispatch({ type: SET_LOADING_STATUS, loading_key, status: false })
    }
    return response
  },
  async function (error) {
    if (loggedOut) return
    if (error?.response?.status === 403) {
      loggedOut = true
      let { user } = store.getState()
      let u2: any = _.cloneDeep(user)
      u2.noAccess = true
      store.dispatch({ type: "SET_USER", user: u2 })
      return
    }
    if (error?.response?.status === 401) {
      let { user } = store.getState()
      let u2: any = _.cloneDeep(user)

      try {
        let response: any = {} // await acquireToken(account)
        let { accessToken, idToken } = response

        u2.accessToken = accessToken
        u2.account = response.account
        u2.idToken = idToken
        localStorage.idToken = idToken

        store.dispatch({ type: "SET_USER", user: u2 })
        const { config } = error
        config.headers.Authorization = `Bearer ${idToken}`

        return axios(config)
      } catch (error) {
        return error
      }
    }
    let { loading_key } = error.config || {}
    let { message } = error || {}

    if (message.includes("cancel;")) {
      loading_key = message.split(";")[1]
    } else {
      let en_msg = ""
      let sorry = "Sorry something went wrong."
      let msg = `${sorry} \n ${en_msg}`
      if (!navigator.onLine) msg = formatMessage("global.error.notInternet")
      toast(msg)
    }

    store.dispatch({ type: SET_LOADING_STATUS, loading_key, status: false })
    return Promise.reject(error)
  }
)

export default axios
