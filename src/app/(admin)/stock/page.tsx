import Image from "next/image";
import React from "react";

type Props = {};

export default function StockPage({}: Props) {
  return (
    <div>
      <Image
        src="/static/images/cow_banner.jpg"
        // src="https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Web-Banner-AD-in-Photoshop-scaled.jpg"
        width={500}
        height={300}
        alt="Banner"
        // style={{ objectFit: "contain" }}
      />
      {/* <img src="static/images/cow_banner.jpg" height={300} alt="banner" /> */}
      <span className="tw-text-orange-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nam
        incidunt, ea repellat, voluptates minus aliquam hic maiores amet
        delectus aut dolorem excepturi beatae sit expedita fugiat iusto nobis
        atque.
      </span>
    </div>
  );
}
