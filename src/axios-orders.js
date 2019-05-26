import axios from "axios";

import { baseURL } from "./constants/firebaseEnv";

const instance = axios.create({
	baseURL,
});

export default instance;
