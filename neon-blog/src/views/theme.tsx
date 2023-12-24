import { useState, useRef } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "react-router-dom";

const pre = ({ children = null, copy, title }) => {
  let [state, setState] = useState({ copied: false });
  let ref = useRef<HTMLDivElement>();
  const onClick = (_e) => {
    if (ref.current) {
      let codeDiv = ref.current;
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(codeDiv);
      selection.removeAllRanges();
      selection.addRange(range);
      let str = selection.toString();
      selection.removeAllRanges();
      navigator.clipboard.writeText(str);
    }
    setState({ copied: true });
    setTimeout(() => {
      setState({ copied: false });
    }, 3000);
  };
  return (
    <pre className="hljs-ln-code" style={{ position: "relative" }}>
      <p
        style={{
          lineHeight: "2em",
          padding: "0 0.5em",
          fontWeight: 400,
          opacity: 0.75,
        }}
      >
        {title}
      </p>
      <a
        style={{
          position: "absolute",
          right: ".5em",
          top: ".25em",
          padding: ".5em",
          opacity: 0.75,
          display: copy ? "block" : "none",
          height: "2em",
          width: "auto",
        }}
        className={
          state.copied ? "animation-bounce" : "animation-fade-from-top"
        }
        onClick={onClick}
      >
        {state.copied ? "☑️" : "📄"}
      </a>
      <div ref={ref}>{children}</div>
    </pre>
  );
};

const components = {
  pre,
};

/**
 * Wrapper component that manages the mobile bar, sidebar, etc.
 */
export const Theme = ({ children }) => {
  return (
    <div style={styles.root}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "4em",
          padding: "1em",
        }}
      >
        Neon Starter |{" "}
        <div>
          <Link style={{ padding: "0 .5em" }} to="/">
            Home
          </Link>
          •
          <Link style={{ padding: "0 .5em" }} to="/about">
            About
          </Link>
        </div>
      </div>
      <div
        style={{
          height: "calc(100vh - 6em)",
          width: "100vw",
        }}
      >
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </div>
  );
};

const styles = {
  root: {
    width: "100vw",
  },
};
