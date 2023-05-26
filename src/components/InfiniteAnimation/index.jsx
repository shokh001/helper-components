import { clients } from "@/mock/data";
import styles from "./infiniteanimation.module.scss";

const InfiniteAnimation = ({ className }) => {
  return (
    <div className={styles.infiniteAnimation + " " + className}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__inner + " " + styles.animate}>
          {clients.map((i) => {
            return (
              <div key={i.id} className={styles.item}>
                {i.icon}
              </div>
            );
          })}
          {clients.map((i) => {
            return (
              <div key={i.id} className={styles.item}>
                {i.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteAnimation;
