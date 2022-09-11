import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../Styles/LeftMenu.css";
// import MusicPlayer from "./MusicPlayer";
import { Songs } from "./Songs";

function AudioList() {
    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(songs[0].song);
    const [img, setImage] = useState(songs[0].imgSrc);
    const [auto, setAuto] = useState(false);
}

useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };