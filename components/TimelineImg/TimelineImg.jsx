import React from "react";
import styles from "./TimelineImg.module.css";
import Image from "next/image";
import ImageContainer from "../ImageContainer/ImageContainer";

export default function TimelineImg() {
  return (
    <ImageContainer>
      <Image
        src="/timeline.png"
        alt="Icon to Timeline page"
        className={styles.timelineImg}
        fill
        sizes="(min-width: 768px) 100vw"
      />
    </ImageContainer>
  );
}
