import axios from 'axios'

const api = axios.create({
    baseURL: 'https://accounts.spotify.com/authorize' 
})

export const getSpotifyToken = () => {
    try {
      const params = {
        client_id: '',
        response_type='code',
        redirect_url=''
      }
        const {data} = api.get('/',)
    } catch(error) {
        throw error
    }
}



// ?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09