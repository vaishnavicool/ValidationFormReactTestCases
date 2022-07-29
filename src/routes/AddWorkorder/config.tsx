export const pageConfig = {
  addWorkOrderConfig: {
    // defaultState: {
    //   frequency_in_days: "0",
    //   internal_coordinator_id: "0",
    //   designated_revenue_facility_id: "0",
    //   recurrance_stop_datetime: "2022-07-14T09:18:35.954Z",
    //   program_id_string: "",
    //   app_window_start_time: "2022-07-14T09:18:35.954Z",
    //   app_window_end_time: "2022-07-14T09:18:35.954Z",
    //   service_type_id: "0",
    //   createManifestFlag: true,
    //   availableCredit: "1",
    //   onCreditHold: "0",
    //   creditCheckStatus: "0",

    //   searchType: 1,
    //   profileNumber: "0",
    //   dbLoginId: 804,
    //   returnMessage: "string",
    // },

    form: [
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
        name: "customerID",
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
        infoKey: "form.customer.tooltip",
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
      { name: "generator_id", type: "search", width: "col-4" },
      {
        name: "generator_requirements",
        numeric: true,
        width: "col-4",
      },
      {
        name: "schedule_type_id",
        width: "col-4",
        type: "dropdown",
        numeric: true,
        dropdownOpts: {
          api_key: "g_getSchedule_type",
          labelKey: "scheduleTypeName",
          valueKey: "scheduleTypeID",
          body: {
            optionalParam: "1",
          },
        },
      },
      {
        name: "salesrep_id",
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
        name: "insideSalesRepID",
        numeric: true,
        width: "col-4",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getInside_sales_rep",
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
          api_key: "p_getCSR",
          labelKey: "name",
          valueKey: "id",
          body: {
            optionalParam: "0",
          },
        },
      },
      {
        name: "jobID",
        numeric: true,
        width: "col-4",
        type: "dropdown",
        dropdownOpts: {
          api_key: "p_getJobs",
          labelKey: "jobName",
          valueKey: "jobId",
          body: {
            isOutBoundOnly: true,
            isShowAll: true,
          },
        },
      },
      {
        name: "start_date",
        numeric: true,
        width: "col-4",
        type: "date",
      },
      {
        name: "end_date",
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
        name: "ic_billed",
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
        name: "contract_id",
        numeric: true,
        width: "col-4",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getGov_contract",
          labelKey: "contactName",
          valueKey: "contractNumber",
        },
      },
      {
        name: "do_number",
        numeric: true,
        width: "col-4",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getDo",
          labelKey: "name",
          valueKey: "id",
        },
      },
      {
        name: "customer_po",
        numeric: true,
        width: "col-4",
      },
      {
        name: "internal_po_number",
        numeric: true,
        width: "col-4",
      },
      {
        name: "estimated_revenue",
        numeric: true,
        width: "col-4",
      },
      {
        name: "estimated_trans_revenue",
        numeric: true,
        width: "col-4",
      },
      {
        name: "oracleLocationCode",
        numeric: true,
        width: "col-4",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getOracle_location",
          labelKey: "description",
          valueKey: "oracleLocationId",
        },
      },
      {
        name: "marketDriverID",
        numeric: true,
        width: "col-4",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getMarket_driver",
          labelKey: "name",
          valueKey: "value",
          body: {
            optionalParam: "0",
          },
        },
      },
      {
        name: "description",
        numeric: true,
        width: "col-4",
      },
      {
        name: "is_recurrance_parent",
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
  },
  ////// addManifestConfig /////////

  addManifestConfig: {
    form: [
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
        type: "search",
      },
      {
        actionIcon: "ic_add.png",
        actionHandler: "addGenerator",
        width: "col-1",
        className: "add-icon",
      },
      {
        name: "transporter1",
        numeric: true,
        width: "col-45",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getTransporters",
          labelKey: "transportName",
          valueKey: "transportId",
        },
      },
      {
        name: "transporter2",
        numeric: true,
        width: "col-45",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getTransporters",
          labelKey: "transportName",
          valueKey: "transportId",
        },
      },
      {
        name: "transporter3",
        width: "col-45",
        numeric: true,
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getTransporters",
          labelKey: "transportName",
          valueKey: "transportId",
        },
      },
      {
        name: "transporter4",
        numeric: true,
        width: "col-45",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getTransporters",
          labelKey: "transportName",
          valueKey: "transportId",
        },
      },
      {
        name: "equipment_type",
        numeric: true,
        width: "col-45",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getTransporters",
          labelKey: "transportName",
          valueKey: "transportId",
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
          api_key: "g_getManifeast_print_style",
          labelKey: "manifestStyle",
          valueKey: "styleId",
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
        type: "date",
      },
      {
        name: "out_bound_revenue",
        numeric: true,
        width: "col-45",
        type: "number",
      },
      {
        name: "tsdf_receipt_date",
        numeric: true,
        width: "col-45",
        type: "date",
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
        type: "checkbox",
      },
      {
        name: "waste_analysis_available",
        numeric: true,
        width: "col-45",
        type: "checkbox",
      },
      {
        name: "multi_line_format",
        numeric: true,
        width: "col-45",
        type: "checkbox",
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
  },

  //// addNewGeneratorConfig ////

  addNewGeneratorConfig: {
    form: [
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
          api_key: "g_getSite_country_mailing_bill_to_country",
          labelKey: "countryName",
          valueKey: "countryID",
        },
      },
      {
        name: "mailing_bill_to_country",
        numeric: true,
        width: "col-6",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getSite_country_mailing_bill_to_country",
          labelKey: "countryName",
          valueKey: "countryID",
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
          api_key: "g_getGenerator_state_mailing_bill_to_state",
          labelKey: "stateName",
          valueKey: "stateID",
        },
      },
      {
        name: "mailing_bill_to_state",
        width: "col-6",
        numeric: true,
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getGenerator_state_mailing_bill_to_state",
          labelKey: "stateName",
          valueKey: "stateID",
        },
      },
      {
        name: "generator_zip_code",
        numeric: true,
        width: "col-6",
        type: "number",
      },
      {
        name: "mailing_bill_to_zip",
        numeric: true,
        width: "col-6",
      },
      {
        name: "generator_county",
        numeric: true,
        width: "col-6",
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getGenerator_county_mailing_bill_to_county",
          labelKey: "countyID",
          valueKey: "countyName",
        },
      },
      {
        name: "mailing_bill_to_county",
        width: "col-6",
        numeric: true,
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getGenerator_county_mailing_bill_to_county",
          labelKey: "countyID",
          valueKey: "countyName",
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
        type: "checkbox",
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
        type: "checkbox",
      },
      {
        name: "is_tax_exempt",
        numeric: true,
        width: "col-6",
        type: "checkbox",
      },
      {
        name: "disposal_restrictions",
        numeric: true,
        width: "col-6",
      },
    ],
  },

  documentTypeConfig: {
    form: [
      {
        name: "document_type",
        numeric: true,
        type: "dropdown",
        dropdownOpts: {
          api_key: "g_getDocument_Type",
          labelKey: "documentTypeDescription",
          valueKey: "id",
        },
      },
    ],
  },
}
