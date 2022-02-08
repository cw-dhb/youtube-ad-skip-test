import styles from "../styles/Home.module.css";

export default function Home() {
  if (typeof window !== "undefined") {
    const tag = window.document.createElement("script");
    tag.src = "https://www.youtube.com/player_api";

    const firstScriptTag = window.document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;

    window.onYouTubePlayerAPIReady = function () {
      player = new YT.Player("player", {
        events: {
          onReady: function (event) {
            document
              .getElementById("yt-play-btn")
              .addEventListener("click", () => {
                event.target.stopVideo();
              });
          },
        },
      });
    };
  }

  return (
    <div className={styles.container}>
      <h1> Iframe embeded YouTube player 광고 생략 테스트</h1>

      <h2> iframe의 src에 영상 링크를 설정</h2>
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/bU17pNHSaNg?enablejsapi=1"
        frameBorder="0"
      ></iframe>

      <br></br>

      <button id="yt-play-btn">API사용 영상 멈추기</button>
    </div>
  );
}
