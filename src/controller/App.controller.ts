import Controller from "sap/ui/core/mvc/Controller";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "../libs/axios";


const headers: Readonly<Record<string, string | boolean>> = {
   Accept: "application/json",
   "Content-Type": "application/json; charset=utf-8",
   "Access-Control-Allow-Credentials": true,
   "X-Requested-With": "XMLHttpRequest",
 };
/**
 * @namespace be.wl.example.controller
 */

 export default class App extends Controller{
     public onInit():void{
      const http = axios.create({
         baseURL: "/odata/",
         headers,
         withCredentials: true,
       });
     }
 }