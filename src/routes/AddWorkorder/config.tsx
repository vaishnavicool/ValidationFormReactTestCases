export const pageConfig = {
  addWorkOrderConfig: [
    {
      name: "workOrderId",
      numeric: true,
      width: "col-4",
      infoKey:"form.info.workOrderId"
    },
    {
      name: "jobId",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getJobs",
        labelKey: "jobName",
        valueKey: "jobId",
        body: {
          isOutBoundOnly: true,
          searchValue: 0,
        },
      },
    },
    {
      name: "salesrepId",
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
      name: "generatorId",
      numeric: true,
      width: "col-4",
    },
    {
      name: "customerId",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: {
        api_key: "p_getCustomers",
        labelKey: "customerName",
        valueKey: "customerId",
        body: {
          optionalParam: "string",
          isShowAll: true,
        },
      },
    },
    { name: "profileNumber", width: "col-4" },
    { name: "startDate", type: "date", width: "col-4" },
    { name: "endDate", type: "date", width: "col-4" },
    {
      name: "readyToBill",
      numeric: true,
      width: "col-4",
      type: "dropdown",
      dropdownOpts: [
        { label: "Yes", value: "0" },
        { label: "No", value: "1" },
      ],
    },
    {
      name: "icId",
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
      name: "facilityId",
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
  ],
}
