export const pageConfig = {
  addWorkOrderConfig: [
    {
      name: "workorder",
      numeric: true,
      width: "col-4",
      // infoKey: "info.workOrderId",
    },
    {
      name: "statuscode",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workorderdate",
      numeric: true,
      width: "col-4",
    },
    {
      name: "customer",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getSalesRep",
        labelKey: "name",
        valueKey: "salesRepid",
        body: {
          modeId: true,
        },
      },
    },
    {
      name: "customersaleschannel",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workordertype",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getSalesRep",
        labelKey: "name",
        valueKey: "salesRepid",
        body: {
          modeId: true,
        },
      },
    },
    { name: "generator", type: "search", width: "col-4" },
    {
      name: "generatorrequirements",
      numeric: true,
      width: "col-4",
    },
    {
      name: "scheduletype",
      width: "col-4",
      type: "dropdown",
      numeric: true,
      dropdownOpts: {
        api_key: "p_getCSR",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "1",
        },
      },
    },
    {
      name: "salesrep",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "insidesalesrep",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "csr",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "job",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "workorderstartdate",
      numeric: true,
      width: "col-4",
      type: "date",
    },
    {
      name: "workorderenddate",
      numeric: true,
      width: "col-4",
      type: "date",
    },
    {
      name: "appointmentrequired",
      numeric: true,
      width: "col-4",
      type: "checkbox",
    },
    {
      name: "servicedate",
      numeric: true,
      width: "col-4",
      type: "date",
    },
    {
      name: "readytobill",
      numeric: true,
      width: "col-4",
      type: "checkbox",
    },
    {
      name: "paymentterms",
      numeric: true,
      width: "col-4",
    },
    {
      name: "govcontract",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "do",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "customerpo",
      numeric: true,
      width: "col-4",
    },
    {
      name: "internalpo",
      numeric: true,
      width: "col-4",
    },
    {
      name: "estimateddisposalrevenue",
      numeric: true,
      width: "col-4",
    },
    {
      name: "estimatedtransportationrevenue",
      numeric: true,
      width: "col-4",
    },
    {
      name: "oraclelocation",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "marketdriver",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "jobdescription",
      numeric: true,
      width: "col-4",
    },
    {
      name: "recurrance",
      numeric: true,
      width: "col-4",
      type: "checkbox",
    },
    {
      name: "tripticket",
      numeric: true,
      width: "col-4",
    },
    {
      name: "transportationinstructions",
      numeric: true,
      width: "col-4",
    },
  ],
  ////// addManifestConfig /////////

  addManifestConfig: [
    {
      name: "manifesttracking",
      numeric: true,
      width: "col-6",
    },
    {
      name: "plantoutbound",
      numeric: true,
      width: "col-6",
    },
    {
      name: "workorder",
      numeric: true,
      width: "col-6",
    },
    {
      name: "job",
      numeric: true,
      width: "col-6",
    },
    {
      name: "designatedfacility",
      numeric: true,
      width: "col-6",
      // type: "dropdown",
      // dropdownOpts: {
      //   api_key: "p_getFacilities",
      //   labelKey: "name",
      //   valueKey: "id",
      //   body: {
      //     optionalParam: "0",
      //   },
      // },
    },
    {
      name: "generator",
      numeric: true,
      width: "col-6",
      type: "search",
    },
    {
      name: "transporter1",
      numeric: true,
      width: "col-6",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "transporter2",
      numeric: true,
      width: "col-6",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "transporter3",
      width: "col-6",
      numeric: true,
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "transporter4",
      numeric: true,
      width: "col-6",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "equipmenttype",
      numeric: true,
      width: "col-6",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "truck",
      numeric: true,
      width: "col-6",
      type: "search",
    },
    {
      name: "truckgross",
      numeric: true,
      width: "col-6",
    },
    {
      name: "trucktare",
      numeric: true,
      width: "col-6",
    },
    {
      name: "trucknet",
      numeric: true,
      width: "col-6",
    },
    {
      name: "3rdpartyticket",
      numeric: true,
      width: "col-6",
    },
    {
      name: "container",
      numeric: true,
      width: "col-6",
    },
    {
      name: "manifeastprintstyle",
      numeric: true,
      width: "col-6",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "spacialhandinginstuctions",
      numeric: true,
      width: "col-12",
    },
    {
      name: "plantinstructions",
      numeric: true,
      width: "col-12",
    },
    {
      name: "comments",
      numeric: true,
      width: "col-12",
    },
    {
      name: "recivedate",
      numeric: true,
      width: "col-6",
      type: "date",
    },
    {
      name: "shipdate",
      numeric: true,
      width: "col-6",
      type:"date"
    },
    {
      name: "outboundrevenue",
      numeric: true,
      width: "col-6",
      type:"number"
    },
    {
      name: "tsdfreceiptdate",
      numeric: true,
      width: "col-6",
      type:"date",      
    },
    {
      name: "bolck14note",
      numeric: true,
      width: "col-12",
    },
    {
      name: "outboundponumber",
      numeric: true,
      width: "col-6",
    },
    {
      name: "bin",
      numeric: true,
      width: "col-6",
    },
    {
      name: "voided",
      numeric: true,
      width: "col-6",
      type:"checkbox",
    },
    {
      name: "wasteanalysisavailable",
      numeric: true,
      width: "col-6",
      type:"checkbox",
    },
    {
      name: "multilineformat",
      numeric: true,
      width: "col-6",
      type:"checkbox",
    },
    {
      name: "additionalconnectedepaids",
      numeric: true,
      width: "col-12",
    },
    {
      name: "additionalconnectedmanifests",
      numeric: true,
      width: "col-12",
    },
    
  ],

  //// addNewGeneratorConfig ////

  addNewGeneratorConfig: [
    {
      name: "generatorname",
      numeric: true,
      width: "col-6",
    },
    {
      name: "alternategeneratorname",
      numeric: true,
      width: "col-6",
    },
    {
      name: "sitecountry",
      numeric: true,
      width: "col-6",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "generatorcity",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addressline1of1",
      numeric: true,
      width: "col-12",
    },
    {
      name: "addressline2of2",
      numeric: true,
      width: "col-12",
      type: "search",
    },
    {
      name: "addressline3of3",
      numeric: true,
      width: "col-12",
    },
    {
      name: "mailingbilltoname",
      numeric: true,
      width: "col-12",
    },
    {
      name: "mailingbilltocountry",
      width: "col-6",
      numeric: true,
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getFacilities",
        labelKey: "name",
        valueKey: "id",
        body: {
          optionalParam: "0",
        },
      },
    },
    {
      name: "city",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addressline1",
      numeric: true,
      width: "col-12",
    },
    {
      name: "addressline2",
      numeric: true,
      width: "col-12",
      type: "search",
    },
    {
      name: "addressline3",
      numeric: true,
      width: "col-12",
    },
  ],
}
