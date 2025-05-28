import { useEffect, useState } from "react";
import styles from "./sale.module.css";

const saleEnd = Date.now() + 86400000;
function msToHMS(ms) {
  // 1- Convert to seconds:
  var seconds = ms / 1000;

  // 2- Extract hours:
  var hours = parseInt(seconds / 3600); // 3600 seconds in 1 hour
  seconds = parseInt(seconds % 3600); // extract the remaining seconds after extracting hours

  // 3- Extract minutes:
  var minutes = parseInt(seconds / 60); // 60 seconds in 1 minute

  // 4- Keep only seconds not extracted to minutes:
  seconds = parseInt(seconds % 60);

  // 5 - Format so it shows a leading zero if needed
  let hoursStr = ("00" + hours).slice(-2);
  let minutesStr = ("00" + minutes).slice(-2);
  let secondsStr = ("00" + seconds).slice(-2);

  return hoursStr + ":" + minutesStr + ":" + secondsStr;
}
let timerId;

const SaleBanner = () => {
  const [time, settime] = useState(0);

  const remainingTime = saleEnd - Date.now();

  useEffect(() => {
    // after first mount
    timerId = setInterval(() => {
      console.log("Timer");
      settime((t) => t + 1);
    }, 1000);

    return () => {
      //cleanup function
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (remainingTime < 0) {
      clearInterval(timerId);
    }
  }, [remainingTime]);

  return (
    <div className={styles.saleBanner}>
      <p>Sale is Live till tomorrow 11:59PM</p>
      {remainingTime > 0 && (
        <p className={styles.timeLeft}>Time Left: {msToHMS(remainingTime)}</p>
      )}
      {remainingTime < 0 && <p className={styles.timeLeft}>Sale is Over</p>}
    </div>
  );
};
export default SaleBanner;
