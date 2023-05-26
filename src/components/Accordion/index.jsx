import { useRef, useState } from "react";
import styles from "./accordion.module.scss";
import { ArrowDown } from "../Icons";

const Accordion = ({ value, className }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const heightRef = useRef(null);

  const toggle = (id) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className={className}>
      {value.map(({ id, title, content }) => (
        <div
          key={id}
          onClick={() => toggle(id)}
          className={
            openIndex === id
              ? styles.accordion + " " + styles.active
              : styles.accordion
          }
        >
          <div className={styles.accordion__hero}>
            <p>{title}</p>
            <div className={styles.icon}>
              <ArrowDown className={openIndex === id ? styles.rotate : ""} />
            </div>
          </div>

          <div
            ref={heightRef}
            style={{
              height:
                openIndex === id
                  ? `fit-content`
                  : "0px",
            }}
            className={styles.accordion__content}
          >
            <p>{content} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
