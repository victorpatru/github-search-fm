const githubReducer = (state, action) => {
  const joinedDate = (date) => {
    const newDate = new Date(date);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      newDate
    );
    return `Joined ${newDate.getDate()} ${month} ${newDate.getFullYear()}`;
  };
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        name: action.payload.name,
        avatar: action.payload.avatar_url,
        profileLink: action.payload.html_url,
        userLogin: action.payload.login,
        joined: joinedDate(action.payload.created_at),
        bio: action.payload.bio || "This user has no bio",
        publicRepos: action.payload.public_repos,
        followers: action.payload.followers,
        following: action.payload.following,
        location: action.payload.location || "Not Available",
        blog: action.payload.blog || "Not Available",
        twitterAccount: action.payload.twitter_username || "Not Available",
        currentCompany: action.payload.company || "Not Available",
      };
    default:
      return state;
  }
};

export default githubReducer;
