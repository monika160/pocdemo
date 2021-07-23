import axios from 'axios'


class API {

    async fetchPostRquest(url, req){
        return axios.post(url,req, {
            headers: {
              "Accept": 'application/json',
              "Content-Type": "application/json",
            }
          }).then((response)=>{
            console.log('response === ', response);
            return response;
          }).catch((error) => {
            console.log('fetchPostRquest == ', error);
        })
    }

    async fetchGetRequest(url){
          return  axios.get(url, {
              headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json",
              }
          }).then((response) => {
              console.log('response === ', response);
              return response
          }).catch((error) => {
              console.log('fetchGetRequest == ', error);
          })
      }
}

export default new API()