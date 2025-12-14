import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const authAPI = axios.create({
  baseURL: 'http://localhost:3000/usr',
})

authAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error) {
      let d = error.response.data
      toast.error(d.message)
      // toast.warning(`value : ${d.details[0].value}`)
    }
    return Promise.reject(error);
  }
)

//^ authAPI.interceptors.response.use(first-augument(working function) , second-augument(error handling))
authAPI.interceptors.request.use(
  (config) => {
    const TK = localStorage.getItem('tk')
    if (TK) {
      config.headers.Authorization = `Bearer ${TK}`
    }
    return config
  }
  ,
  (error) => {
    return Promise.reject(error);
  }
)


export const apiRegister = (data) => {
  console.log(data);

  return authAPI.post(`/athen`, data)
}
export const apiLogin = async (data) => {
  console.log(data);

  return authAPI.post(`/login`, data)
}


export const apisME = async (data) => {
  // console.log(data);
  // const newMethod = {
  //   headers: {
  //     'Authorization': `Bearer ${token}`
  //   }
  // }
  // return authAPI.get(`/me`,{
  //   headers: {
  //     'Authorization': `Bearer ${data}`
  //   }})
  return authAPI.get('/me')
}

export const myDetails = async (data) => {
  return authAPI.post('/userDetails', data)
}

export const myDetailsUpdate = async (data) => {
  return authAPI.patch('/userDetails', data)
}

export const myAllDetails = async (userId) => {
  console.log(userId);
  
  return authAPI.get(`/userDetails/${userId}`);
}

const prodApi = axios.create({
  baseURL: 'http://localhost:3000/itm',
})

export const prodInCART = async (id, prod) => {
  console.log(prod);
  
  return prodApi.post(`/AdditeminCART/${id}`, prod)
}

export const userAllinCART = async (id, prod) => {  
  return prodApi.get(`/AdditeminCART/${id}`, prod)
}

export const deleteFromCART = async (id) => {  
  return prodApi.delete(`/AdditeminCART/${id}`)
}