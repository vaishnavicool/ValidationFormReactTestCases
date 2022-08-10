import { REACT_APP_API_PATH } from "config"

let host = () => {
  return REACT_APP_API_PATH
}

let urls: any = {
  g_user: ({id}) => `${host()}/user/${id}`,
  p_user: () => `${host()}/user`,
  put_user: ({id}) => `${host()}/user/${id}`,
  g_users:()=> `${host()}/user`,


  p_workOrders: () => `${host()}/WorkOrders/GetAllWorkOrders`,
  p_getFacilities: () => `${host()}/LookUp/GetFacilities`,
  p_getCSR: () => `${host()}/LookUp/GetCSR`,
  p_getSalesRep: () => `${host()}/LookUp/GetSalesRep`,
  p_getJobs: () => `${host()}/LookUp/GetJobs`,
  p_getCustomers: () => `${host()}/LookUp/GetCustomers`,
  g_getTransporters: () => `/mock_api/Transporters.json`,
  g_getMarketDriver: () => `/mock_api/market_driver.json`,
  g_getInsideSalesRep: () => `/mock_api/inside_sales_rep.json`,
  g_getGov_contract: () => `/mock_api/Gov_contract.json`,
  g_getSchedule_type: () => `/mock_api/Schedule_type.json`,
  g_getDo: () => `/mock_api/Do.json`,
  g_getOracle_location: () => `/mock_api/Oracle_location.json`,
  g_getSite_country_mailing_bill_to_country: () =>
    `/mock_api/Site_country_mailing_bill_to_country.json`,
  g_getManifeast_print_style: () => `/mock_api/Manifeast_print_style.json`,
  g_getGenerator_state_mailing_bill_to_state: () =>
    `/mock_api/Generator_state_mailing_bill _to_state.json`,
  g_getGenerator_county_mailing_bill_to_county: () =>
    `/mock_api/Generator_county_mailing_bill_to_county.json`,
    g_getDocument_Type: () =>
    `/mock_api/Document_Type.json`, 
    g_getWorkOrder: () =>`/mock_api/WorkOrder.json`,
    g_getEquipment_Type: () =>`/mock_api/Equipment_Type.json`, 
    g_getCountry: () =>`/mock_api/Country.json`,
}

export default urls
export { host }
