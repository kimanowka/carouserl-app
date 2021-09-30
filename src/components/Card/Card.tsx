import { useRef, forwardRef, useImperativeHandle } from "react";
import React from "react";
import styles from "./card.module.css";

interface CardProps {
  img: string;
  title: string;
  currentImage: number;
  length: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
}
const Card = forwardRef(
  (
    { img, setCurrentImage, currentImage, length }: CardProps,
    ref
  ): JSX.Element => {
    const cardRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      handleNext: () => {
        if (currentImage === length - 1) {
          setCurrentImage(0);
        } else {
          setCurrentImage((prev) => prev + 1);
        }
      },
      handlePrev: () => {
        if (currentImage === 0) {
          setCurrentImage(length - 1);
        } else {
          setCurrentImage((prev) => prev - 1);
        }
      },
    }));

    return (
      <div ref={cardRef}>
        <img src={img} alt="slider" className={styles.card} />
      </div>
    );
  }
);

export default Card;
