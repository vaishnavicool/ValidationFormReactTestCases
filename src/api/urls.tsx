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
  g_getMarket_driver: () => `/mock_api/market_driver.json`,
  g_getInside_sales_rep: () => `/mock_api/inside_sales_rep.json`,
  g_getGov_contract: () => `/mock_api/Gov_contract.json`,
  g_getSchedule_type: () => `/mock_api/Schedule_type.json`,
  g_getDo: () => `/mock_api/Do.json`,
  g_getOracle_location: () => `/mock_api/Oracle_location.json`,
  g_getSite_country_mailing_bill_to_country: () => `/mock_api/Site_country_mailing_bill_to_country.json`,
  g_getManifeast_print_style: () => `/mock_api/Manifeast_print_style.json`,
}

export default urls
export { host }
