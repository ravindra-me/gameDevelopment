import React, { useState } from "react";
import Hero from "../components/Hero";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      style={{
        overflow: "scroll",
        width: "100%",
        height: "calc(100vh - 80px)",
      }}
    >
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          backgroundImage: `url(${
            isHovering ? "./images/game1.jpeg" : "./images/game2.jpeg"
            // "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          backgroundPositionY: "50%",
        }}
      >
        {/* <img
          src={
            isHovering
              ? "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              : "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          alt="your-image"
        /> */}
      </div>
    </div>
  );
}
