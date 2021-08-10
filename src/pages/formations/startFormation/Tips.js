import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import axios from "axios";
import _ from "lodash";
import Spinner from "react-native-loading-spinner-overlay";
import { useDispatch } from "react-redux";
import { videoData } from "src/features/data/videoDataSlice.js";
import { useSelector } from "react-redux";
import { apiGetPlayListVideos } from "src/utils/api";

const Tips = (props) => {
  const [videoId, setVideoId] = useState();
  const [visible, setVisible] = useState();
  const [playlist, setPlaylist] = useState();
  const [page, setPage] = useState();

  const showSpinner = () => {
    setVisible(true);
  };

  const hideSpinner = () => {
    setVisible(false);
  };
  useEffect(() => {
    apiGetPlayListVideos("PLoiqcNddD1WUgHRcgFLujf5pEWre1uIR0").then((items) => {
      showSpinner();
      setPlaylist(items?.videos);
      setVideoId(items?.videos?.[0]?.videoId);
      setPage(items?.pagination?.nextPageToken);
    });
  }, []);

  const fillFlatList = () => {
    apiGetPlayListVideos("PLoiqcNddD1WUgHRcgFLujf5pEWre1uIR0", page).then(
      (items) => {
        setPage(items?.pagination?.nextPageToken);
        setPlaylist((oldPlaylist) => {
          return oldPlaylist.concat(items?.videos);
        });
      }
    );
  };

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setVideoId(item?.videoId);
      }}
    >
      <View style={styles.item}>
        <View style={styles.containerImage}>
          <Image source={{ uri: item.thumbnails }} style={[styles.image]} />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{item?.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerVideoPlayer}>
        <Spinner
          visible={visible}
          textContent={"Chargement..."}
          textStyle={{ color: "#FFFFFF" }}
          size="small"
        />
        <YoutubePlayer
          height={200}
          style={styles.video}
          videoId={videoId}
          onReady={hideSpinner}
        />
      </View>
      <View style={styles.containerVideoList}>
        <FlatList
          data={playlist}
          renderItem={renderItem}
          horizontal
          keyExtractor={(item) => item.id}
          style={styles.flatList}
          pagingEnabled={true}
          onEndReached={() => {
            fillFlatList();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  containerVideoPlayer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  containerVideoList: {
    flex: 1,
    backgroundColor: "rgba(245, 166, 35, 0.14)",
  },
  containerTitle: {
    height: "20%",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    flex: 1,
    marginHorizontal: 5,
    width: 300,
    height: "100%",
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
  },
  flatList: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Tips;
