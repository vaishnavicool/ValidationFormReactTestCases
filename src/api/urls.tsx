import { REACT_APP_API_PATH } from "config"

let host = () => {
  return REACT_APP_API_PATH
}

let urls: any = {
  g_users: () => `${host()}/users`,
  p_workOrders: () => `${host()}/WorkOrders/GetAllWorkOrders`,
  p_getFacilities: () => `${host()}/LookUp/GetFacilities`,
  p_getCSR: () => `${host()}/LookUp/GetCSR`,
  p_getSalesRep: () => `${host()}/LookUp/GetSalesRep`,
  p_getJobs: () => `${host()}/LookUp/GetJobs`,
  p_getCustomers: () => `${host()}/LookUp/GetCustomers`,
  g_getTransporters: () => `/mock_api/transpoters.json`,
}

export default urls
export { host }
