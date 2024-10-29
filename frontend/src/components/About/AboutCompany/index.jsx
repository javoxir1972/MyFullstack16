import "./style.scss"
// import Item from "./item"
import ourteam1 from "../../../assets/images/OurTeam/ourteam1.png"
import ourteam2 from "../../../assets/images/OurTeam/ourteam2.png"
import ourteam3 from "../../../assets/images/OurTeam/ourteam3.png"
import ourteam4 from "../../../assets/images/OurTeam/ourteam4.png"
import ourteam5 from "../../../assets/images/OurTeam/ourteam5.png"

import logoipsum1 from "../../../assets/images/OurPartners/logoipsum1.png"
import logoipsum2 from "../../../assets/images/OurPartners/logoipsum2.png"
import logoipsum3 from "../../../assets/images/OurPartners/logoipsum3.png"
import logoipsum4 from "../../../assets/images/OurPartners/logoipsum4.png"
import logoipsum5 from "../../../assets/images/OurPartners/logoipsum5.png"
import logoipsum6 from "../../../assets/images/OurPartners/logoipsum6.png"
import logoipsum7 from "../../../assets/images/OurPartners/logoipsum7.png"
import logoipsum8 from "../../../assets/images/OurPartners/logoipsum8.png"
import logoipsum9 from "../../../assets/images/OurPartners/logoipsum9.png"
import logoipsum10 from "../../../assets/images/OurPartners/logoipsum10.png"

import nft from "../../../assets/images/About/nft1.png"
import human from "../../../assets/images/About/nft2.png"

import TokyoDrift from "../../../assets/video/TokyoDrift.mp4"
function AboutCompany() {

    return (
        <div className="AboutCompany-nft">
            <div className="AboutCompany-header-nft">
                <div className="AboutCompany-header-top">
                    <div className="left">
                        <span>NFT MARKETPLACE</span>
                        <h1>About our Company NFT Distro</h1>
                        <p>
                            We are a cutting-edge company focused on the creation, promotion, and
                            sale of non-fungible tokens (NFTs). Our marketplace offers a wide
                            range of NFTs, from digital art and collectibles to gaming items and
                            virtual real estate.
                        </p>
                    </div>
                    <div className="right">
                        <img src={nft} alt="NFT example" width="455px" height="499px" />
                    </div>
                </div>
                <div className="AboutCompany-header-bottom">
                    <div className="left">
                        <img src={human} alt="Human with NFT" width="455px" height="499px" />
                    </div>
                    <div className="right">
                        <h1>NFT Represents the Future</h1>
                        <p>
                            We believe that NFTs represent the future of digital ownership and are
                            excited to provide our customers with access to this revolutionary new
                            market. Our platform is user-friendly and easy to navigate, making it
                            simple
                        </p>
                    </div>
                </div>
            </div>

            <div className="AboutCompany-icons-nft">
                <div className="AboutCompany-icon">
                    <span>🔥</span>
                    <h2>23,400</h2>
                    <p>NFTs</p>
                </div>
                <div className="AboutCompany-icon">
                    <span>⭐</span>
                    <h2>8,000</h2>
                    <p>Collections</p>
                </div>
                <div className="AboutCompany-icon">
                    <span>🌙</span>
                    <h2>3,400</h2>
                    <p>Creators</p>
                </div>
                <div className="AboutCompany-icon">
                    <span>☀️</span>
                    <h2>$21B+</h2>
                    <p>Volume</p>
                </div>
            </div>

            <div className="AboutCompany-distro-nft">
                <div className="distro">
                    <h1>NFT Distro</h1>
                    <div className="video-container">
                        <video controls loop muted>
                            <source src={TokyoDrift} type="video/mp4" />
                            Ваш браузер не поддерживает видеоплеер.
                        </video>
                    </div>
                </div>
            </div>

            <div className="AboutCompany-our-partners-nft">
                <h1>Our Partners</h1>
                <div className="logos-container">
                    <div className="logos-row">
                        <img src={logoipsum1} alt="Partner 1" />
                        <img src={logoipsum2} alt="Partner 2" />
                        <img src={logoipsum3} alt="Partner 3" />
                        <img src={logoipsum4} alt="Partner 4" />
                        <img src={logoipsum5} alt="Partner 5" />
                    </div>
                    <div className="logos-row">
                        <img src={logoipsum6} alt="Partner 6" />
                        <img src={logoipsum7} alt="Partner 7" />
                        <img src={logoipsum8} alt="Partner 8" />
                        <img src={logoipsum9} alt="Partner 9" />
                        <img src={logoipsum10} alt="Partner 10" />
                    </div>
                </div>
            </div>

            <div className="About-company-our-team-nft">
                <h1>Our Team</h1>
                <div className="team">
                    <div className="team-member">
                        <img src={ourteam1} alt="Floyd Miles" width="154" height="154" />
                        <h2>Floyd Miles</h2>
                        <p>Founder</p>
                    </div>
                    <div className="team-member">
                        <img src={ourteam2} alt="Eleanor Pena" width="154" height="154" />
                        <h2>Eleanor Pena</h2>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className="team-member">
                        <img src={ourteam3} alt="Kiss Dorka" width="154" height="154" />
                        <h2>Kiss Dorka</h2>
                        <p>UX Architect</p>
                    </div>
                    <div className="team-member">
                        <img src={ourteam4} alt="Nagy Timea" width="154" height="154" />
                        <h2>Nagy Timea</h2>
                        <p>Project Manager</p>
                    </div>
                    <div className="team-member">
                        <img src={ourteam5} alt="William Loko" width="154" height="154" />
                        <h2>William Loko</h2>
                        <p>Software Developer</p>
                    </div>
                </div>
            </div>

            <div className="About-company-container-nft">
                <div className="content">
                    <h1>Interested in Joining Us?</h1>
                    <p>
                        We're always looking for passionate individuals to help us achieve our goals. <br />
                        Apply today, and let's build a better future together.
                    </p>
                    <button className="join-button">Join us</button>
                </div>
            </div>

        </div>
    );
}

export default AboutCompany;