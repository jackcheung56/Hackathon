import ApiClient from './ApiClient'

export const __GetNetflux = async () => {
    try{
        const response = await ApiClient.get('/')
        return response.data
    } catch (error) {
        throw error
    }
}