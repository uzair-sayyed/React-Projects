import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

export default function AutoSearchComplete() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredUsersData, setFilteredUsersData] = useState(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const usersData = await response.json();
      console.log(usersData);
      if (usersData && usersData.users && usersData.users.length > 0) {
        setLoading(false);
        setUsers(usersData.users.map((user) => user.firstName));
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);

    if (query.length > 0) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsersData(filteredData);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='auto-search-complete-container'>
      <div className='search-field'>
        <input
          type='text'
          placeholder='Search here...'
          value={searchParams}
          onChange={handleChange}
        />
      </div>
      <div className='results'>
        {showSuggestions && <Suggestion data={filteredUsersData} />}
      </div>
    </div>
  );
}
