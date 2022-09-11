const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Bella Ciao",
      artist: "El Profesor",
      song: "https://youtu.be/l5TMjYj-8MQ",
      imgSrc:
        "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
    },
    {
      id: 2,
      favourite: false,
      songName: "Beast",
      artist: "Anirudh Ravichander",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbeast.mp3?alt=media&token=ebf29a01-079b-44eb-969a-57ee66a15ee8",
      imgSrc:
        "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
    },
    {
      id: 3,
      favourite: false,
      songName: "Joker - Rock and Roll",
      artist: "Hildur Guðnadóttir",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fjoker.mp3?alt=media&token=9e79751a-726d-4359-8a26-116db925f6ff",
      imgSrc:
        "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
    },
    {
      id: 4,
      favourite: false,
      songName: "I Am A Peaky Blinder",
      artist: "Otnicka",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fpeaky-blinder.mp3?alt=media&token=2ddb5cfb-f4e0-4604-b77c-a7f63894d3ec",
      imgSrc:
        "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
    },
    {
      id: 5,
      favourite: false,
      songName: "Naanga Vera Maari",
      artist: "Yuvan Shankar Raja",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fvalimai.mp3?alt=media&token=97c769ab-e2fb-4562-90aa-18c73b320bde",
      imgSrc:
        "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
    },
    {
      id: 6,
      songName: "Your Woman",
      artist: "White Town",
      song: "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fwhitetown.jpg?alt=media&token=25e1ec0c-24ec-4a11-a7a7-e55ec1fc50cf",
    },
    {
      id: 7,
      favourite: false,
      songName: "Charlie",
      artist: "Gopi Sundar",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
      imgSrc:
        "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
    },
    {
      id: 8,
      favourite: false,
      songName: "Mask Off",
      artist: "Future",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a",
      imgSrc:
        "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
    },
    {
      id: 9,
      favourite: false,
      songName: "Hey Mama",
      artist: "David Guetta",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
      imgSrc:
        "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
    },
    {
      id: 10,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
      imgSrc:
        "https://media.istockphoto.com/photos/mixed-race-woman-singing-and-playing-guitar-picture-id1125877063?k=20&m=1125877063&s=612x612&w=0&h=EqzTceUex2vhPu3m_fAJ7X-kks5wl4BMr9FkxxVvtWU=",
    },
  ];
  
  export { Songs };