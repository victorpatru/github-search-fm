import { useState, useEffect } from "react";

function Card({ fetchObject }) {
  const [name, setName] = useState("The Octocat");
  const [avatar, setAvatar] = useState(
    "https://avatars.githubusercontent.com/u/583231?v=4"
  );
  const [profileLink, setProfileLink] = useState("https://github.com/octocat");
  const [userLogin, setUserLogin] = useState("octocat");
  const [joined, setJoined] = useState("2008-01-14T04:33:35Z");
  const [bio, setBio] = useState("This profile has no bio");
  const [publicRepos, setPublicRepos] = useState(8);
  const [followers, setFollowers] = useState(3938);
  const [following, setFollowing] = useState(9);
  const [location, setLocation] = useState("San Francisco");
  const [blog, setBlog] = useState("https://github.com/blog");
  const [twitterAccount, setTwitterAcount] = useState("Not Available");
  const [currentCompany, setCurrentCompany] = useState("github");

  // Create function that turns this "2022-03-29T12:13:01Z" into this "Joined 29 March 2022"

  useEffect(() => {
    if (fetchObject !== null) {
      setName(fetchObject.data.name || fetchObject.data.login);
      setAvatar(fetchObject.data.avatar_url);
      setProfileLink(fetchObject.data.url);
      setUserLogin(fetchObject.data.login);
      setJoined(fetchObject.data.created_at);
      setBio(fetchObject.data.bio || "This profile has no bio");
      setPublicRepos(fetchObject.data.public_repos);
      setFollowers(fetchObject.data.followers);
      setFollowing(fetchObject.data.following);
      setLocation(fetchObject.data.location || "Not Available");
      setBlog(fetchObject.data.blog || "Not Available");
      setTwitterAcount(
        `@${fetchObject.data.twitter_username}` || "Not Available"
      );
      setCurrentCompany(fetchObject.data.company || "Not Available");
    }
  }, [fetchObject]);

  return (
    <section className="max-w-5xl bg-white rounded-xl mt-5 px-8 py-12 shadow-lg dark:bg-darkLighterDarkBlue desktop:px-24 desktop:py-14 tablet:px-20">
      <section className="flex flex-row items-center space-x-6 tablet:space-x-12 desktop:space-x-8">
        {/* Github Image */}
        <a href={profileLink} target="_blank">
          <img
            src={avatar}
            alt="User avatar"
            className="rounded-full w-20 h-20 tablet:w-[117px] tablet:h-[117px] desktop:mt-5"
          />
        </a>
        {/* Github Information */}
        <div className="flex flex-col space-y-0.5 tablet:space-y-1.5 desktop:justify-between desktop:flex-row desktop:space-x-40">
          <div>
            <a href={profileLink} target="_blank">
              <h2 className="text-16  dark:text-white tablet:text-26">
                {name}
              </h2>
            </a>
            <a href={profileLink} target="_blank">
              <h3 className="text-blue text-13 tablet:text-16">@{userLogin}</h3>
            </a>
          </div>
          <h4 className="text-13 text-gray dark:text-white tablet:text-15">
            Joined 25 Jan 2011
          </h4>
        </div>
      </section>
      {/* Github Bio */}
      <p
        className="text-grayishBlue mt-10 leading-25 dark:text-white tablet:text-15 desktop:ml-[150px] desktop:-mt-4"
        style={
          bio === "This profile has no bio"
            ? {
                opacity: 0.75,
              }
            : {
                opacity: 1,
              }
        }
      >
        {bio}
      </p>
      {/* Github Social Information */}
      <section className="bg-lightGrayishBlue dark:bg-darkDarkBlue flex justify-center space-x-6 py-4 px-5 rounded-xl mt-6 tablet:space-x-12 desktop:ml-[150px]">
        <a
          href={`https://github.com/${userLogin}?tab=repositories`}
          target="_blank"
          className="flex flex-col justify-center items-center tablet:space-y-1"
        >
          <p className="text-grayishBlue text-13 dark:text-white">Repos</p>
          <p className="font-bold text-16 dark:text-white tablet:text-22">
            {publicRepos}
          </p>
        </a>
        <a
          href={`https://github.com/${userLogin}?tab=followers`}
          target="_blank"
          className="flex flex-col justify-center items-center tablet:space-y-1"
        >
          <p className="text-grayishBlue text-13 dark:text-white">Followers</p>
          <p className="font-bold text-16 dark:text-white tablet:text-22">
            {followers}
          </p>
        </a>
        <a
          href={`https://github.com/${userLogin}?tab=following`}
          target="_blank"
          className="flex flex-col justify-center items-center text-left tablet:space-y-1"
        >
          <p className="text-grayishBlue text-13 dark:text-white ">Following</p>
          <p className="font-bold text-16 dark:text-white tablet:text-22">
            {following}
          </p>
        </a>
      </section>

      {/* Github Social Links */}
      <section className="grid grid-cols-1 mt-7 tablet:grid-cols-2 tablet:space-y-0 gap-4 desktop:ml-[150px]">
        {/* Location */}
        <section
          className="flex flex-row items-center space-x-4 order-1"
          style={
            location === "Not Available"
              ? {
                  opacity: 0.5,
                  cursor: "not-allowed",
                }
              : {
                  opacity: 1,
                }
          }
        >
          <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
              fill="#4b6a9b"
              className="dark:fill-white"
            />
          </svg>
          <p className="text-grayishBlue dark:text-white">{location}</p>
        </section>

        {/* Website */}
        <section
          className="flex flex-row items-center space-x-4 order-2"
          style={
            blog === "Not Available"
              ? {
                  opacity: 0.5,
                  cursor: "not-allowed",
                }
              : {
                  opacity: 1,
                }
          }
        >
          <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#4b6a9b" className="dark:fill-white">
              <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" />
              <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" />
            </g>
          </svg>
          <a
            href={blog}
            target="_blank"
            className="text-grayishBlue dark:text-white hover:underline"
          >
            {blog}
          </a>
        </section>

        {/* Twitter */}
        <a
          className="flex flex-row items-center space-x-4 order-3 tablet:order-1 hover:underline"
          href={`https://twitter.com/${twitterAccount}`}
          target="_blank"
          style={
            twitterAccount === "Not Available"
              ? {
                  opacity: 0.5,
                  cursor: "not-allowed",
                }
              : {
                  opacity: 1,
                }
          }
        >
          <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
              fill="#4b6a9b"
              className="dark:fill-white"
            />
          </svg>
          <p className="text-grayishBlue dark:text-white">{twitterAccount}</p>
        </a>

        {/* Location */}
        <section
          className="flex flex-row items-center space-x-4 order-4"
          style={
            currentCompany === "Not Available"
              ? {
                  opacity: 0.5,
                  cursor: "not-allowed",
                }
              : {
                  opacity: 1,
                }
          }
        >
          <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#4b6a9b" className="dark:fill-white">
              <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
            </g>
          </svg>
          <a
            href={`https://github.com/${currentCompany}`}
            target="_blank"
            className="hover:underline"
          >
            <p className="text-grayishBlue dark:text-white">{currentCompany}</p>
          </a>
        </section>
      </section>
    </section>
  );
}
export default Card;
