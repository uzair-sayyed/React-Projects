import { useEffect, useState } from "react";
import GithubCard from "./githubCard";
import "./githubProfileFinder.css";

export default function GithubProfileFinder() {
  const initialValue = "uzair-sayyed";
  const [inputVal, setInputVal] = useState("");
  const [username, setUsername] = useState(initialValue || "uzair-sayyed");
  const [profileData, setProfileData] = useState(null);

  async function fetchProfile() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (data) {
        setProfileData(data);
      }
    } catch (error) {}
  }

  function handleSubmit() {
    setUsername(inputVal);
    fetchProfile();
  }

  console.log(username);
  useEffect(() => {
    fetchProfile();
  }, [username]);

  return (
    <div className='github-finder-container'>
      <div className='github-actions'>
        <input
          type='text'
          placeholder='Enter correct username'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className='github-content'>
        {profileData && <GithubCard user={profileData} />}
      </div>
    </div>
  );
}
