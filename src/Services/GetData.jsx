import axios from "axios"

const api=axios.create({
    baseURL:"https://www.omdbapi.com"
})

export const GetData=()=>{
    return api.get("/?i=tt3896198&apikey=1541eb25&s=Titanic&page=1");
}