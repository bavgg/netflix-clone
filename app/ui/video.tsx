import { extractUrl } from "api/data";
import React from "react";

async function Video({id, width, height} : { id: string, width: string, height: string}) {
  const url = await extractUrl(id);

  return (
    <iframe
      width={width}
      height={height}
      src={`${url}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default Video;
