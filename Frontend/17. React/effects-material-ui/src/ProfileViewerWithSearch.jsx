import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users";

function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("");  // Start empty, user inputs manually
  const [profile, setProfile] = useState({ data: null, isLoading: false }); // Not loading initially

  useEffect(() => {
    if (!username) return; // Don't fetch if username is empty

    setProfile({ data: null, isLoading: true }); // Show loading state

    // Use promise syntax instead of async/await
    axios.get(`${BASE_URL}/${username}`)
      .then(userResult => {
        setProfile({ data: userResult.data, isLoading: false }); // Set data and loading false
      })
      .catch(() => {
        setProfile({ data: null, isLoading: false }); // On error, clear data & loading false
      });

  }, [username]);

  function search(newUsername) {
    setUsername(newUsername); // Update username to trigger fetch
  }

  if (profile.isLoading) return <i>Loading....</i>;

  // Render only if profile data is present
  return (
    <div>
      <ProfileSearchForm search={search} />
      {profile.data && (
        <>
          <b>{profile.data.name}</b>
          <img src={profile.data.avatar_url} alt={profile.data.name} />
        </>
      )}
    </div>
  );
}

export default ProfileViewerWithSearch;
