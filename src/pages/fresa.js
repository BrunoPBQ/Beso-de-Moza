import React, { useState } from 'react';

const Fresa = ({ setInicio, CantProductos, setCantProductos, setCantFresa, CantFresa }) => {
    setInicio(false)
    const [Cantidad, setCantidad] = useState(1);
    function SumaCont() {
        setCantidad(Cantidad + 1)
    }
    function RestaCont() {
        if (Cantidad <= 1) {
            setCantidad(1)
        }
        else {
            setCantidad(Cantidad - 1)
        }
    }
    function ActualizarCarrito() {
        if (CantProductos === 0) {
            setCantProductos(1)
            setCantFresa(CantFresa + Cantidad)
            alert("Se agregó correctamente")
        } else {
            if (CantFresa === 0) {
                setCantProductos(CantProductos + 1)
                setCantFresa(CantFresa + Cantidad)
                alert("Se agregó correctamente")
            } else {
                setCantFresa(CantFresa + Cantidad)
                alert("Se agregó correctamente")
            }
        }

    }
    return (
        <main className='container ' id='main'>
            <div className="div-sabores">
                <h3 className='title pb-4 border-bottom'>Sabor Fresa</h3>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
                    <div className="div-img-sabores col-sm-8 col-lg-6">
                        <img src="https://cdn.discordapp.com/attachments/866837932643450901/996667326214701116/SABORES_BDM-03.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Caja Besos de Moza Fresa 9x24 gr</h1>
                        <p className="lead">Galleta sabor vainilla y merengue sabor fresa con cobertura
                            sabor chocolate. ¿Tus películas favoritas son las de romance, tu love language
                            es el contacto físico y amas los animales?
                        </p>
                        <h4 className="display-5 fw-bold lh-1 mb-3">S/9.90</h4>
                        <div className="div-carrito d-grid gap-2">
                            <b className='cant-text'>Cantidad: {Cantidad} </b>
                            <button type="button" onClick={RestaCont} className={"btn btn-outline-dark btn-sabores"}><i class="fa-solid fa-minus"></i></button>
                            <button type="button" onClick={SumaCont} className={"btn btn-outline-dark btn-sabores"}><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div className="div-buttons d-grid gap-2">
                            <button type="button" onClick={ActualizarCarrito} className={"btn btn-success"}><i class="fa-solid fa-cart-shopping"></i> Agregar al carrito</button>
                        </div>
                        <div className="div-buttons d-grid gap-2">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Fresa;
