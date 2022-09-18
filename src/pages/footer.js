import React from 'react';
import { Link } from 'react-router-dom';
import "../css/footer.css"
const Footer = () => {
    return (
        <footer>
            <div className='bg-footer'>
                <div className="container">
                    <div className="footer-div row">
                        <div className="col-sm-4 d-flex footer-div">
                            <Link to="/" className=" me-2 mb-md-0 text-decoration-none lh-1">
                                <img height={35} src="https://cdn.discordapp.com/attachments/866837932643450901/996637938060378172/logo2.png" alt="Logo Beso de Moza" />
                            </Link>
                            <span className="text-muted">Copyright &copy; 2022</span>
                        </div>
                        <div className="col-sm-8 social-footer">
                            <ul className="social-footer nav list-unstyled d-flex">
                                <span className="text-muted">Síguenos en: </span>
                                <li className="ms-3"><a className="text-muted link" href="https://www.instagram.com/besodemoza.pe/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                                <li className="ms-3"><a className="text-muted link" href="https://vm.tiktok.com/ZMNadCB8U/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
