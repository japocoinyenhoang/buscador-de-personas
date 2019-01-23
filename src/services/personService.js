const ENDPOINT='https://randomuser.me/api/?results=50';

const getApiData=()=> fetch(ENDPOINT).then(response=>response.json());

export {getApiData};
