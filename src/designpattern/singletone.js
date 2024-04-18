const VideoPlayer = (function () {
  let video = null;
  let instance = null;
  function videoControl() {
    return {
      setVideo() {
        video = "video";
      },
      getVideo() {
        return video;
      },
    };
  }

  return {
    x: 1,
    get: function () {
      if (!instance) {
        instance = videoControl();
      }
      return instance;
    },
  };
})();

const video1 = VideoPlayer.get();
const video2 = VideoPlayer.get();

console.log(video1 === video2);
