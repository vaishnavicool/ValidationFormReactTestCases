import axios from "./axios"
import _ from "lodash"
import urls from "./urls"

let api: any = {}

Object.keys(urls).forEach((d: any) => {
  api[d] = async (body: any = {}) => {
    let url = urls[d](body)
    let { loading_key = "", cancelToken } = body
    let res
    if (d.startsWith("g_"))
      res = await axios.get(url, {
        loading_key
      })
    if (d.startsWith("p_"))
      res = await axios.post(
        url,
        _.omit(body, ["loading_key", "cancelToken"]),
        {
          loading_key,
          cancelToken,
        }
      )
    if (d.startsWith("pa_"))
      res = await axios.patch(url, _.omit(body, "loading_key"), {
        loading_key,
      })
    if (res?.data) return res?.data
  }
})

export default api
