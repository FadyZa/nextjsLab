import Link from 'next/link';
import React from 'react';
import CardFooter from './cardFooter';
import Image from "next/image";
import { FaEye } from 'react-icons/fa';


export default function Card({ id, img, title, body, tags, reactions, views, cols }) {
    return (
        <div className={`card ${cols} p-0 `}>
            <div className='text-start ms-3 p-2 d-flex align-items-center gap-2'>
                <FaEye style={{ width: '24px', height: '24px' }} />
                {views}
            </div>
            <div className="card-header text-center">
                <Image quality={100} alt="Post Image" width={100} height={100} src={img} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-truncate">{body}</p>

                {
                    id && <Link href={`/blogs/${id}`} className="btn btn-primary">see Details</Link>
                }
            </div>
            <div className='d-flex justify-content-center align-items-center gap-2 my-2'>
                {
                    tags && tags.map((tag) =>
                        <span className="badge text-bg-secondary p-2">{tag}</span>
                    )
                }
            </div>

            <CardFooter reactions={reactions} />

        </div>
    )
}
