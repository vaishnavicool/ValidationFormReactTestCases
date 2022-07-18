export const pageConfig = {
  addWorkOrderConfig: [
    {
      name: "work_order",
      numeric: true,
      width: "col-4",
      // infoKey: "info.workOrderId",
    },
    {
      name: "status_code",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workorder_date",
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
      name: "customer_sales_channel",
      numeric: true,
      width: "col-4",
    },
    {
      name: "workorder_type",
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
      name: "generator_requirements",
      numeric: true,
      width: "col-4",
    },
    {
      name: "schedule_type",
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
      name: "sales_rep",
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
      name: "inside_sales_rep",
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
      name: "workorder_start_date",
      numeric: true,
      width: "col-4",
      type: "date",
    },
    {
      name: "workorder_end_date",
      numeric: true,
      width: "col-4",
      type: "date",
    },
    {
      name: "appointment_required",
      numeric: true,
      width: "col-4",
      type: "checkbox",
    },
    {
      name: "service_date",
      numeric: true,
      width: "col-4",
      type: "date",
    },
    {
      name: "ready_to_bill",
      numeric: true,
      width: "col-4",
      type: "checkbox",
    },
    {
      name: "payment_terms",
      numeric: true,
      width: "col-4",
    },
    {
      name: "gov_contract",
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
      name: "customer_po",
      numeric: true,
      width: "col-4",
    },
    {
      name: "internal_po",
      numeric: true,
      width: "col-4",
    },
    {
      name: "estimated_disposal_revenue",
      numeric: true,
      width: "col-4",
    },
    {
      name: "estimated_transportation_revenue",
      numeric: true,
      width: "col-4",
    },
    {
      name: "oracle_location",
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
      name: "market_driver",
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
      name: "job_description",
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
      name: "trip_ticket",
      numeric: true,
      width: "col-4",
    },
    {
      name: "transportation_instructions",
      numeric: true,
      width: "col-4",
    },
  ],
  ////// addManifestConfig /////////

  addManifestConfig: [
    {
      name: "manifest_tracking",
      numeric: true,
      width: "col-6",
    },
    {
      name: "plant_outbound",
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
      name: "designated_facility",
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
      name: "equipment_type",
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
      name: "truck_gross",
      numeric: true,
      width: "col-6",
    },
    {
<<<<<<< HEAD
      name: "truck_tace",
=======
      name: "trucktare",
>>>>>>> 08ae2fd253fdf4079ef4ed0ad91527dca8e2ebbc
      numeric: true,
      width: "col-6",
    },
    {
      name: "truck_net",
      numeric: true,
      width: "col-6",
    },
    {
      name: "3rd_party_ticket",
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
      name: "generator_name",
      numeric: true,
      width: "col-6",
    },
    {
      name: "alternate_generator_name",
      numeric: true,
      width: "col-6",
    },
    {
      name: "site_country",
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
      name: "generator_city",
      numeric: true,
      width: "col-6",
    },
    {
      name: "address_line_1of1",
      numeric: true,
      width: "col-12",
    },
    {
      name: "address_line_2of2",
      numeric: true,
      width: "col-12",
      type: "search",
    },
    {
      name: "address_line3of3",
      numeric: true,
      width: "col-12",
    },
    {
      name: "mailingbill_to_name",
      numeric: true,
      width: "col-12",
    },
    {
      name: "mailingbill_to_country",
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
      name: "address_line1",
      numeric: true,
      width: "col-12",
    },
    {
      name: "address_line2",
      numeric: true,
      width: "col-12",
      type: "search",
    },
    {
      name: "address_line3",
      numeric: true,
      width: "col-12",
    },
  ],
}
