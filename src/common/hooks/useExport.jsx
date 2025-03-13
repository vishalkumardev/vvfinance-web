import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const useExportToExcel = (data, fileName) => {
  // Convert data to a worksheet
  const ws = XLSX.utils.json_to_sheet(data);

  // Create a new workbook and append the worksheet
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Write the workbook and convert it to a blob
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const dataBlob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Save the file
  saveAs(dataBlob, `${fileName}.xlsx`);
};

export default useExportToExcel;
