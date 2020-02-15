import React from 'react';

const Link = ({urlLink,urlName})=>{
    return(
        <div className={"Link"}>
            
            <a href={urlLink}>
                <input type="button" value={urlName}></input>
            </a>
        </div>
    )
}
export default Link