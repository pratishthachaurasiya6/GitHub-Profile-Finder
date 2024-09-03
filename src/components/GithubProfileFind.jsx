import { useEffect, useState } from 'react'
import GithubUser from './GithubUser';

const GithubProfileFind = () => {

  const [userName, setUsername] = useState("pratishthachaurasiya6");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);


  async function fetchGithubUserData() {
    setLoading(true);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      // setUsername("");
    }
    console.log(data);
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);

  function handleSubmit(event){
    event.preventDefault();
    fetchGithubUserData();
  }

  if(loading) {
    return <h1>Loading data! Please wait...</h1>
  }

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            {/* <input type="text"
              className="form-control my-3"
              placeholder="My GitHub Profile"
              // value={userName}
              onChange={(event) => setUsername(event.target.value)}
              disabled
            /> */}
            {/* <button type='submit' className="btn btn-primary my-2 mx-auto w-25 rounded"
              onClick={handleSubmit}>Search</button> */}
            </form>
          </div>
        {
          userData !== null ? <GithubUser user={userData}/> : null
        }
        </div>
      </div>
    </>
  )
}

export default GithubProfileFind;