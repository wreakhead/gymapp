import {
  loginEndPoint,
  workoutEndPoint,
  foodapi,
  dietEndPoint,
} from "@utils/routePaths";
import axios from "axios";
import { useRouter } from "next/router";
import Router from "next/router";

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("gymlogin"))?.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return config;
};

export const loginUser = async (props) => {
  try {
    const { data } = await axios.post(`${loginEndPoint}signin`, props);
    localStorage.setItem("gymlogin", JSON.stringify(data));
    return "welcome!";
  } catch (error) {
    let statusError = error.response.status;
    if (statusError == 400) return "password invalid";
    if (statusError == 404) return "user do not exist";
    else return "internal server error";
  }
};

export const signUp = async (props) => {
  try {
    const { data } = await axios.post(`${loginEndPoint}signup`, props);

    return "All done";
  } catch (error) {
    let statusError = error.response.status;
    if (statusError == 400) return "user already exists!";
    else return "internal server error";
  }
};

export const checkLoggedIn = () => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (localStorage.getItem("gymlogin")) return true;
    else {
      router.push("/signin");
    }
  }
};
export const localStorageCheck = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("gymlogin")) return true;
    else return false;
  }
};

export const getlocalStorage = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("gymlogin"))
      return JSON.parse(localStorage.getItem("gymlogin"));
    else return null;
  }
};

export const deleteLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("gymlogin");
    Router.reload(window.location.pathname);
  }
};

export const addWorkoutData = async (props) => {
  try {
    const config = getToken();
    const { data } = await axios.post(
      `${workoutEndPoint}addworkout`,
      props,
      config
    );

    return "added";
  } catch (error) {
    const statusError = error.response.status;
    return statusError;
  }
};

export const delWorkoutData = async (props) => {
  try {
    const config = getToken();
    const { data } = await axios.delete(
      `${workoutEndPoint}deleteworkout/${props._id}`,

      config
    );

    return "deleted";
  } catch (error) {
    const statusError = error.response.status;
    return statusError;
  }
};

export const getWorkoutData = async (path) => {
  try {
    const config = getToken();
    const { data } = await axios.get(`${workoutEndPoint}${path}`, config);

    return data;
  } catch (error) {
    return error.response.status;
  }
};
export const getFoodData = async (path) => {
  try {
    const { data } = await axios.get(`${foodapi}${path}`);
    return data;
  } catch (error) {
    return error.response.status;
  }
};

export const updateFoodData = async (props) => {
  try {
    const { data } = await axios.post(`${foodapi}updatefood`, props);

    return "added";
  } catch (error) {
    const statusError = error.response.status;
    return statusError;
  }
};
export const addDietData = async (props) => {
  try {
    const config = getToken();
    const { data } = await axios.post(
      `${dietEndPoint}add${props.type}`,
      props,
      config
    );

    return "added";
  } catch (error) {
    const statusError = error.response.status;
    return statusError;
  }
};

export const getFoodLog = async (path) => {
  try {
    const config = getToken();
    const { data } = await axios.get(`${dietEndPoint}get${path}log`, config);

    return data;
  } catch (error) {
    return error.response.status;
  }
};
export const getIntake = async (path) => {
  try {
    const config = getToken();
    const { data } = await axios.get(`${dietEndPoint}${path}`, config);

    return data;
  } catch (error) {
    return error.response.status;
  }
};

export const delDietData = async (props) => {
  try {
    const config = getToken();
    const { data } = await axios.delete(
      `${dietEndPoint}delete${props.type}/${props._id}`,

      config
    );

    return "deleted";
  } catch (error) {
    const statusError = error.response.status;
    return statusError;
  }
};
