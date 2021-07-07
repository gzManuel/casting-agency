import React, { Fragment } from 'react';


/**
 * Shows the information of the User.
 * @param {string} props
 * @param {string} props.picture The picture of the user
 * @param {string} props.name The name of the user
 * @param {string} props.role The role of the user.
 */
const UserInfo = ({picture, name, role}) => {
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
                    Rol:{role}
                </li>
            </ul>
        </div>
    </Fragment>)

};

export default UserInfo;