import { useEffect, useState } from "react";
import styles from "./modal.module.css";
import { sendDataToApply } from "../../services/applyjobService";
import InputItem from "../inputItem";
import Modal from ".";

const ApplyModal = ({ onClose, id, title }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: null,
    about: "",
    yoe: ""
  });
  const [error, setError] = useState("");

  const onInput = (e) => {
    const { value, id, files } = e.target;

    setData((curr) => {
      let inputValue = value;
      if (id === "resume" && files && files.length) {
        inputValue = files[0];
      }
      return { ...curr, [id]: inputValue };
    });
  };

  const onSubmit = async () => {
    setError("");
    const { name, email } = data;

    let dataToSend = {};

    if (name && name.trim().length > 3) {
      dataToSend.name = name;
    } else {
      setError("Enter valid name");
      return;
    }

    if (email && email.trim()) {
      const isValidEmail =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/.test(email);
      if (isValidEmail) {
        dataToSend.email = email;
      } else {
        setError("Enter valid email");
        return;
      }
    } else {
      setError("Enter valid email");
      return;
    }
    try {
      await sendDataToApply(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("Component has mounted");

    return () => {
      //cleanup function
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Error is updated");
    //activity
  }, [error]);

  return (
    <Modal heading={`Apply Job - ${title}`} onClose={onClose}>
      <div className={styles.applyFormContainer}>
        <form className={styles.applyForm}>
          <InputItem
            id="name"
            value={data.name}
            onChange={onInput}
            minLength={"3"}
            placeholder={"Enter your name"}
            label="Name"
            type="text"
            required
          />

          <InputItem
            id="email"
            value={data.email}
            onChange={onInput}
            placeholder="Enter your email"
            label="Email"
            type="email"
            required
          />

          <InputItem
            id="phone"
            value={data.phone}
            onChange={onInput}
            maxLength={10}
            minLength={10}
            placeholder="Enter your phone"
            label="Phone"
            type="tel"
            required
          />

          <InputItem
            id="linkedin"
            value={data.linkedin}
            onChange={onInput}
            placeholder="Enter your linkedin"
            label="Linkedin"
            type="url"
            required
          />

          <InputItem
            id="yoe"
            value={data.yoe}
            onChange={onInput}
            max={15}
            min={0}
            placeholder="Years of expirence"
            label="YoE"
            type="number"
          />

          <InputItem
            id="resume"
            onChange={onInput}
            accept="application/pdf"
            placeholder="Enter your resume"
            label="Resume"
            type="file"
          />
          <div className={styles.inputTextArea}>
            <label htmlFor="about">About yourserlf</label>
            <textarea
              id="about"
              value={data.about}
              maxLength={200}
              onChange={onInput}
              placeholder="Telly us about yourself in 200 words"
              rows={4}
            ></textarea>
          </div>
        </form>
      </div>
      <div className={styles.applyActionFooter}>
        <span className={styles.error}>{error}</span>{" "}
        <button onClick={onSubmit}>Submit</button>
      </div>
    </Modal>
  );
};
export default ApplyModal;
