import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Looking good, Cass!</title>
        <meta property="og:title" content="Looking good, Cass!" />
        <meta property="og:image" content="/looking-good-cass.gif" />
      </Head>

      <main>
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
          color: #fff;
          font-size: 5rem;
          font-weight: bold;
          margin: 24px 0;
        }

        main {
          width: 100%;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 !important;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
