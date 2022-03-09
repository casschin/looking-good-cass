import Head from "next/head";

const VIDEO_IDS = [
  "aapeTWpUsfw",
  "VTdnGrbczYg",
  "q2tEZN93gvo",
  "RDq2tEZN93gvo",
  "y8pryE95mAIZ",
  "I-ZXdXTiiGI",
  "_3d6-3BjY0g",
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Looking good, Cass!</title>
        <meta property="og:title" content="Looking good, Cass!" />
        <meta property="og:image" content="https://looking-good-cass.vercel.app/feeling-good-cass-small.gif" />
      </Head>

      <main>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${
            VIDEO_IDS[Math.floor(Math.random() * VIDEO_IDS.length)]
          }?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          <marquee className="title">Looking good, Cass!</marquee>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: url("/looking-good-cass.gif");
          background-size: 100% 100%;
          display: flex;
          align-items: flex-end;
        }

        marquee {
          color: #ffca62;
          font-size: 6rem;
          font-weight: bold;
          margin: 24px 0;
        }

        iframe {
          visibility: hidden;
        }

        main {
          width: 100%;
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
}
