import axios from "./axios";
import { AxiosResponse } from 'axios';
import { Bookmark } from "@/interfaces/Bookmark";


export const getBookmarks = async () : Promise<AxiosResponse<Bookmark[]>> => 
    await axios.get("/bookmarks");

export const getBookmark = async (id: string) : Promise<AxiosResponse<Bookmark>> => 
    await axios.get("/bookmarks/" + id);

export const createBookmark = async (bookmark: Bookmark) => 
    await axios.post("/bookmarks", bookmark);

export const updateBookmark = async (id: string, bookmark: Bookmark) : Promise<AxiosResponse<Bookmark>> => 
    await axios.put("/bookmarks/" + id, bookmark);

export const deleteBookmark = async (id: string) : Promise<AxiosResponse<Bookmark>> => 
    await axios.delete("/bookmarks/" + id);
