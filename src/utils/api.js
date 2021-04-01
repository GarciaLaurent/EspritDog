import axios from "axios";
import { api } from "src/config/api";

export const apiCreateOrder = new Promise((resolve, reject) => {
  axios
    .post(api.URL_ORDERS, {
      user: pharmacyOrder?.name || "",
      pharmacy: pharmacyOrder?.pharmacyItem?.name || '',
      items: pharmacyOrder?.meds || [],
      photo: pharmacyOrder?.image || null
    })
    .then(res => {
      if (res?.data) {
        resolve(res?.data);
      }

      reject();
    })
    .catch(err => {
      reject();
    });
});
