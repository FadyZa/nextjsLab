import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFilePen, faHouseUser, faMagnifyingGlass, faSliders, faUser } from '@fortawesome/free-solid-svg-icons';

export default function SideBar() {
    return (
        <aside className='bg-light p-3 rounded-2'>
            <ul>
                <li className='text-uppercasr display-5 fw-bold d-flex align-items-center gap-2'>
                    <FontAwesomeIcon icon={faFilePen} />
                    Blogs
                </li>
                <hr />

                <li className='text-capitalize'>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </li>

                <li className='text-capitalize my-3'>
                    <button type="button" className="btn btn-secondary p-2 w-100 text-start d-flex align-items-center gap-2">
                        <FontAwesomeIcon icon={faUser} />
                        Account
                    </button>
                </li>

                <li className='text-capitalize my-3'>
                    <button type="button" className="btn btn-secondary p-2 w-100 text-start d-flex align-items-center gap-2">
                        <FontAwesomeIcon icon={faHouseUser} />
                        Dashboard
                    </button>
                </li>

                <li className='text-capitalize my-3'>
                    <button type="button" className="btn btn-secondary p-2 w-100 text-start d-flex align-items-center gap-2">
                        <FontAwesomeIcon icon={faComment} />
                        comment
                    </button>
                </li>

                <li className='text-capitalize my-3'>
                    <button type="button" className="btn btn-secondary p-2 w-100 text-start d-flex align-items-center gap-2">
                        <FontAwesomeIcon icon={faSliders} />
                        Settings
                    </button>
                </li>
            </ul>
        </aside>
    )
}
