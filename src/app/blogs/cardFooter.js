"use client";

import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'

export default function CardFooter({ reactions }) {

    const [likes, setLikes] = useState(reactions.likes);
    const [isLiked, setIsLiked] = useState(false);

    const [dislikes, setDisLikes] = useState(reactions.dislikes);
    const [isDisLiked, setDisLiked] = useState(false);

    function handleLikes(e) {
        if (isLiked) {
            setLikes(likes - 1);
            setIsLiked(false);
        } else {
            setLikes(likes + 1);
            setIsLiked(true);

            if (isDisLiked) {
                setDisLikes(dislikes - 1);
                setDisLiked(false);
            }
        }
    }

    function handleDisLikes(e) {
        if (isDisLiked) {
            setDisLikes(dislikes - 1);
            setDisLiked(false);
        } else {

            setDisLikes(dislikes + 1);
            setDisLiked(true);

            if (isLiked) {
                setLikes(likes - 1);
                setIsLiked(false);
            }
        }
    }



    return (
        <Fragment>
            <div className="card-footer text-body-secondary d-flex justify-content-evenly align-items-center">
                <div className='d-flex align-items-center gap-2'>
                    <h5 className='p-0 m-0'>{likes}</h5>
                    <FontAwesomeIcon icon={faThumbsUp} size='2x' style={{ cursor: "pointer" }} className={`${isLiked && "text-primary"}`} onClick={(e) => handleLikes(e)} />

                </div>
                <span>|</span>
                <div className='d-flex align-items-center gap-2'>
                    <h5 className='p-0 m-0'>{dislikes}</h5>

                    <FontAwesomeIcon icon={faThumbsDown} size='2x' style={{ cursor: "pointer" }} className={`${isDisLiked && "text-danger"}`} onClick={(e) => handleDisLikes(e)} />
                </div>
            </div>

        </Fragment>
    )
}
