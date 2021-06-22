import React, { Fragment } from 'react';


/**
 * Shows the information of the User.
 * @param {string} picture the picture of the user
 * @param {string} name the name of the user
 * @param {string} access the role of the user.
 * @returns 
 */
const UserInfo = (picture, name, access) => {
    return (<Fragment>
        <div className='item-push-left'>
            <img className='item__user-image' src={picture} alt={name} />
        </div>

        <div className='item'>
            <ul className='item__user-info'>
                <li >
                    Name:{name}
                </li>
                <li>
                    Access:{access}
                </li>
            </ul>
        </div>
    </Fragment>)

};

export default UserInfo;