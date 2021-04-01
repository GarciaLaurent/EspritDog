import axios from "axios";
import { api } from "src/config/api";

// POST
export const apiCreateOrder = (pharmacyOrder) => new Promise((resolve, reject) => {
  axios
    .post(api.URL_ORDERS, {
      user: pharmacyOrder?.user || "",
      pharmacy: pharmacyOrder?.pharmacyItem?.name || '',
      items: pharmacyOrder?.items || [],
      photo: pharmacyOrder?.photo || null
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

// GET
export const apiGetOrder = (id) => new Promise((resolve, reject) => {
  axios
    .get(api.URL_ORDERS + '/' + id)
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
