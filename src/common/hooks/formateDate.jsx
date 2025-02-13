import moment from "moment";

const formateDate = (value) => {
  return moment(value).format("DD-MMM-YYYY");
};

export default formateDate;
