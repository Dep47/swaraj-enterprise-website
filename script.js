/* =========================
   GLOBAL SETTINGS
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 85px;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    color: #263449;
    background: #ffffff;
    line-height: 1.7;
}

:root {
    --navy: #10243e;
    --navy-light: #193957;
    --orange: #f39b32;
    --white: #ffffff;
    --light-bg: #f4f7fb;
    --text: #526174;
}

.container {
    width: 90%;
    max-width: 1150px;
    margin: auto;
}

.section {
    padding: 90px 0;
}

.section h2 {
    font-size: 36px;
    color: var(--navy);
    margin-bottom: 15px;
    line-height: 1.25;
}

.section-label {
    color: var(--orange);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 12px;
    text-transform: uppercase;
}

.section-description {
    color: var(--text);
    margin-bottom: 35px;
}


/* =========================
   HEADER
========================= */

.header {
    width: 100%;
    background: var(--white);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 3px 18px rgba(0, 0, 0, 0.06);
}

.nav-container {
    min-height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.logo {
    text-decoration: none;
    color: var(--navy);
    font-size: 21px;
    font-weight: 800;
    line-height: 1.2;
    white-space: nowrap;
}

.logo span {
    display: block;
    color: var(--orange);
    font-size: 12px;
    letter-spacing: 3px;
}

.navbar {
    display: flex;
    align-items: center;
    gap: 25px;
}

.navbar a {
    color: var(--navy);
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.navbar a:hover {
    color: var(--orange);
}

.nav-button {
    background: var(--navy);
    color: var(--white);
    text-decoration: none;
    padding: 11px 22px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 700;
    transition: background 0.3s ease;
    white-space: nowrap;
}

.nav-button:hover {
    background: var(--orange);
}


/* =========================
   HERO SECTION
========================= */

.hero {
    background: linear-gradient(
        115deg,
        #10243e 0%,
        #193957 100%
    );
    color: var(--white);
    padding: 115px 0 105px;
    position: relative;
    overflow: hidden;
}

.hero::after {
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    border: 65px solid rgba(255, 255, 255, 0.035);
    border-radius: 50%;
    right: -100px;
    top: -100px;
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero-tag {
    color: var(--orange);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(40px, 6vw, 65px);
    line-height: 1.15;
    max-width: 750px;
    margin-bottom: 25px;
    font-weight: 800;
}

.hero h1 span {
    color: var(--orange);
}

.hero-description {
    max-width: 620px;
    color: #d1dbe6;
    font-size: 17px;
    margin-bottom: 35px;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    padding: 14px 27px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.3s ease;
}

.btn-primary {
    background: var(--orange);
    color: var(--navy);
}

.btn-primary:hover {
    background: #ffb85d;
    transform: translateY(-3px);
}

.btn-secondary {
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: var(--white);
}

.btn-secondary:hover {
    background: var(--white);
    color: var(--navy);
}

.hero-note {
    color: #b8c6d5;
    font-size: 13px;
}


/* =========================
   ABOUT SECTION
========================= */

.about {
    background: var(--white);
}

.about p:not(.section-label) {
    max-width: 850px;
    color: var(--text);
    font-size: 16px;
}


/* =========================
   SERVICES SECTION
========================= */

.services {
    background: var(--light-bg);
}

.service-groups {
    display: flex;
    flex-direction: column;
    gap: 55px;
}

.service-group h3 {
    font-size: 23px;
    color: var(--navy);
    margin-bottom: 25px;
    padding-left: 15px;
    border-left: 4px solid var(--orange);
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.service-card {
    background: var(--white);
    padding: 27px 23px;
    border-radius: 8px;
    border: 1px solid #e8edf3;
    transition: all 0.3s ease;
}

.service-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(16, 36, 62, 0.09);
    border-color: var(--orange);
}

.service-card h4 {
    color: var(--navy);
    font-size: 17px;
    margin-bottom: 10px;
}

.service-card p {
    color: var(--text);
    font-size: 14px;
}


/* =========================
   CONTACT SECTION
========================= */

.contact {
    text-align: center;
    background: var(--white);
}

.contact-details {
    max-width: 550px;
    margin: 30px auto;
    padding: 28px;
    background: var(--light-bg);
    border-radius: 8px;
    text-align: left;
}

.contact-details p {
    margin-bottom: 12px;
    color: var(--text);
    overflow-wrap: anywhere;
}

.contact-details p:last-child {
    margin-bottom: 0;
}

.contact-details strong {
    color: var(--navy);
}

.contact-details a {
    color: #1b659b;
    text-decoration: none;
}

.contact-details a:hover {
    text-decoration: underline;
}


/* =========================
   FOOTER
========================= */

.footer {
    background: var(--navy);
    color: var(--white);
    padding: 45px 0 25px;
    text-align: center;
}

.footer h3 {
    font-size: 22px;
    margin-bottom: 8px;
}

.footer > .container > p {
    color: #c3ceda;
    font-size: 14px;
}

.footer .disclaimer {
    max-width: 750px;
    margin: 25px auto;
    font-size: 12px;
    line-height: 1.8;
}

.copyright {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 20px;
    margin-top: 25px;
}


/* =========================
   MOBILE RESPONSIVENESS
========================= */

@media (max-width: 900px) {

    .nav-container {
        flex-wrap: wrap;
        padding: 15px 0;
    }

    .navbar {
        order: 3;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px 22px;
        padding: 10px 0 3px;
    }

    .service-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}


@media (max-width: 600px) {

    .container {
        width: 90%;
    }

    .section {
        padding: 65px 0;
    }

    .section h2 {
        font-size: 29px;
    }

    .nav-container {
        gap: 12px;
    }

    .logo {
        font-size: 18px;
    }

    .nav-button {
        padding: 9px 14px;
        font-size: 12px;
    }

    .navbar {
        justify-content: flex-start;
        gap: 12px 18px;
    }

    .navbar a {
        font-size: 12px;
    }

    .hero {
        padding: 85px 0 75px;
    }

    .hero h1 {
        font-size: 41px;
    }

    .hero-description {
        font-size: 15px;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: flex-start;
    }

    .btn {
        text-align: center;
    }

    .service-grid {
        grid-template-columns: 1fr;
    }

    .service-card {
        padding: 23px;
    }

    .contact-details {
        padding: 22px;
    }

}
