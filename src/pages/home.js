import React from 'react';
import "../css/home.css";
import { Link } from "react-router-dom";

const Home = ({ setInicio }) => {
    setInicio(true)
    return (
        <main>
            <section>
                <div className="main-img text-white">
                </div>
            </section>
            <section className='bg-section' id='nosotros'>
                <div className='secciones'>
                    <div className="container ">
                        <p>Nos reinventamos sin perder nuestra esencia.</p>
                        <p>Hace más de 50 años, Besos de Moza ha llenado de dulzura 
                            nuestros corazones con diferentes sabores, para que cualquier 
                            persona, grupo de amigos, parejas sin excepción se identifique 
                            con nuestras presentaciones. ¡Los mismos sabores regresan 
                            y ahora con una nueva versión más actualizada!
                        </p>
                    </div>
                </div>
            </section>
            <section className='secciones' id='sabores'>
                <div className="container text-center pt-5 mb-5">
                    <h3 className=" title pb-4 ">DESCUBRE QUE DICE TU SABOR FAVORITO DE TU PERSONALIDAD</h3>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 card-out-container mt-3 mb-3">
                            <Link to="/Sabores/clasico" className="card_box Beso-Moza1">
                                <button className="card-button card1">Ver más</button>
                                <span className='tipo-Beso-Moza1'></span>
                            </Link>

                        </div>
                        <div className="col-lg-3 col-sm-6 card-out-container mt-3 mb-3">
                            <Link to="/Sabores/Lucuma" className="card_box Beso-Moza2">
                                <button className="card-button card2">Ver más</button>
                                <span className='tipo-Beso-Moza2'></span>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6 card-out-container mt-3 mb-3">
                            <Link to="/Sabores/Fresa" className="card_box Beso-Moza3">
                                <button className="card-button card3">Ver más</button>
                                <span className='tipo-Beso-Moza3'></span>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6 card-out-container mt-3 mb-3">
                            <Link to="/Sabores/Menta" className="card_box Beso-Moza4">
                                <button className="card-button card4">Ver más</button>
                                <span className='tipo-Beso-Moza4'></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-section' id='novedades'>
                <div className="container text-center secciones">
                    <h3 className=" title pb-3 ">TU BESO DE MOZA FAVORITO PARA TU PERSONA FAVORITA</h3>
                    <div className="row ">
                        <div className="col mt-4 div-parejas">
                            <div className="card pareja-1">
                                <div className="card-details">

                                </div>
                                <button className="card-button btn-clasico d-none">More info</button>
                            </div>
                        </div>
                        <div className="col mt-4 div-parejas">
                            <div className="card pareja-2">
                                <div className="card-details">

                                </div>
                                <button className="card-button btn-lucuma d-none">More info</button>
                            </div>
                        </div>
                        <div className="col mt-4 div-parejas">
                            <div className="card pareja-3">
                                <div className="card-details">

                                </div>
                                <button className="card-button btn-fresa d-none">More info</button>
                            </div>
                        </div>
                        <div className="col mt-4 div-parejas">
                            <div className="card pareja-4">
                                <div className="card-details">

                                </div>
                                <button className="card-button btn-menta d-none">More info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-section2'>
                <div className="secciones">
                    <div className="container text-center">
                        <div className="row flex-lg-row-reverse align-items-center g-5 ">
                            <div className="div-img-sabores col-sm-8 col-lg-6">
                                <img src="https://cdn.discordapp.com/attachments/866837932643450901/997177908172947467/WhatsApp_Image_2022-07-14_at_8.59.20_AM.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" height="500" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className='novedades-h2'>
                                    "Porque Besos de Moza siempre es parte de tus momentos favoritos y luchas constantes"
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
