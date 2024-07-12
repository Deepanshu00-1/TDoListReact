import React from 'react';
import './content.css';

function Content(){
    const Name = document.getElementById('nameInput');
    const Email = document.getElementById('.emailInput');
    const Password = document.getElementById('passwordInput');
    const cPassword = document.getElementById('cpInput');
    const sButton = document.getElementById('submitBtn');
    const small = document.getElementsByTagName('small');

    // sButton.addEventListener('click', function(){
    //     // if(Name.value = "",Email.value = "",Password.value = "",cPassword.value = ""){
    //     //     small.classList.remove('error');
    //     // }
    // })

    return(
        <div className = 'addedContent'>
            <div className='formInput 1I' id="first">
                <label htmlFor="Username" className='name' >Username:</label><br />
                <input type="text" placeholder='Enter Username' id="nameInput"/>
                <small id="error">Username must be at least 3 characters</small>
            </div>
            <br />
            <div className='formInput'>
                <label htmlFor="email" className='email'>Email:</label><br />
                <input type="email" placeholder='Enter Email' id="emailInput"/>
                <small id="error">Email is not invalid</small>
            </div>
            <br />
            <div>
                <label htmlFor="password" className='password'>Password:</label><br />
                <input type="password" placeholder='Enter Password' id="passwordInput"/>
                <small id="error">Password must be at least 6 characters</small>
            </div>
            <br />
            <div className='cP'>
                <label htmlFor="password" className='confirmPassword'>Confirm Password:</label><br />
                <input type="password" placeholder='Enter Password again' className='cPinput'  id="cpInput"/>
                <small id="error">Password2 is required</small>
            </div>
            <div>
                <button id="submitBtn" onClick={Content}>Submit</button>
            </div>
        </div>
    )
}
export default Content