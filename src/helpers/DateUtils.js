// Helper Function to parse Date
export const formatISODateToDDMMYYYY = (isoDateString) => {
    const date = new Date(isoDateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // El mes es indexado desde 0, así que sumamos 1
    const year = date.getFullYear();
    return day + "-" + month + "-" + year;
  }
  