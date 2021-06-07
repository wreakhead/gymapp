import { loginEndPoint } from "@utils/routePaths";
import axios from "axios";

export const loginUser = async (props) => {
  try {
    const { data } = await axios.post(`${loginEndPoint}signin`, props);
    localStorage.setItem("gymlogin", JSON.stringify(data));
    
  } catch (error) {
    let statusError = error.response.status;
    if (statusError == 400) return "password invalid";
    if (statusError == 404) return "user do not exist";
    else return "internal server error";
  }
};

export const signUp = async (props) =>{
  try{
    const { data } = await axios.post(`${loginEndPoint}signup`, props);
    return "All done"
  }catch(error){
    let statusError = error.response.status;
    if (statusError == 400) return "user already exists!";
    
    else return "internal server error";
  }
}

export const checkLoggedIn = () => {
  let StorageData = JSON.parse(localStorage.getItem("gymlogin"));
};
