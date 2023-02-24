import React, { useState } from "react";
import Hero from "../components/Hero";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      style={{ height: "1000px", width: "1000px", overflow: "scroll" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        height="1000"
        width="1000"
        src={
          isHovering
            ? "https://giphy.com/embed/v6ulYwF2plC1pMMSpe"
            : "https://www.bing.com/images/search?view=detailV2&ccid=qmdjtO93&id=E0E477B8E8E3A8EA430A8EC3B6D75DF674749283&thid=OIP.qmdjtO93dlutx6OjkKdysgHaHa&mediaurl=https%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_286633.png&exph=980&expw=980&q=png+image+url&simid=608028384433867848&FORM=IRPRST&ck=8E69CA0501FB7D4ED9B07DB54AD2B413&selectedIndex=3&ajaxhist=0&ajaxserp=0"
        }
        alt="your-image"
      />
    </div>
  );
}
