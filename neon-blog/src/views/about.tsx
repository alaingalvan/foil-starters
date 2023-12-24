export const About = ({ mobileQuery: onMobile = false }) => {
  return (
    <div>
      <div
        style={{
          maxWidth: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: onMobile ? "column" : "row",
          minHeight: "62.8vh",
        }}
      >
        About...
      </div>
      <section
        style={{
          padding: "2em",
          textAlign: "center",
          color: "rgba(255,255,255, 0.3)",
        }}
      >
        <h3>💗</h3>
        <p style={{ paddingTop: "1em" }}>Thanks for Reading!</p>
      </section>
    </div>
  );
};
