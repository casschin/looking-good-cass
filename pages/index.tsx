import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";

// const VIDEO_IDS: string[] = [
//   "VTdnGrbczYg",
//   "q2tEZN93gvo",
//   "I-ZXdXTiiGI",
//   "_3d6-3BjY0g",
// ];

const Home: NextPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>Looking good, Cass!</title>
        <meta property="og:title" content="Looking good, Cass!" />
        <meta
          property="og:image"
          content="https://looking-good-cass.vercel.app/feeling-good-cass-small.gif"
        />
      </Head>

      <main>
        <div className="video-container">
          {!showVideo && (
            <button onClick={() => setShowVideo(true)} className="play-button">
              Enable chill mode
            </button>
          )}
          {showVideo && (
            <iframe
              src={`https://www.youtube.com/embed/_3d6-3BjY0g?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="visible"
            ></iframe>
          )}
        </div>
        <div>
          <marquee className="title">Looking good, Cass!</marquee>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: url("/looking-good-cass.gif");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: flex-end;
          position: relative;
          overflow: hidden;
        }

        marquee {
          color: #ffca62;
          font-size: 6rem;
          font-weight: bold;
          margin: 24px 0;
          position: relative;
          z-index: 2;
        }

        .video-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .play-button {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
          padding: 16px 32px;
          font-size: 1.5rem;
          background-color: #ffca62;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-family: myFirstFont;
          transition: transform 0.2s;
          pointer-events: auto;
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        iframe {
          visibility: hidden;
          position: absolute;
        }

        iframe.visible {
          visibility: visible;
          animation: bounce 30s linear infinite;
          pointer-events: auto;
          will-change: transform;
          position: absolute;
          top: 20px;
          left: 20px;
          transform-origin: center center;
          width: 33vw;
          height: calc(33vw * 0.75); /* maintain 4:3 aspect ratio */
          min-width: 280px; /* minimum size */
          min-height: 210px;
        }

        main {
          width: 100%;
          position: relative;
        }

        @keyframes bounce {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          12.5% {
            transform: translate(calc(67vw - 20px), calc(60vh - 20px))
              rotate(720deg);
          }
          25% {
            transform: translate(0, calc(60vh - 20px)) rotate(360deg);
          }
          37.5% {
            transform: translate(calc(67vw - 20px), 0) rotate(-180deg);
          }
          50% {
            transform: translate(calc(33.5vw - 10px), calc(30vh - 10px))
              rotate(0deg);
          }
          62.5% {
            transform: translate(0, calc(60vh - 20px)) rotate(540deg);
          }
          75% {
            transform: translate(calc(67vw - 20px), calc(60vh - 20px))
              rotate(180deg);
          }
          87.5% {
            transform: translate(calc(67vw - 20px), 0) rotate(-360deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: myFirstFont;
          src: url(/SeaweedScript-Regular.ttf);
        }
        html,
        body {
          padding: 0;
          margin: 0 !important;
          font-family: myFirstFont, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
