import PropTypes from 'prop-types';

const GithubUser = ({ user }) => {
    const{avatar_url, followers, following, public_repos, name, login, created_at, bio, company, location } = user;

    const createdData = new Date(created_at);

    return (
        <>
            <div className="row mx-auto justify-content-center">
                <div className="col-md-4 col-lg-4">
                    <div className="card my-5">
                        <img src={avatar_url} className="card-img-top" alt="profile-photo" />
                        <div className="card-body">
                            <h5 className="card-title">Location is: {location}</h5>
                            <p className="card-text">Bio is: {bio}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Created On: {createdData.toLocaleDateString()}</li>
                            <li className="list-group-item">Public Repo count is: {public_repos}</li>
                            <li className="list-group-item">Followers: {followers}</li>
                            <li className="list-group-item">Following : {following}</li>

                        </ul>
                        <div className="card-body">

                            <a href={`https://github.com/${login}`} className="card-link">{name || login}</a>
                            <a className="card-link">Company: {company}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

GithubUser.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    bio: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
export default GithubUser;