import { Routes, Route, redirect } from "react-router-dom";
import { Theme, Home, About, NotFound } from "./views/index.ts";

// HTML Page
export default function App({ router: Router }) {
  let meta = {
    siteName: "Foil.io",
    link: "foil.io",
    permalink: "/",
    title: "Foil Neon Starter",
    description: "The Neon blog starter for Foil.",
    cover: "/assets/website-screenshot.jpg",
    keywords: ["foil", "neon", "starter"],
    authors: [{ name: "Alain Galvan" }],
    color: "#151b1f",
    twitter: "<YourTwitter>",
    facebook: {
      appId: "<YourAppID>",
    },
  };
  let author = meta.authors[0].name;
  let coverImage = "https://" + meta.link + meta.cover;
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>{meta.title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={meta.description} />
        <meta
          name="keywords"
          content={meta.keywords.reduce(
            (prev, cur, i) => prev + (i !== 0 ? ", " : "") + cur,
            ""
          )}
        />
        <link
          rel="canonical"
          itemProp="url"
          href={`http://localhost:4017${meta.permalink}`}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={meta.title}
          href="http://localhost:4017/rss"
        />
        <meta itemProp="image" content={meta.cover} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={"@" + meta.twitter} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={coverImage} />
        {/* Facebook */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={coverImage} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:image" content={coverImage} />
        <meta property="fb:app_id" content={meta.facebook.appId} />
        {/* Icons */}
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/manifest.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="/assets/build/main.css" />
      </head>
      <body>
        <Router>
          <Theme>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Theme>
        </Router>
        <script
          type="systemjs-importmap"
          src="/assets/build/importmap.json"
        ></script>
        <script type="text/javascript" src="/assets/build/system.js"></script>
      </body>
    </html>
  );
}
