import './Nav.css';
function Navbar(){
    const navStyle = {
        backgroundColor:'#1e293b',
        padding:'15px 30px',
        display:'flex',
        justifyContent:'space-between',
        zIndex:100
    }
    return(
        <>
        <nav style={navStyle}>
        <p style={{color:'#f59e0b',fontSize:'22px',fontWeight:'bold'}}>something about this project :(</p>
        <ul className='parent'>
            <li>product 1</li>
            <li>product 2</li>
            <li>product 3</li>
        </ul>
        </nav>
        </>
    );
}
export default Navbar;