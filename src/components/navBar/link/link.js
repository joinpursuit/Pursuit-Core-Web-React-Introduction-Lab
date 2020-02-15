import React from 'react';

const Link = ({urlName,urlLink})=>{
    return(
        <div className={"Link"}>
            
            <a href={urlLink}>
            <input type="button" value={urlName}></input>
            </a>
            
        </div>
    )
}
export default Link