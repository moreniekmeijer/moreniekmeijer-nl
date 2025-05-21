import './HomePage.css';
import SocialMediaIcons from "../../components/socialMediaIcons/SocialMediaIcons.jsx";

function HomePage() {
    return (
        <>
            <h1>Welcome</h1>
            <section className="contentContainer">
                <a className="contentLeft" href="https://linktr.ee/dawnofanewworld" target="_blank"
                   rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 14 17" fill="none">
                        <path d="M4 14.5V3.5L13 1V12.5" stroke="currentColor" stroke-linejoin="round"/>
                        <circle cx="2.5" cy="14.5" r="1.5" fill="currentColor" stroke="currentColor"/>
                        <circle cx="11.5" cy="12.5" r="1.5" fill="currentColor" stroke="currentColor"/>
                    </svg>
                </a>
                <a className="contentRight" href="https://github.com/moreniekmeijer" target="_blank"
                   rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 21 15" fill="none">
                        <path d="M6 12.5L1 7.5L6 2.5M15 12.5L20 7.5L15 2.5M8.5 14L12.5 1" stroke="currentColor"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </section>
            <SocialMediaIcons/>
        </>
    )
}

export default HomePage;
