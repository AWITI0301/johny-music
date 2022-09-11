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