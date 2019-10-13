import React from 'react';
import Card from './Card';

function CardList({ robots }) {
    // if(true){
    //     throw new Error('Noooo');        
    // }
    console.log('CardList');
    return(
        <div>
        {
            robots.map((user, i) => {
                return (
                    <Card 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        username={robots[i].username} 
                        email={robots[i].email} 
                    />
                );
            })
        }
        </div>
    );
}

export default CardList;