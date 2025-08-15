import profilePic from './assets/pp.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src= {profilePic} alt="Profile Picture" ></img>
            <h2 className='card-title'>Harshit Saini</h2>
            <p className='card-text'>i want to excel sde and play basketball.</p>
        </div>
    );
}

export default Card