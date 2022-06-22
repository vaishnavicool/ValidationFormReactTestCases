import { Workbook } from "exceljs"
import { saveAs } from "file-saver"
import { dateForApi } from "shared"

let xlsHeader = (header) => {
  header.eachCell({ includeEmpty: true }, (cell) => {
    let thinB = { style: "thin" }
    cell.alignment = { wrapText: true }
    cell.font = {
      bold: true,
    }

    cell.border = {
      bottom: thinB,
      top: thinB,
      right: thinB,
      left: thinB,
    }

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "d9e8f4" },
    }
  })
}

let exportAsXls = async (title, data, keys) => {
  let filename = `${title} - ${dateForApi(new Date())}.xlsx`

  let workbook = new Workbook()
  let worksheet = workbook.addWorksheet("Sheet 1")

  worksheet.properties.defaultColWidth = 20

  let headers = Object.keys(data[0]).map((d) => keys[d])
  let row = worksheet.addRow(headers)
  xlsHeader(row)

  data.forEach((d) => {
    let row = Object.values(d)
    row.forEach((d, i) => {
      if (!d) row[i] = "-"
    })
    worksheet.addRow(row)
  })

  const buffer = await workbook.xlsx.writeBuffer()
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

  const blob = new Blob([buffer], { type: fileType })

  saveAs(blob, filename)
}

export default exportAsXls
