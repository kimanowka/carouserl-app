import { useRef, useState } from "react";
import { state } from "./state";
import Card from "./components/Card/Card";
import styles from "./app.module.css";

export default function App(): JSX.Element {
  const cardRef = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleNextButtonClick = () => {
    cardRef.current.handleNext();
  };
  const handlePrevButtonClick = () => {
    cardRef.current.handlePrev();
  };

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <Card
        img={state[currentImage].img}
        title={state[currentImage].title}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        length={state.length}
        ref={cardRef}
      />
      <div>
        <button type="button" onClick={handlePrevButtonClick}>
          prev
        </button>
        <button type="button" onClick={handleNextButtonClick}>
          next
        </button>
      </div>
    </div>
  );
}
