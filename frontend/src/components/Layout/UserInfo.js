import React, { Fragment } from 'react';

const UserInfo = (props) => {


    return (<Fragment>
        <div className='item-push-left'>
            <img className='item__user-image' src={props.picture} alt={props.name} />
        </div>

        <div className='item'>
            <ul className='item__user-info'>
                <li >
                    Name:{props.name}
                </li>
            </ul>
        </div>
    </Fragment>)

};

export default UserInfo;