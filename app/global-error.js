"use client";

const GlobalError = ({ error, reset }) => {
  return (
    <html>
      <body>
        <h2>{error}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
