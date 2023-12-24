import { Link, useLocation } from "react-router-dom";

function mulberry32(a: number) {
  return function () {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const NotFound = (_props) => {
  let { pathname = "" } = useLocation();
  let seed = 0;
  for (let i = 0; i < pathname.length; i++) {
    let charCode = pathname.charCodeAt(i);
    seed += charCode;
  }
  let rng = mulberry32(seed);
  let i = Math.floor(rng() * stuff.length);
  let phrase = stuff[i];
  return (
    <div
      style={{
        ...styles.root,
      }}
    >
      <h1>{phrase}</h1>
      <p>Doesn't look like that page exists.</p>
      <Link className="btn" style={styles.link} to="/">
        Go Home
      </Link>
    </div>
  );
};

const styles: any = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  link: {
    padding: "1em",
    margin: ".5em",
    backgroundColor: "#4ea0e8",
    borderColor: "#4ea0e8",
  },
};

const stuff = ["🍩 D'oh!", "🥊 404'd!", "🦆 Honk!"];
