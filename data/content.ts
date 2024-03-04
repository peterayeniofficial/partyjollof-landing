export interface ContentData {
  name: string;
  streaming_on?: string[];
  cover: string;
  trailer: string;
  released_for: string;
  playing_at?: string;
  genres?: string[];
}

export const streaming: ContentData[] = [
  {
    name: "JAPA",
    streaming_on: ["Prime Video"],
    cover: "/japa.jpg",
    trailer: "06vdFsDQP64",
    released_for: "Streaming",
  },
  {
    name: "The Black Book",
    streaming_on: ["Netflix"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kn28W24slBLyGr8ZIZnxNE5YZrY.jpg",
    trailer: "E_f5GAMFfTM",
    released_for: "Streaming",
  },
  {
    name: "Breath of Life",
    streaming_on: ["Prime Video"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1hku2QAzbElm3TrYoZEgRqQHMQ5.jpg",
    trailer: "YFEvKSc3wiU",
    released_for: "Streaming",
  },

  {
    name: "War: Wrath and Revenge",
    streaming_on: ["Netflix"],
    cover:
      "https://www.nollywoodreinvented.com/wp-content/uploads/2023/08/war-series-790x988.jpeg",
    trailer: "UqxKAcLIhbI",
    released_for: "Streaming",
  },

  {
    name: "Queen of Katwe",
    streaming_on: ["Disney"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wVOnqlrs0L9jdIsNp5IdSCq6EiD.jpg",
    trailer: "z4l3-_yub5A",
    released_for: "Streaming",
  },
  {
    name: "Queen Sono",
    streaming_on: ["Netflix"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zCq56uFGe16RrrEl9D9lKjzdAnE.jpg",
    trailer: "1zgxDFEifyI",
    released_for: "Streaming",
  },
  {
    name: "Gangs of Lagos",
    streaming_on: ["Prime Video"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nGwFsB6EXUCr21wzPgtP5juZPSv.jpg",
    trailer: "TBLNplnMVzA",
    released_for: "Streaming",
  },
];

export const cinema: ContentData[] = [
  {
    name: "A Tribe Called Judah",
    genres: ["Comedy"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/44CUFoxVdnCixPbH5BaIFBtKkC9.jpg",
    trailer: "pEUZVfeCU94",
    released_for: "Cinema",
  },
  {
    name: "Mami Wata",
    genres: ["Drama, Fantasy, Thriller"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qjH3vzXvp8U4osDgnUIQlRkRPvx.jpg",
    trailer: "2Tktsd2-dKA",
    released_for: "Cinema",
  },
  {
    name: "Shimoni",
    genres: ["Drama"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nwmpsLqq6fPvrLV13epLkgLHP8N.jpg",
    trailer: "-SvVJSzCftA",
    released_for: "Cinema",
  },
  {
    name: "Goodbye Julia",
    genres: ["Drama"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2EacmpjNGnaM1VfAswIO0bOQ2vV.jpg",
    trailer: "Xh8sauNG4AE",
    released_for: "Cinema",
  },
  {
    name: "Bravo, Burkina!",
    genres: ["Drama"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/p3LdYMpLkdujz7HmTlOeaEj7mUK.jpg",
    trailer: "v0Y1bENaw_8",
    released_for: "Cinema",
  },
  {
    name: "The Spectre of Boko Haram",
    genres: ["Documentary"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rONcnDi3OBWoKFawkqNo2x87hro.jpg",
    trailer: "E5y4e61TSMk",
    released_for: "Cinema",
  },
  {
    name: "Kanaani",
    genres: ["Drama"],
    cover:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kiBBKu91FswvT5iSIdhA5gxxZwM.jpg",
    trailer: "4q5g3_MrRlo",
    released_for: "Cinema",
  },
  {
    name: "This Is Lagos",
    genres: ["Drama"],
    cover:
      "https://www.nollywoodreinvented.com/wp-content/uploads/2023/12/1701512941342-790x985.jpg",
    trailer: "uJbIsfomJ08",
    released_for: "Cinema",
  },
];
