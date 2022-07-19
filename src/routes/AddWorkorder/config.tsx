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
      width: "col-45",
    },
    {
      name: "plant_outbound",
      numeric: true,
      width: "col-45",
    },
    {
      name: "workorder",
      numeric: true,
      width: "col-45",
    },
    {
      name: "job",
      numeric: true,
      width: "col-45",
    },
    {
      name: "designated_facility",
      numeric: true,
      width: "col-45",
    },
    {
      name: "generator",
      numeric: true,
      width: "col-45",
      type: "search"    
    },
    {
      actionIcon:"ic_add.png",
      actionHandler:"addGenerator",
      width: "col-1",

    },
    {
      name: "transporter1",
      numeric: true,
      width: "col-45",
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
      width: "col-45",
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
      width: "col-45",
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
      width: "col-45",
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
      width: "col-45",
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
      width: "col-45",
      type: "search",
    },
    {
      name: "truck_gross",
      numeric: true,
      width: "col-45",
    },
    {
      name: "truck_tare",
      numeric: true,
      width: "col-45",
    },
    {
      name: "truck_net",
      numeric: true,
      width: "col-45",
    },
    {
      name: "3rd_party_ticket",
      numeric: true,
      width: "col-45",
    },
    {
      name: "container",
      numeric: true,
      width: "col-45",
    },
    {
      name: "manifeast_print_style",
      numeric: true,
      width: "col-45",
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
      name: "spacial_handing_instuctions",
      numeric: true,
      width: "col-11",
    },
    {
      name: "plant_instructions",
      numeric: true,
      width: "col-11",
    },
    {
      name: "comments",
      numeric: true,
      width: "col-11",
    },
    {
      name: "recive_date",
      numeric: true,
      width: "col-45",
      type: "date",
    },
    {
      name: "ship_date",
      numeric: true,
      width: "col-45",
      type:"date"
    },
    {
      name: "out_bound_revenue",
      numeric: true,
      width: "col-45",
      type:"number"
    },
    {
      name: "tsdf_receipt_date",
      numeric: true,
      width: "col-45",
      type:"date",      
    },
    {
      name: "bolck_14_note",
      numeric: true,
      width: "col-11",
    },
    {
      name: "outbound_po_number",
      numeric: true,
      width: "col-45",
    },
    {
      name: "bin",
      numeric: true,
      width: "col-45",
    },
    {
      name: "voided",
      numeric: true,
      width: "col-45",
      type:"checkbox",
    },
    {
      name: "waste_analysis_available",
      numeric: true,
      width: "col-45",
      type:"checkbox",
    },
    {
      name: "multi_line_format",
      numeric: true,
      width: "col-45",
      type:"checkbox",
    },
    {
      name: "additional_connected_epa_ids",
      numeric: true,
      width: "col-11",
    },
    {
      name: "additional_connected_manifests",
      numeric: true,
      width: "col-11",
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
      name: "mailing_information",
      numeric: true,
      width: "col-6",
    },
    {
      name: "alternate_generator_name",
      numeric: true,
      width: "col-6",
    },
    {
      name: "mailing_bill_name",
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
      name: "mailing_bill_to_country",
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
      name: "generator_address",
      numeric: true,
      width: "col-6",
    },

    {
      name: "addressline_1of_1",
      numeric: true,
      width: "col-12",
    },
    {
      name: "addressline_2of_2",
      numeric: true,
      width: "col-12",
    },
    {
      name: "addressline_3of_3",
      numeric: true,
      width: "col-12",
    },
    {
      name: "mailing_bill_to_address",
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
    {
      name: "generator_city",
      numeric: true,
      width: "col-6",
    },
    {
      name: "mailing_bill_to_city",
      numeric: true,
      width: "col-6",
    },
    {
      name: "generator_state",
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
      name: "mailing_bill_to_state",
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
      name: "generator_zip_code",
      numeric: true,
      width: "col-6",
      type:"number"
    },
    {
      name: "mailing_bill_to_zip",
      numeric: true,
      width: "col-6",
    },
    {
      name: "generator_country",
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
      name: "mailing_bill_to_country",
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
      name: "phone_number",
      numeric: true,
      width: "col-6",
      type: "number",
    },
    {
      name: "is_non_haz",
      numeric: true,
      width: "col-6",
      type: "checkbox"
    },
    {
      name: "us_epa_id",
      numeric: true,
      width: "col-6",
    },
    {
      name: "state_epa_id",
      numeric: true,
      width: "col-6",
    },
    {
      name: "fax_number",
      numeric: true,
      width: "col-6",
      type: "number",
    },
    {
      name: "pickup_directions",
      numeric: true,
      width: "col-12",
    },
    {
      name: "printed_menifest_er_contact",
      numeric: true,
      width: "col-6",
    },
    {
      name: "general_contact_email_address",
      numeric: true,
      width: "col-6",
    },
    {
      name: "generic_profile_suffix",
      numeric: true,
      width: "col-6",
    },
    {
      name: "notes",
      numeric: true,
      width: "col-12",
    },
    {
      name: "is_active",
      numeric: true,
      width: "col-6",
      type: "checkbox"
    },
    {
      name: "is_tax_exempt",
      numeric: true,
      width: "col-6",
      type: "checkbox"
    },
    {
      name: "disposal_restrictions",
      numeric: true,
      width: "col-6",
    },
  ],
}
