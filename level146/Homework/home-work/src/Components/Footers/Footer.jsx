import './Footer.css';
import './SocialLinks.css';
function Footer(){
    const footerStyle = {
        backgroundColor:'#0f172a',
        color:'white',
        padding:'40px 20px',
        borderTop:'2px solid #334155'
    }
    return(
        <>
        <nav style={footerStyle}>
        <p style={{
            color:'#9ca3af',
            fontSize:'14px'
        }}>footerText</p>
        </nav>
        
        </>
    );
}
export default Footer;