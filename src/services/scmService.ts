import axiosInstance from "../lib/axios";
import { smcData } from "../schemas/smcData.schema";

export const fetchSmcData = async (pressNumber: number) => {
  try {
    const { data } = await axiosInstance.get(
      `/tags-prod/pressFestoon/${pressNumber}`,
    );
    const result = smcData.safeParse(data);
    return result.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
