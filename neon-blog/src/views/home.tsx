export const Home = ({ mobileQuery: onMobile = false }) => {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "100vw",
          display: "flex",
          flexDirection: onMobile ? "column" : "row",
          minHeight: "62.8vh",
        }}
      >
        <h1>Neon Starter App</h1>
      </div>
      <section
        style={{
          padding: "2em",
          textAlign: "center",
          color: "rgba(255,255,255, 0.3)",
        }}
      >
        <h3>💗</h3>
        <p style={{ paddingTop: "1em" }}>Thanks for Reading! ✨</p>
      </section>
    </div>
  );
};
