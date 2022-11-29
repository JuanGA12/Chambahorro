import { useNavigate } from "react-router-dom";
import TokenService from "../services/TokenService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { hideAction, showAction } from "../redux/actions/sidebarAction";

const HeaderWhite = () => {
    let navigate = useNavigate();
    const iniciales = TokenService.getInitials();
    const permisos = TokenService.getAuthorities();
    const [localShow, setLocalShow] = useState(false);
    const dispatch = useDispatch();
    const rev = JSON.parse(localStorage.getItem("revision"));

    const goHome = () => {
        navigate("/home");
    }

    const goTeam = () => {
        navigate("/team");
    }

    const goQuestions = () => {
        navigate("/questions");
    }

    const goExit = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload();
    }

    const changeState = () => {
        if (!localShow) {
            dispatch(showAction());
        }
        else {
            dispatch(hideAction());
        }
        setLocalShow(!localShow);
    }

    return (
        <div className="bg-color-3">
            <div className="bg-color-3 overflow-hidden shadow mb-1 md:mb-0">

                <div className="bg-color-3">
                    <div className="navbar px-6 sm:px-14 py-2">
                        <div className="flex items-center">
                            <img onClick={goHome} className="w-20 md:w-32 leading-relaxed inline-block py-2 cursor-pointer" src={require('../static/apolo-logo-blue.png')}></img>
                            <div className="inline-block h-12 ml-auto">
                            </div>
                            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                                <div className="flex items-center">
                                    <div className="">
                                        <a id="inicioHeaderWhite" className="px-3 py-2 flex items-center text-xs poppins font-extrabold leading-snug  text-color-4 hover:opacity-75 cursor-pointer "
                                            onClick={goHome}>
                                            <span className="">Inicio</span>
                                        </a>
                                    </div>
                                    <div className="" hidden={permisos == 'ROLE_COLABORADOR' || !rev.onboarding}>
                                        <a id="equipoHeaderWhite" className="px-3 py-2 flex items-center text-xs poppins font-extrabold leading-snug  text-color-4 hover:opacity-75 cursor-pointer "
                                            onClick={goTeam}>
                                            <span className="">Equipo</span>
                                        </a>
                                    </div>
                                    <div className="">
                                        <a id="preguntasFrecuentesHeaderWhite" className="px-3 py-2 flex items-center text-xs poppins font-extrabold leading-snug  text-color-4 hover:opacity-75 cursor-pointer"
                                            onClick={goQuestions}>
                                            <span className="">Preguntas Frecuentes</span>
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="https://wa.me/51943731086?text=Hola%20Apolo,%20tengo%20una%20consulta." target="_blank" className="px-3  py-2 flex items-center text-xs poppins font-extrabold leading-snug text-color-4 hover:opacity-75  cursor-pointer "
                                        >
                                            <span className="ml-2">Ayuda</span>
                                        </a>
                                    </div>
                                    <div className="">
                                        <a id="cerrarSesionHeaderWhite" className="px-3 py-2 flex items-center text-xs poppins font-extrabold leading-snug text-color-4 hover:opacity-75  cursor-pointer "
                                            onClick={goExit}>
                                            <span className="ml-2">Cerrar Sesión</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div id="inicialesHeaderWhite" className="inline-block px-2 py-1.5 bg-color-1 rounded-full poppins font-bold text-white">
                                {iniciales}
                            </div>

                            <div className="ml-2 pinline-block md:hidden cursor-pointer items-center">
                                <div className="flex items-center">
                                    <FontAwesomeIcon className="h-7" color="black" icon={faBars} onClick={changeState} />
                                </div>
                            </div>

                            {/*<button data-collapse-toggle="mobile-menu" type="button" className="text-white inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                                <svg className="w-6 h-6" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button                >*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HeaderWhite }