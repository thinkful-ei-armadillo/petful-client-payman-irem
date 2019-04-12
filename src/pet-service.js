import config from './config';

const PetApiService = {
  getCat() {
    return fetch(`${config.API_ENDPOINT}/cat`)
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => {
        return res;
      });
  },

  getNextCat() {
    return fetch(`${config.API_ENDPOINT}/cat/queue`)
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => {
        return res;
      });
  },

  adoptCat() {
    return fetch(`${config.API_ENDPOINT}/cat`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) throw new Error(res.status);
      })
      .catch(error => console.error({ error }));
  },

  getDog() {
    return fetch(`${config.API_ENDPOINT}/dog`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getNextDog() {
    return fetch(`${config.API_ENDPOINT}/dog/queue`)
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => {
        return res;
      });
  }

  /*adoptDog(){
        return fetch(`${config.API_ENDPOINT}/dog`, {
          method: 'DELETE'
        })
          .then(res =>{
            if(!res.ok)
            throw new Error(res.status);
          })
          .catch(error => console.error({error}))
      }*/
};

export default PetApiService;
