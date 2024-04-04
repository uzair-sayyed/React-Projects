export default function GithubCard({ user }) {
  console.log(user.avatar_url);
  console.log(user.created_at);
  const {
    created_at,
    followers,
    following,
    public_repos,
    name,
    login,
    avatar_url,
  } = user;

  const date = new Date(created_at);
  console.log(date);
  return (
    <div className='github-profile-card'>
      <img src={avatar_url} alt='' />
      <h2>Username: {login}</h2>
      <p>Repository: {public_repos}</p>
      <div className='follows-details'>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
      </div>
      <p>
        Date Joined:{" "}
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
