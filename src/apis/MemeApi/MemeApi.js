import request from "../request";


export const getMemeApi=async ()=>{
   const data=await request.get('https://api.imgflip.com/get_memes');
   return data.data;
}/*
.then(data=> data.data.data.memes)*/