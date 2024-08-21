import Card from '@/app/blogs/card';
import SideBar from '@/components/sideBar/sideBar'
import clientPromise from '@/lib/mongodb';
import Image from 'next/image';
import React, { Fragment } from 'react'

export default async function Profile() {

    const client = await clientPromise;
    const db = client.db();
    const posts = await db.collection("MyPosts").find().toArray();
    console.log("connected");

    return (
        <div className='row p-4'>
            <div className='col-3'>
                <SideBar />
            </div>

            <div className='col-9'>
                {
                    posts.map((post) =>
                        <div className={`card p-0 `}>
                            <div className="card-header text-center">
                                <Image quality={100} alt="Post Image" width={100} height={100} src={post.imageSrc} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text text-truncate">{post.description}</p>
                            </div>
                        </div>)
                }
            </div>

        </div>
    )
}
