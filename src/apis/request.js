import axios from "axios";

const request = axios.create({
  /*baseURL: ""*/
})


request.interceptors.response.use(async response =>{
  return response;

}, async error => {
  if(error.response.status===422){

    return "end";
  }
  if(error.response.status===403){
    return "end"
  }
})


request.interceptors.request.use(request=>{
  return request;
})


export default request
