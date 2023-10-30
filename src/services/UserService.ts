import axios from "./axios";
import { AxiosResponse } from 'axios';
import { User } from "@/interfaces/User";


export const getUser = async (email: string) : Promise<AxiosResponse<User>> => 
    await axios.get(`/users/${email}`);

export const createUser = async (user: User) => 
    await axios.post("/users", user);

