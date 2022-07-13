export const pageConfig = {
  addWorkOrderConfig: [
    {
      name: "workoder.add.workorder",
      numeric: true,
      width: "col-4",
      infoKey: "form.info.workOrderId",
    },
    {
      name: "workoder.add.statuscode",
      numeric: true,
      width: "col-4",
      // type: "dropdown",
      // dropdownOpts: {
      //   api_key: "p_getJobs",
      //   labelKey: "jobName",
      //   valueKey: "jobId",
      //   body: {
      //     isOutBoundOnly: true,
      //     searchValue: 0,
      //   },
      // },
    },
    {
      name: "workoder.add.workorderdate",
      numeric: true,
      width: "col-4",
      // type: "date",
      // dropdownOpts: {
      //   api_key: "p_getSalesRep",
      //   labelKey: "name",
      //   valueKey: "salesRepid",
      //   body: {
      //     modeId: true,
      //   },
      // },
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
      // type: "dropdown",
      // dropdownOpts: [
      //   { label: "Yes", value: "0" },
      //   { label: "No", value: "1" },
      // ],
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
      name: "workoder.add.workorderenddate",
      numeric: true,
      width: "col-4",
      type: "date",
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
      name: "workoder.add.appointmentrequired",
      numeric: true,
      width: "col-4",
      type: "checkbox",
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
      name: "workoder.add.servicedate",
      numeric: true,
      width: "col-4",
      type: "date",
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
      name: "workoder.add.readytobill",
      numeric: true,
      width: "col-4",
      type: "checkbox",
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
      name: "workoder.add.paymentterms",
      numeric: true,
      width: "col-4",
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
      name: "workoder.add.internalpo",
      numeric: true,
      width: "col-4",
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
      name: "workoder.add.estimateddisposalrevenue",
      numeric: true,
      width: "col-4",
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
      name: "workoder.add.estimatedtransportationrevenue",
      numeric: true,
      width: "col-4",
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
      name: "workoder.add.recurrance",
      numeric: true,
      width: "col-4",
      type: "checkbox",
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
      name: "workoder.add.tripticket",
      numeric: true,
      width: "col-4",
      // type: "checkbox",
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
      name: "workoder.add.transportationinstructions",
      numeric: true,
      width: "col-4",
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
  ],
  addManifestConfig: [
    {
      name: "workoder.add.workorder",
      numeric: true,
      width: "col-4",
      infoKey: "form.info.workOrderId",
    },
    {
      name: "workoder.add.statuscode",
      numeric: true,
      width: "col-4",
      // type: "dropdown",
      // dropdownOpts: {
      //   api_key: "p_getJobs",
      //   labelKey: "jobName",
      //   valueKey: "jobId",
      //   body: {
      //     isOutBoundOnly: true,
      //     searchValue: 0,
      //   },
      // },
    },
    {
      name: "workoder.add.workorderdate",
      numeric: true,
      width: "col-4",
      // type: "date",
      // dropdownOpts: {
      //   api_key: "p_getSalesRep",
      //   labelKey: "name",
      //   valueKey: "salesRepid",
      //   body: {
      //     modeId: true,
      //   },
      // },
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
      // type: "dropdown",
      // dropdownOpts: [
      //   { label: "Yes", value: "0" },
      //   { label: "No", value: "1" },
      // ],
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
      name: "workoder.add.workorderenddate",
      numeric: true,
      width: "col-4",
      type: "date",
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
      name: "workoder.add.appointmentrequired",
      numeric: true,
      width: "col-4",
      type: "checkbox",
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
      name: "workoder.add.servicedate",
      numeric: true,
      width: "col-4",
      type: "date",
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
      name: "workoder.add.readytobill",
      numeric: true,
      width: "col-4",
      type: "checkbox",
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
      name: "workoder.add.paymentterms",
      numeric: true,
      width: "col-4",
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
      name: "workoder.add.internalpo",
      numeric: true,
      width: "col-4",
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
      name: "workoder.add.estimateddisposalrevenue",
      numeric: true,
      width: "col-4",
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
      name: "workoder.add.estimatedtransportationrevenue",
      numeric: true,
      width: "col-4",
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
      name: "workoder.add.recurrance",
      numeric: true,
      width: "col-4",
      type: "checkbox",
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
      name: "workoder.add.tripticket",
      numeric: true,
      width: "col-4",
      // type: "checkbox",
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
      name: "workoder.add.transportationinstructions",
      numeric: true,
      width: "col-4",
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
  ],
}
