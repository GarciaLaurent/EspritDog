export const apiBaseUrl = "http://10.24.4.25:3333"; //ifconfig | grep "10" //165.22.207.144
export const apiYoutubeUrl =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&key=AIzaSyBLraNpalWE_CeqnSvBfdya4wr4AKSSLOI";

export const api = {
  URL: apiBaseUrl,
  URL_USER: apiBaseUrl + "/user",
  URL_LOGIN: apiBaseUrl + "/login",
  URL_UPDATE_PASSWORD: apiBaseUrl + "/change-password",
  URL_YOUTUBE_PLAYLIST_VIDEOS: apiYoutubeUrl,
};
