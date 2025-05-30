import { useState } from "react";
import Header from "../../components/header";
import styles from "./profile.module.css";
import ProfileDetails from "../../components/profileDetails";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  // Sample user data, in real app this would come from context or API
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    bio: "Experienced software developer with a passion for building scalable web applications."
  });

  const handleEdit = (updatedData) => {
    // Update user data with edited data
    setUser(updatedData);
  };

  const handleSignOut = () => {
    // Handle sign out logic here, e.g., clear auth tokens, redirect to login
    console.log("User signed out");
    localStorage.clear();
    navigate("/login", {
      replace: true
    });
  };

  return (
    <div className={styles.profilePage}>
      <Header />
      <ProfileDetails
        user={user}
        onEdit={handleEdit}
        onSignOut={handleSignOut}
      />
    </div>
  );
};

export default Profile;
