import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import "../css/modal.css"

const ModalCarrito = ({ CabiarEstadoModal, EstadoModal, CantProductos, setCantProductos, setCantClasico, CantClasico, setCantLucuma, CantLucuma, setCantFresa, CantFresa, setCantMenta, CantMenta }) => {
    const [Total, setTotal] = useState(0);
    const [Compra, setCompra] = useState(false);
    useEffect(() => {
        let suma = CantClasico + CantLucuma + CantFresa + CantMenta;
        setTotal((suma * 9.90).toFixed(1))
    });
    return (
        <div className={"out-div-modal " + EstadoModal}>
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel"><i className="fa-solid fa-cart-shopping"></i> Compras</h5>
                    </div>
                    {Compra ?
                        <div className="modal-body text-center">
                            <b>Su compra se procesó correctamente</b>
                            <br />
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        :
                        <div className="modal-body">
                            {CantProductos > 0 ?
                                <div className="container">
                                    <div className="pb-2 ">
                                        <b>Productos</b>
                                    </div>
                                    <div className="container">
                                        {CantClasico > 0 ?
                                            <div className="col-12 border-top border-bottom bg-light py-2">
                                                <div className="row">
                                                    <div className="col-8 ">
                                                        <div className="row ">
                                                            <div className="col-12">
                                                                Caja Besos de Moza Clásico 9x24 gr
                                                            </div>
                                                            <div className="col div-cantidad">
                                                                <b>Cantidad:</b> {CantClasico}
                                                                <button type="button" onClick={() => { CantClasico <= 1 ? setCantClasico(1) : setCantClasico(CantClasico - 1) }} className={"btn btn-outline-dark btn-sabores btn-sabores1"}><i class="fa-solid fa-minus"></i></button>
                                                                <button type="button" onClick={() => setCantClasico(CantClasico + 1)} className={"btn btn-outline-dark btn-sabores"}><i className="fa-solid fa-plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="div-precio col-2">
                                                        <b>S/9.90</b>
                                                    </div>
                                                    <div className="div-precio col-2">
                                                        <button onClick={() => { setCantClasico(0); setCantProductos(CantProductos - 1); }} className='trash-button'><i className="fa-solid fa-trash-can"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            Outlet
                                        }
                                        {
                                            CantLucuma > 0 ?
                                                <div className="col-12 border-top border-bottom bg-light py-2">
                                                    <div className="row">
                                                        <div className="col-8 ">
                                                            <div className="row ">
                                                                <div className="col-12">
                                                                    Caja Besos de Moza Lúcuma 9x24 gr
                                                                </div>
                                                                <div className="col">
                                                                    <b>Cantidad:</b> {CantLucuma}
                                                                    <button type="button" onClick={() => { CantLucuma <= 1 ? setCantLucuma(1) : setCantLucuma(CantLucuma - 1) }} className={"btn btn-outline-dark btn-sabores btn-sabores1"}><i class="fa-solid fa-minus"></i></button>
                                                                    <button type="button" onClick={() => setCantLucuma(CantLucuma + 1)} className={"btn btn-outline-dark btn-sabores"}><i className="fa-solid fa-plus"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-precio col-2">
                                                            <b>S/9.90</b>
                                                        </div>
                                                        <div className="div-precio col-2">
                                                            <button onClick={() => { setCantLucuma(0); setCantProductos(CantProductos - 1); }} className='trash-button'><i className="fa-solid fa-trash-can"></i></button>                                                    </div>
                                                    </div>
                                                </div>
                                                :
                                                Outlet
                                        }
                                        {CantFresa > 0 ?
                                            <div className="col-12 border-top border-bottom bg-light py-2">
                                                <div className="row">
                                                    <div className="col-8 ">
                                                        <div className="row ">
                                                            <div className="col-12">
                                                                Caja Besos de Moza Fresa 9x24 gr
                                                            </div>
                                                            <div className="col">
                                                                <b>Cantidad:</b> {CantFresa}
                                                                <button type="button" onClick={() => { CantFresa <= 1 ? setCantFresa(1) : setCantFresa(CantFresa - 1) }} className={"btn btn-outline-dark btn-sabores btn-sabores1"}><i class="fa-solid fa-minus"></i></button>
                                                                <button type="button" onClick={() => setCantFresa(CantFresa + 1)} className={"btn btn-outline-dark btn-sabores"}><i className="fa-solid fa-plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="div-precio col-2">
                                                        <b>S/9.90</b>
                                                    </div>
                                                    <div className="div-precio col-2">
                                                        <button onClick={() => { setCantFresa(0); setCantProductos(CantProductos - 1); }} className='trash-button'><i className="fa-solid fa-trash-can"></i></button>                                                </div>
                                                </div>
                                            </div>
                                            :
                                            Outlet
                                        }
                                        {CantMenta > 0 ?
                                            <div className="col-12 border-top border-bottom bg-light py-2">
                                                <div className="row">
                                                    <div className="col-8 ">
                                                        <div className="row ">
                                                            <div className="col-12">
                                                                Caja Besos de Moza Menta 9x24 gr
                                                            </div>
                                                            <div className="col">
                                                                <b>Cantidad:</b> {CantMenta}
                                                                <button type="button" onClick={() => { CantMenta <= 1 ? setCantMenta(1) : setCantMenta(CantMenta - 1) }} className={"btn btn-outline-dark btn-sabores btn-sabores1"}><i class="fa-solid fa-minus"></i></button>
                                                                <button type="button" onClick={() => setCantMenta(CantMenta + 1)} className={"btn btn-outline-dark btn-sabores"}><i className="fa-solid fa-plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="div-precio col-2">
                                                        <b>S/9.90</b>
                                                    </div>
                                                    <div className="div-precio col-2">
                                                        <button onClick={() => { setCantMenta(0); setCantProductos(CantProductos - 1); }} className='trash-button'><i className="fa-solid fa-trash-can"></i></button>                                                </div>
                                                </div>
                                            </div>
                                            :
                                            Outlet
                                        }
                                        <div className="col-12 border-top border-bottom bg-light py-2">
                                            <div className="row">
                                                <div className="col-8 ">
                                                    <div className="row ">
                                                        <div className="col-12">
                                                        </div>
                                                        <div className="col">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="div-precio col-2">
                                                    <b>Total:</b>
                                                </div>
                                                <div className="div-precio col-2">
                                                    {Total}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="container">
                                    <div className="pb-2 ">
                                        <b>No tiene productos agregados</b>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {Compra ?
                        <div className="modal-footer">
                            <button onClick={() => { CabiarEstadoModal("Cerrar"); setCompra(false); setCantProductos(0); setCantClasico(0); setCantLucuma(0); setCantFresa(0); setCantMenta(0) }} className="btn btn-primary">Aceptar</button>
                        </div>
                        :
                        <div className="modal-footer">
                            {CantProductos > 0 ?
                                <button onClick={() => setCompra(true)} type="button" className="btn btn-success">Comprar</button>
                                :
                                Outlet
                            }
                            <button type="button" onClick={() => CabiarEstadoModal("Cerrar")} className="btn btn-danger">Cerrar</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ModalCarrito;
