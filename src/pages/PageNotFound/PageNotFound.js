import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/home");
    }

    return (
        <div className="w-full">
            <div className="w-full bg-color-1 py-10 h-screen flex items-center">
                <div className="mx-auto">

                    <div className="mx-auto w-full text-center">
                        <p className="text-white font-bold poppins text-2xl md:text-4xl">¡Ups! Algo salió mal</p>
                        <p className="text-white font-bold poppins text-base md:text-xl mt-2 md:mt-4">Estamos construyendo lo mejor para ti.</p>
                        <p className="text-white font-bold poppins text-base md:text-xl">Prueba intentarlo en un minuto</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export { PageNotFound }