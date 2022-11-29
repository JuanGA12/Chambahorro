import React, { useState, useEffect } from "react";
import AuthService from "../../services/AuthService";
import TokenService from "../../services/TokenService";
import RevisionService from "../../services/RevisionService";
import { makeStyles } from "@material-ui/core/styles";
import toast, { Toaster } from 'react-hot-toast';

/**/
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {

} from "@fortawesome/free-regular-svg-icons";
const useStyles = makeStyles({
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    }
});


const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [type, setType] = useState(true);
    const home = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/"; 

    const handleFormSubmit = (event) => {
        event.preventDefault();

        let email = event.target.elements.email?.value;
        let password = event.target.elements.password?.value;

        var cred = { nombreUsuario: email, password: password };

        AuthService.login(cred).then(response => {
            TokenService.setId(response.data.id);
            TokenService.setRuc(response.data.ruc);
            TokenService.setToken(response.data.token);
            TokenService.setUsername(response.data.nombreUsuario);
            TokenService.setInitials(response.data.iniciales);
            TokenService.setAuthorities(response.data.authorities[0].authority);
            TokenService.setNames(response.data.nombres);
            setIsSubmitted(true);
            var d = {
                onboarding: false
            }
            localStorage.setItem("revision", JSON.stringify(d));

            window.location.replace(home);
            //window.location.reload();
        }).catch(error => {
            toast.error('La dirección de correo electrónico o la contraseña que has introducido no son correctas');
            console.log("error => " + error);
        });
    };

    /**Show and Hide Password**/
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const renderForm = (
        <div className="flex bg-gray-100">
            <div className="hidden lg:block">

            </div>
            <div className="h-screen lg:h-full w-full max-w-2xl bg-gray-bg1 flex-col flex mx-auto my-auto">
                <div className="flex-col flex mx-auto items-center w-full px-4 pt-8 pb-2">

                </div>

                <form className="bg-white shadow-md rounded px-6 md:px-36 py-6 my-6 mx-6" onSubmit={handleFormSubmit}>

                    <div className="py-4 text-gray-700 font-extrabold poppins text-center text-2xl" >
                        Inicia Sesión
                    </div>
                    <p className="pt-4 text-gray-700 text-sm sm:text-base poppins text-center">Organízate y colabora con</p>
                    <p className="pb-4 text-gray-700 text-sm sm:text-base poppins text-center">tu equipo en tiempo real</p>

                    <div className="relative w-full py-4">
                        <input placeholder="Correo" type="email" name="email" className="text-sm poppins bg-color-6  border-0 p-4 placeholder-gray-400 text-gray-700 rounded  focus:outline-none focus:ring w-full" />
                        <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 "></div>
                    </div>

                    <div className="relative w-full py-4">
                        <input InputProps={{ disableUnderline: true }} placeholder="Contraseña" name="password" value={values.password}
                            onChange={handlePasswordChange("password")} type={values.showPassword ? "text" : "password"}
                            className="text-sm poppins bg-color-6  border-0 p-4 placeholder-gray-400 text-gray-700 rounded  focus:outline-none focus:ring w-full" />
                        <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}>
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </div>
                    </div>
                  

                    <div className="text-gray-700 text-sm poppins text-center py-4 w-full">
                        <input className="hover:bg-sky-700 cursor-pointer w-full sm:w-52 px-2 py-3 text-white text-base font-bold bg-color-1 poppins rounded shadow" 
                        id="iniciarSesion" type="submit" value="Iniciar sesión" />
                    </div>
                    <div className="pt-2 pb-2 text-color-1 text-xs xm:text-base poppins text-center font-extrabold">
                    <a href="https://wa.me/51943731086?text=Hola%20Apolo,%20quiero%20cambiar%20mi%20contraseña."  target="_blank">
                    ¿Olvidaste tu contraseña?
                    </a>
                    
                    </div>
                    <div className="pt-2 pb-2 text-gray-700 text-xs xm:text-xs poppins text-center font-bold">
                        <p>
                        *Somos un piloto por invitación dirigido a un grupo de clientes Interbank. Para iniciar sesión sigue las indicaciones enviadas a tu correo.
                        </p>
                    </div>

                    {/*<div className="text-gray-700 text-sm poppins text-center py-6">
                        <p>¿Aún no tienes una cuenta?</p>

                        <a href="https://pilotoslabentana.typeform.com/to/Zl2xu0uV" className="p-2 w-52 px-2 py-3 text-color-1 text-base font-extrabold poppins rounded-2xl">
                            Regístrate ahora
                        </a>
                    </div>*/}

                </form>
            </div>
        </div>
    );

    return (
        <div className="ml-auto mr-auto">
            {isSubmitted ? null : renderForm}
        </div>
    );
};

export { Login }
