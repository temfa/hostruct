// # app/page.js

"use client";

import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

// Import plugins
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { CompassPlugin } from "@photo-sphere-viewer/compass-plugin";

// Import plugins stylesheets
import "@photo-sphere-viewer/markers-plugin/index.css";
import "@photo-sphere-viewer/compass-plugin/index.css";

export default function Test() {
  const imgSrc = "https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg";
  const plugins = [
    [
      MarkersPlugin,
      {
        markers: [
          {
            id: "image",
            position: { yaw: "0.33deg", pitch: "0.1deg" },
            image: "vercel.svg",
            anchor: "bottom center",
            size: { width: 128, height: 128 },
            tooltip: "Marker Tooltip Test",
          },
        ],
      },
    ],
    [
      CompassPlugin,
      {
        hotspots: [{ yaw: "0deg" }, { yaw: "90deg" }, { yaw: "180deg" }, { yaw: "270deg" }],
      },
    ],
  ];

  return (
    <div>
      <ReactPhotoSphereViewer src={imgSrc} height={"60vh"} width={"100%"} plugins={plugins}></ReactPhotoSphereViewer>
    </div>
  );
}
