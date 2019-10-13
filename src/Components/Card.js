import React from 'react';

function Card({ id, name, username, email }) {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${username}?size=100x200`} alt='robots' />
            <div>
                <h2>{id}. {name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;