import axios from "axios";

import { GET_SERVICES, DELETE_SERVICE, ADD_SERVICE } from "./types";

export const getServices = () => (dispatch) => {
  axios
    .get("/api/services/")
    .then((res) => {
      dispatch({
        type: GET_SERVICES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteService = (id) => (dispatch) => {
  axios
    .delete(`/api/services/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_SERVICE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addService = (service) => (dispatch) => {
  axios
    .post("/api/services/", service)
    .then((res) => {
      dispatch({
        type: ADD_SERVICE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
