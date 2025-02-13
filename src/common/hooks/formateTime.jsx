import moment from "moment";

const formateTime = (value) => {
  return moment(value).format("MMMM Do YYYY, h:mm:ss a");
};

export default formateTime;
