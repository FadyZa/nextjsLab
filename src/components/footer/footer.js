import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

export default function Footer() {
    return (

        <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-5">

            <div className="text-center p-4 bg-dark text-white" >
                © ITI 2024 Copyright:
                <a className="text-reset fw-bold" href="#"> FadyMalak</a>
            </div>

            <section className="d-flex justify-content-center justify-content-between p-4 border-top">
                <div className="me-5">
                    <span>let's get connected on social networks:</span>
                </div>
                <div>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </section>
        </footer>

    )
}
