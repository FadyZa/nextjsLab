import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import React from 'react'

export default function Footer() {
    return (

        <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-5">

            <div className="text-center p-4 bg-dark text-white" >
                © ITI 2024 Copyright:
                <a className="text-reset fw-bold" target="_blank" href="https://www.linkedin.com/in/fady-malak-zaki/"> FadyMalak</a>
            </div>

            <section className="d-flex justify-content-center justify-content-between p-4 border-top">
                <div className="me-5">
                    <span>let's get connected on social networks:</span>
                </div>
                <div>
                    <a href="" className="me-4 text-reset">
                        <FaFacebook className="fs-4" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/fady-malak-zaki/" className="me-4 text-reset">
                        <FaLinkedin className="fs-4" />
                    </a>
                    <a target="_blank" href="https://github.com/FadyZa" className="me-4 text-reset">
                        <FaGithub className="fs-4" />
                    </a>
                </div>
            </section>
        </footer>

    )
}
