import React from "react";

const Home = () => {
  console.log($(".studentName").text(), $(".studentId").text());
  return (
    <>
      <div className="home">
        <p style={{ fontSize: "40px" }}>
          Keep all your memories here and show others
        </p>
      </div>
    </>
  );
};

export default Home;
