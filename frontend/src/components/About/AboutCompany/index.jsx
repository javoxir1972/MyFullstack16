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

import Img1 from "../../../assets/images/7hokage.jpg"
function AboutCompany() {
    // let imgs1 = [Img1, Img2, Img3, Img4];
    // let imgs2 = [Img4, Img3, Img2, Img1];

    return (
        <div className="AboutCompany-nft">
            <div className="AboutCompany-header-nft">
                <div className="AboutCompany-header-top">
                    <div className="left">
                        <span>NFT MARKETPLACE</span>
                        <h1>About our Company NFT Distro</h1>
                        <p>We are a cutting-edge company focused on the creation, <br /> promotion, and sale of non-fungible tokens (NFTs). Our marketplace <br /> offers a wide range of NFTs, from digital art and collectibles to <br /> gaming items and virtual real estate.</p>
                    </div>

                    <div className="right">
                        <img src={Img1} alt="" width="455px" height="499px" />
                    </div>
                </div>
                <div className="AboutCompany-header-bottom">
                    <div className="left">
                        <img src="https://s3-alpha-sig.figma.com/img/cd0f/b1c0/a353d84e204f0a02dd7cff2a5a643128?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rzl0bknTzVEmLt2bcC0UuVX8jwGHhF4WVycrZRrO51PF66iSStbKAmnWvh2Dkh3eVpyWRJ2L6T~PHobvpxVSFYGb9x4LA-lRSb8Q8QGEZjy5roG4SyKNjh3kExgi39c50fhx7U8BFKadkUydN0goM-sYaE4xI27FcV-NsLxnwQJ-~7NTUU~zr-D3c0BVEAFsAfQeHydP1AjDJuN-dxZ-Nhg~GgpKz7kjLN0tt7Jiu2rP14OX5wsMpxMmXr8yw0sI-R38YzDVmrpmBpsFgIkRu~qN72Xb~6hEpshjwn8bsL5yVMgLSyg7j7ZUSHbKhEdRNmdcSCLaeQ9sZXkgOsTXNA__" alt="" width="615px" height="549px" />
                    </div>
                    <div className="right">
                        <h1>NFT Represent the future</h1>
                        <p>We believe that NFTs represent the future of digital <br /> ownership and are excited to provide our customers with <br /> access to this revolutionary new market. Our platform is <br /> user-friendly and easy to navigate, making it simple for <br /> creators to upload and sell their NFTs and for buyers to <br /> discover and purchase unique digital assets.</p>
                    </div>
                </div>
            </div>
            <div className="AboutCompany-icons-nft">
                <div className="AboutCompany-icons-nfts">
                    <span>🔥</span>
                    <h2>23.400</h2>
                    <p>NFT's</p>
                </div>
                <div className="AboutCompany-icons-collection">
                    <span>⭐</span>
                    <h2>8.000</h2>
                    <p>Collection</p>
                </div>
                <div className="AboutCompany-icons-creators">
                    <span>🌙</span>
                    <h2>3.400</h2>
                    <p>Creators</p>
                </div>
                <div className="AboutCompany-icons-volurme">
                    <span>☀️</span>
                    <h2>$21B+</h2>
                    <p>NFT's</p>
                </div>
            </div>

            <div className="AboutCompany-distro-nft">
                <div className="distro">
                    <h1>NFT Distro</h1>
                </div>
            </div>

            <div className="AboutCompany-our-partness-nft">
                <h1>Our Partness</h1>
                <div className="logos-top">
                    <img src={logoipsum1} alt="" width="178px" height="54px" />
                    <img src={logoipsum2} alt="" width="178px" height="54px" />
                    <img src={logoipsum3} alt="" width="178px" height="54px" />
                    <img src={logoipsum4} alt="" width="178px" height="54px" />
                    <img src={logoipsum5} alt="" width="178px" height="54px" />
                </div>
                <div className="logos-bottom">
                    <img src={logoipsum6} alt="" width="178px" height="54px" />
                    <img src={logoipsum7} alt="" width="178px" height="54px" />
                    <img src={logoipsum8} alt="" width="178px" height="54px" />
                    <img src={logoipsum9} alt="" width="178px" height="54px" />
                    <img src={logoipsum10} alt="" width="178px" height="54px" />
                </div>
            </div>
            <div className="AboutCompany-our-team-nft">
                <h1>Our Team</h1>
                <div className="team">
                    <div>
                        <img src={ourteam1} alt="" width="154px" height="154px" />
                        <h2>Floyd Miles</h2>
                        <p>Founder</p>
                    </div>
                    <div>
                        <img src={ourteam2} alt="" width="154px" height="154px" />
                        <h2>Eleanor Pena</h2>
                        <p>UI UX Desinger</p>
                    </div>
                    <div>
                        <img src={ourteam3} alt="" width="154px" height="154px" />
                        <h2>Kiss Dorka</h2>
                        <p>UX Architect</p>
                    </div>
                    <div>
                        <img src={ourteam4} alt="" width="154px" height="154px" />
                        <h2>Nagy Timea</h2>
                        <p>Project Manager</p>
                    </div>
                    <div>
                        <img src={ourteam5} alt="" width="154px" height="154px" />
                        <h2>William Loko</h2>
                        <p>Software Developer</p>
                    </div>
                </div>
            </div>
            <div className="AboutCompany-container-nft">
                <h1>Interested in joining us?</h1>
                <p>We're always looking for passionate individuals to help us achieve our goals. Apply <br /> today and let's build a better future together.</p>
                <button>Join us</button>
            </div>

        </div>
    );
}

export default AboutCompany;