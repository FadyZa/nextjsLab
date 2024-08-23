import { TfiDashboard, TfiWrite } from "react-icons/tfi";
import React from 'react'
import { FaComment, FaSearch, FaSlidersH, FaUser } from "react-icons/fa";


export default function SideBar() {
    return (
        <aside className='bg-light p-3 rounded-2'>
            <ul>
                <li className='text-uppercasr display-5 fw-bold d-flex align-items-center gap-2'>
                    <TfiWrite />
                    Blogs
                </li>
                <hr />

                <li className='text-capitalize'>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                            <FaSearch />
                        </span>
                        <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </li>

                <li className='text-capitalize my-3'>
                    <button type="button" className="btn btn-secondary p-2 w-100 text-start d-flex align-items-center gap-2">
                        <FaUser />
                        Account
                    </button>
                </li>

                <li className='text-capitalize my-3'>
                    <button type="button" className="btn btn-secondary p-2 w-100 text-start d-flex align-items-center gap-2">
                        <TfiDashboard />
                        Dashboard
                    </button>
                </li>

                <li className='text-capitalize my-3'>
                    <button type="button" className="btn btn-secondary p-2 w-100 text-start d-flex align-items-center gap-2">
                        <FaComment />
                        comment
                    </button>
                </li>

                <li className='text-capitalize my-3'>
                    <button type="button" className="btn btn-secondary p-2 w-100 text-start d-flex align-items-center gap-2">
                        <FaSlidersH />
                        Settings
                    </button>
                </li>
            </ul>
        </aside>
    )
}
