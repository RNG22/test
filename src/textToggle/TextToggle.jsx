import React from 'react';


const TextToggle=()=>{
    const [isToggled,setIsToggled]=React.useState(false);
    const handleClick=()=>{
setIsToggled(!isToggled);
    }
    return(
        <div>
            <h1>d</h1>
            <button onClick={handleClick}>
                {isToggled ? 'Show Text' : 'Hide Text'}
            </button>
            {!isToggled &&(
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci cumque in vel it officiis expedita ea mollitia qui commodi fugiat dignissimos velit atque aliquid adipisci quos ab beatae, dolorum dolore animi nostrum.
                </p>
            )}
        </div>
    )
    
}


export default TextToggle;