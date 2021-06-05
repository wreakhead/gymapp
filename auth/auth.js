import { loginEndPoint } from "@utils/routePaths";
import axios from "axios";

export const loginUser = async (props) => {
  console.log(props);
  const { data } = await axios.post(`${loginEndPoint}signin`,props);
  console.log(data);
};
