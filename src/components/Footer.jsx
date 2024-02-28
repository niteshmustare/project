import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="log">
                    <h1>Ministerial Portfolio Display</h1>
                </div>
            
            <div className="bottom">
                <div>
                    {/* <h4>Projects</h4> */}
                    <a href="/aboutus">AboutUs</a>
                    {/* <a href="/">License</a> */}
                    <a href="https://data.gov.in/">data.gov.in</a>
                </div>
                <div>
                    <h4>Important Links</h4>
                    <a href="https://mod.gov.in/">Ministry of Defence</a>
                    <a href="https://finmin.nic.in/">Ministry of Finance</a>
                    <a href="https://www.education.gov.in/">Ministry of Education</a>
                </div>

                <div>
                    {/* <h4>Projects</h4> */}
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">news</a>
                </div>
            </div>
            <div className="top">
                
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;