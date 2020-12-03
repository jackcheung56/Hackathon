
import ApiClient from './ApiClient'


export const __CreateUser = async (formData) => {
    try {
      const response = await ApiClient.post(`/user/create`, formData)
      console.log('USER', response.data)
      return response.data
    } catch (error) {
      throw error
    }
  }
  





