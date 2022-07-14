export const pageConfig = {
  addWorkOrderConfig: [
    {
      name: "workoder.add.workorder",
      numeric: true,
      width: "col-4",
      // infoKey: "form.info.workOrderId",
    },
    {
      name: "workoder.add.statuscode",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.workorderdate",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.customer",
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
      name: "workoder.add.customersaleschannel",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.workordertype",
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
    { name: "workoder.add.generator", type: "search", width: "col-4" },
    {
      name: "workoder.add.generatorrequirements",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.scheduletype",
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
      name: "workoder.add.salesrep",
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
      name: "workoder.add.insidesalesrep",
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
      name: "workoder.add.csr",
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
      name: "workoder.add.job",
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
      name: "workoder.add.workorderstartdate",
      numeric: true,
      width: "col-4",
      type: "date",
    },
    {
      name: "workoder.add.workorderenddate",
      numeric: true,
      width: "col-4",
      type: "date",
    },
    {
      name: "workoder.add.appointmentrequired",
      numeric: true,
      width: "col-4",
      type: "checkbox",
    },
    {
      name: "workoder.add.servicedate",
      numeric: true,
      width: "col-4",
      type: "date",
    },
    {
      name: "workoder.add.readytobill",
      numeric: true,
      width: "col-4",
      type: "checkbox",
    },
    {
      name: "workoder.add.paymentterms",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.govcontract",
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
      name: "workoder.add.do",
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
      name: "workoder.add.customerpo",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.internalpo",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.estimateddisposalrevenue",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.estimatedtransportationrevenue",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.oraclelocation",
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
      name: "workoder.add.marketdriver",
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
      name: "workoder.add.jobdescription",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.recurrance",
      numeric: true,
      width: "col-4",
      type: "checkbox",
    },
    {
      name: "workoder.add.tripticket",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workoder.add.transportationinstructions",
      numeric: true,
      width: "col-4",
    },
  ],
  ////// addManifestConfig /////////

  addManifestConfig: [
    {
      name: "addmanifest.manifesttracking",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addmanifest.plantoutbound",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addmanifest.workorder",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addmanifest.job",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addmanifest.designatedfacility",
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
      name: "addmanifest.generator",
      numeric: true,
      width: "col-6",
      type: "search",
    },
    {
      name: "addmanifest.transporter1",
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
      name: "addmanifest.transporter2",
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
      name: "addmanifest.transporter3",
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
      name: "addmanifest.transporter4",
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
      name: "addmanifest.equipmenttype",
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
      name: "addmanifest.truck",
      numeric: true,
      width: "col-6",
      type: "search",
    },
    {
      name: "addmanifest.truckgross",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addmanifest.trucktace",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addmanifest.trucknet",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addmanifest.3rdpartyticket",
      numeric: true,
      width: "col-6",
    },
  ],

  //// addNewGeneratorConfig ////

  addNewGeneratorConfig: [
    {
      name: "addnewgenerator.generatorname",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addnewgenerator.alternategeneratorname",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addnewgenerator.sitecountry",
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
      name: "addnewgenerator.generatorcity",
      numeric: true,
      width: "col-6",
    },
    {
      name: "addnewgenerator.addressline1of1",
      numeric: true,
      width: "col-12",
     
    },
    {
      name: "addnewgenerator.addressline2of2",
      numeric: true,
      width: "col-12",
      type: "search",
    },
    {
      name: "addnewgenerator.addressline3of3",
      numeric: true,
      width: "col-12",
     
    },
    {
      name: "addnewgenerator.mailingbilltoname",
      numeric: true,
      width: "col-12",
     
    },
    {
      name: "addnewgenerator.mailingbilltocountry",
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
      name: "addnewgenerator.city",
      numeric: true,
      width: "col-6",
     
    },
    {
      name: "addnewgenerator.addressline1",
      numeric: true,
      width: "col-12",
     
    },
    {
      name: "addnewgenerator.addressline2",
      numeric: true,
      width: "col-12",
      type: "search",
    },
    {
      name: "addnewgenerator.addressline3",
      numeric: true,
      width: "col-12",
    },
  ],
}
