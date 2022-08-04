import { fetchData } from "./DataSlice";

var data = require("../data/data.json");

export const GetData = async (dispatch) => {
  dispatch(fetchData(data.Products));
};
