import React from 'react';

class Master extends React.Component {
    render(){
        const userMaster = [
            {
            name: 'Bruce Wayne',
            title: 'American industrialist',
            description: 'I must have a disguise. Criminals are a superstitious cowardly lot. So my disguise must be able to strike terror into their hearts. I must be a creature of the night, black, terrible...a...a...a bat!'
            }
        ]

        const masterMap = userMaster.map(master =>{
            return(
                <>
                <h1>{master.name}</h1>
                <h4>{master.title}</h4>
                <p>{master.description}</p>
                </>
            )
        });

        return(
            <div>
                {masterMap}
            </div>
        )



    }
};

export default Master;