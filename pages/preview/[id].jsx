import Link from "next/link";
import React, { useState } from "react";
import { useRef } from "react";
import { HiMail } from "react-icons/hi";
import { ImFolderDownload } from "react-icons/im";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/router";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import styles from "../../styles/preview-email.module.css";

const Email = () => {
  const pdfRef = useRef();
  const actionRef = useRef();
  const [view, setView] = useState(false);
  const HandlePrint = useReactToPrint({
    content: () => pdfRef.current,
  });
  const router = useRouter();
  const mode = router.query.mode;
  const branch = router.query.branchName;
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mode}>
        <h1>Mode:_{mode}</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.preview} ref={pdfRef}>
          Details will be display hereDetails will be display hereDetails will
          be display hereDetails will be display hereDetails will be display
          hereDetails will be display hereDetails will be display hereDetails
          will be display hereDetails will be display hereDetails will be
          display hereDetails will be display hereDetails will be display here
        </div>
      </div>
      <div className={styles.generate}>
        <button
          className={styles.generateBtn}
          onClick={() => {
            setView(true);
            actionRef.current.scrollIntoView();
          }}
        >
          Generate Letter
        </button>
      </div>
      <div ref={actionRef}>
        {view ? (
          <div className={styles.generatorWrapper}>
            <div className={styles.generator}>
              <h1>Letter Generated</h1>

              <button className={styles.emailBtn}>
                <HiMail className={styles.gomail} /> Email
              </button>
              <button className={styles.downloadBtn} onClick={HandlePrint}>
                <ImFolderDownload className={styles.imfolder} />
                Download
              </button>
            </div>
            <div className={styles.backButton}>
              <Link href={`/`}>
                <button className={styles.backHome}>Go Back Home</button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Email;
