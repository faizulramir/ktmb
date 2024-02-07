import axios from '../axios';

const getStations = async (type:any) => {

    const data = await axios.get(`/data/${type}`);

    return data.data;
};

export default getStations;
