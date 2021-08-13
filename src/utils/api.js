import axios from "axios";
import { api } from "src/config/api";
import _ from "lodash";

// POST
export const apiCreateOrder = (pharmacyOrder) =>
  new Promise((resolve, reject) => {
    axios
      .post(api.URL_ORDERS, {
        user: pharmacyOrder?.user || "",
        pharmacy: pharmacyOrder?.pharmacyItem?.name || "",
        items: pharmacyOrder?.items || [],
        photo: pharmacyOrder?.photo || null,
      })
      .then((res) => {
        if (res?.data) {
          resolve(res?.data);
        }

        reject();
      })
      .catch((err) => {
        reject();
      });
  });

export const apiCreateUser = (user) =>
  new Promise((resolve, reject) => {
    axios
      .post(api.URL_USER, {
        ...user,
      })
      .then((res) => {
        if (res?.data) {
          resolve(res?.data);
        }
        reject();
      })
      .catch((err) => {
        reject();
      });
  });

export const apiLogIn = (user) =>
  new Promise((resolve, reject) => {
    axios
      .post(api.URL_LOGIN, {
        ...user,
      })
      .then((res) => {
        if (res?.data) {
          resolve(res?.data);
        }
        reject();
      })
      .catch((err) => {
        reject();
      });
  });

// GET
export const apiGetUser = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(api.URL_ORDERS + "/" + id)
      .then((res) => {
        if (res?.data) {
          resolve(res?.data);
        }

        reject();
      })
      .catch((err) => {
        reject();
      });
  });

export const apiChangeUserPassword = (userNewPassword) =>
  new Promise((resolve, reject) => {
    axios
      .post(api.URL_UPDATE_PASSWORD, {
        ...userNewPassword,
      })
      .then((res) => {
        if (res?.data) {
          resolve(res?.data);
        }
        reject();
      })
      .catch((err) => {
        reject();
      });
  });

export const apiDeleteUser = (userId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(api.URL_USER, {
        ...userId,
      })
      .then((res) => {
        if (res?.data) {
          resolve(res?.data);
        }
        reject();
      })
      .catch((err) => {
        reject();
      });
  });

export const apiGetPlayListVideos = (playListId, nextPageToken) =>
  new Promise((resolve, reject) => {
    let URL = api.URL_YOUTUBE_PLAYLIST_VIDEOS;
    let videos = [];
    let pagination = {};
    let finalData = {};

    if (nextPageToken) {
      URL += "&playlistId=" + playListId + "&pageToken=" + nextPageToken;
    } else {
      URL += "&playlistId=" + playListId;
    }

    axios
      .get(URL)
      .then((res) => {
        if (res?.data) {
          pagination = {
            nextPageToken: res?.data?.nextPageToken,
            totalCount: res?.data?.pageInfo?.totalResults,
          };

          let items = res?.data?.items;

          _.each(items, function (item, key) {
            if (
              item?.snippet?.title != "Private video" &&
              videos.indexOf(item?.id) === -1
            ) {
              videos.push({
                id: item?.id,
                videoId: item?.snippet?.resourceId?.videoId,
                thumbnails: item?.snippet?.thumbnails?.high?.url,
                title: item?.snippet?.title,
              });
            }
          });

          finalData = {
            videos: videos,
            pagination: pagination,
          };
          resolve(finalData);
        }
        reject();
      })
      .catch((err) => {
        reject();
      });
  });
