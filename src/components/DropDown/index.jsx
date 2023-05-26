import { useRouter } from "next/router";
import { ArrowDown } from "../Icons";
import styles from "./dropdown.module.scss";
import { useState } from "react";
import Link from "next/link";

const DropDown = ({ className }) => {
  const [lang, setLang] = useState(false);
  const { locale } = useRouter();

  return (
    <div className={styles.dropdown + " " + className}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setLang(!lang);
        }}
      >
        {locale === "uz" ? (
          <div className={styles.chooseLang}>
            UZB <ArrowDown />
          </div>
        ) : (
          <div className={styles.chooseLang}>
            РУС <ArrowDown />
          </div>
        )}
      </div>
      {lang && (
        <ul onClick={(e) => e.stopPropagation()}>
          <li
            onClick={() => {
              setLang(false);
            }}
            className={locale === "uz" ? styles.active : ""}
          >
            <Link href={"/"} locale="uz">
              UZB
            </Link>
          </li>
          <li
            onClick={() => {
              setLang(false);
            }}
            className={locale === "ru" ? styles.active : ""}
          >
            <Link href={"/"} locale="ru">
              РУС
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
