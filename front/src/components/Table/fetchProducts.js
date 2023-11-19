import {getProducts} from '../../assets/api'

export const FetchProducts = async () => {
    const response = await getProducts();
    return response.data;
  };