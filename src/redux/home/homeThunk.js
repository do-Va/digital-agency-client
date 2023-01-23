import axios from 'axios';
import customFetch from '../../utils/customFetch';

export const getAllItemsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const createItemThunk = async (object, thunkAPI) => {
  try {
    const resp = await customFetch.post(object.url, object.value);

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
