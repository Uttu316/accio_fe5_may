import { useState } from "react";
import styles from "./profileDetails.module.css";

const ProfileDetails = ({ user, onEdit, onSignOut }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    bio: user.bio || ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    onEdit(formData);
  };

  return (
    <div className={styles.profileDetails}>
      {!editMode ? (
        <>
          <h2 className={styles.name}>{formData.name}</h2>
          <p className={styles.email}>{formData.email}</p>
          <p className={styles.phone}>{formData.phone}</p>
          <p className={styles.bio}>{formData.bio}</p>
          <div className={styles.buttons}>
            <button className={styles.editButton} onClick={handleEditClick}>
              Edit Profile
            </button>
            <button className={styles.signOutButton} onClick={onSignOut}>
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.formGroup}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Bio:</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange} />
          </div>
          <div className={styles.buttons}>
            <button className={styles.saveButton} onClick={handleSaveClick}>
              Save
            </button>
            <button
              className={styles.cancelButton}
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileDetails;
