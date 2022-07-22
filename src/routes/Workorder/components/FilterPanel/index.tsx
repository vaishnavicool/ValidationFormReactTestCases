import Field from "shared/Field"
import "../style.scss"

function FilterPanel(props: any) {
  let {
    updateFilters,
    filters,
    allDropdownOpts,
    pageConfig,
    modalType,
    pageOpts,
  } = props

  let dataConfig = pageConfig[modalType]
  return (
    <div>
      <>
        <div className="filter-body">
          <div className="inputs row">
            {pageOpts.form.map((d: any, index) => {
              return (
                <Field
                  key={index}
                  name={d.name}
                  {...{ update:updateFilters, filters, allDropdownOpts, ...d }}
                />
              )
            })}
          </div>
        </div>
        <div className="button-container py-3">
          <input
            type="button"
            onClick={dataConfig?.cancelAction}
            className=" btn-reset"
            value={dataConfig?.cancelButtonTitle}
          />
          <input
            type="button"
            onClick={dataConfig?.submitAction}
            className=" btn-apply"
            value={dataConfig?.submitButtonTitle}
          />
        </div>
      </>
    </div>
  )
}
export default FilterPanel
