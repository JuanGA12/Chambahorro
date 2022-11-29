import background from "../../static/chambahorro_rectangle.png";
import { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
    const login = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/login";
    const goHome = () => {
        window.location.replace(login);
    }
    const [showModal, setShowModal] = useState(false);

    const modal = (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-700 bg-opacity-75 transition-opacity">
            <div className="relative w-140 ">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="grid justify-items-end p-3 rounded-t">
                        <button className="bg-transparent border-0" onClick={() => setShowModal(false)}>
                            <FontAwesomeIcon className="opacity-7 h-8 w-8 text-xl block" icon={faClose} />
                        </button>
                    </div>

                    <div className="mx-20 flex-auto text-center">
                        <h1 className="text-2xl font-semibold">Envíanos tu información para que podamos contactarnos contigo</h1>
                    </div>
                    
                    <div className="mx-20 flex-auto">
                        <form className="w-full" onSubmit={() => setShowModal(false)}>
                            <div className="items-center justify-center w-full pt-4">
                                <label className="block">*Nombres</label>
                                <div className="w-full pt-1">
                                    <input type="text" name="nombres" required className="w-full rounded" />
                                </div>
                            </div>

                            <div className="items-center justify-center w-full pt-4">
                                <label className="block">*Apellidos</label>
                                <div className="w-full pt-1">
                                    <input type="text" name="nombres" required className="w-full rounded" />
                                </div>
                            </div>

                            <div className="items-center justify-center w-full pt-4">
                                <label className="block">*Correo</label>
                                <div className="w-full pt-1">
                                    <input type="text" name="nombres" required className="w-full rounded" />
                                </div>
                            </div>

                            <div className="items-center justify-center w-full pt-4">
                                <label className="block">*Número de celular</label>
                                <div className="w-full pt-1">
                                    <input type="text" name="nombres" required className="w-full rounded" />
                                </div>
                            </div>

                            <div className="flex items-center justify-center  rounded-b mb-8 mt-8">
                                <button className="py-4 px-20 rounded-md bg-blue text-white text-base leading-5 font-semibold" onClick={() => setShowModal(false)}>
                                    ¡Enviar!
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mx-20 flex-auto text-center mb-12">
                        <h1 className="text-sm font-normal">Al hacer clic en "¡Enviar!" aceptas los Términos y condiciones y Política de tratamiento de datos</h1>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="">
            <div className="py-3 px-48 flex items-center">
                <img className="w-36" src={require('../../static/chambahorro_logo.png')} />
                <a className="ml-auto text-gray text-base leading-5 font-semibold cursor-pointer">¿Qué es?</a>
                <a className="ml-8 text-gray text-base leading-5 font-semibold cursor-pointer">¿Como funciona?</a>
                <a className="ml-8 text-gray text-base leading-5 font-semibold cursor-pointer">Me interesa</a>
                <button className="ml-8 py-4 px-16 rounded-md bg-blue text-white text-base leading-5 font-semibold" onClick={() => setShowModal(true)}>Me interesa</button>
            </div>

            <div className="bg-sky h-10 flex items-center justify-center">
                <h1 className="text-sm font-semibold">Chambahorro es una iniciativa de Interbank y nos encontramos en modo prueba.</h1>
            </div>

            {/*<img className='w-full' src={require('../../static/Rectangle.png')} />*/}

            <div className="w-full banner-radius1" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', }}>
                <div className="py-20 px-48 w-full h-full flex items-center grid grid-cols-2 gap-44">
                    <div className="">
                        <h1 className="text-6xl font-bold leading-80 text-white"><span className="text-blue">Ahorra</span> y solicita un <span className="text-blue">crédito</span> para tu negocio</h1>
                        <img className="h-6 my-10" src={require('../../static/chambahorro_respaldo.png')} />
                        <button className="py-4 px-16 rounded-md bg-blue text-white text-base leading-5 font-semibold" onClick={goHome}>Me interesa</button>
                    </div>
                    <div className="">
                        <img className="w-full" src={require('../../static/chambahorro_banner.png')} />
                    </div>
                </div>
            </div>

            <div className="w-full py-28 px-48 flex items-center grid grid-cols-3 gap-0">
                <img className="" src={require('../../static/chambahorro_celular.png')} />
                <div className="col-span-2 pl-40">
                    <h1 className="text-5xl font-bold">¿Qué es Chambahorro?</h1>
                    <h1 className="text-xl font-normal mt-6">Es un crédito con garantía parcial apalancado en el ahorro que te ayudará a cumplir las metas de tu negocio</h1>
                </div>
            </div>

            <div className="w-full py-28 pl-48 flex items-center grid grid-cols-3 bg-blue">
                <div className="col-span-2 pr-56">
                    <h1 className="text-5xl font-bold text-white">¿Cómo funciona?</h1>

                    <div className="inline-flex w-full mt-12">
                        <img className="w-10 h-10 mr-6" src={require('../../static/chambahorro_icon1.png')} />
                        <div className="text-white">
                            <h1 className="text-xl font-semibold">1. Elije un plan y ahorra</h1>
                            <h1 className="text-xl font-normal">Tendrás diferentes planes de ahorro que podrás complir en un plazo de 3 meses.</h1>
                            <hr className="my-8"></hr>
                        </div>
                    </div>

                    <div className="inline-flex w-full">
                        <img className="w-10 h-10 mr-6" src={require('../../static/chambahorro_icon2.png')} />
                        <div className="text-white">
                            <h1 className="text-xl font-semibold">2. Deja tu ahorro como garantía</h1>
                            <h1 className="text-xl font-normal">Lo que hayas ahorrado quedará como garantía y podrás desembolsar tu crédito.</h1>
                            <hr className="my-8"></hr>
                        </div>
                    </div>

                    <div className="inline-flex w-full">
                        <img className="w-10 h-10 mr-6" src={require('../../static/chambahorro_icon3.png')} />
                        <div className="text-white w-full">
                            <h1 className="text-xl font-semibold">3. Paga tu crédito</h1>
                            <h1 className="text-xl font-normal">Pagarás tu cuota durante 12 meses.</h1>
                            <hr className="my-8 w-full"></hr>
                        </div>
                    </div>

                    <div className="inline-flex w-full">
                        <img className="w-10 h-10 mr-6" src={require('../../static/chambahorro_icon4.png')} />
                        <div className="text-white">
                            <h1 className="text-xl font-semibold">4. Recupera tu ahorro</h1>
                            <h1 className="text-xl font-normal">Luego de pagar tu crédito podrás libera tu ahorro.</h1>
                        </div>
                    </div>

                </div>
                <img className="" src={require('../../static/chambahorro_bodega.png')} />
            </div>

            <div className="w-full flex py-28">
                <div className="w-full">
                    <img className="ml-auto" src={require('../../static/chambahorro_rectangulo.png')} />
                </div>

                <div className="w-full mt-16 px-48 absolute">
                <div class="grid grid-cols-4 flex items-center">
                    <div></div>
                    <div className="col-span-3 text-5xl text-center font-bold">Descubre el plan a tu medida</div>
                </div>

                <div class="grid grid-cols-4 flex items-center">
                    <div></div>
                    <div className="py-16 text-2xl text-center font-bold">Plan 1</div>
                    <div className="py-16 text-2xl text-center font-bold">Plan 2</div>
                    <div className="py-16 text-2xl text-center font-bold">Plan 3</div>
                </div>

                <div class="grid grid-cols-4 flex items-center">
                    <div></div>
                    <div className="text-center">
                        <h1 className="text-base font-normal">Te prestamos</h1>
                        <h1 className="text-3xl font-extrabold">S/ 1,000</h1>
                    </div>
                    <div className="text-center">
                        <h1 className="text-base font-normal">Te prestamos</h1>
                        <h1 className="text-3xl font-extrabold">S/ 3,000</h1>
                    </div>
                    <div className="text-center">
                        <h1 className="text-base font-normal">Te prestamos</h1>
                        <h1 className="text-3xl font-extrabold">S/ 5,000</h1>
                    </div>
                </div>

                <div class="grid grid-cols-4 flex items-center">
                    <div></div>
                    <div className="py-16 text-center">
                        <button className="py-4 px-12 rounded-md bg-blue text-white text-base leading-5 font-semibold" onClick={goHome}>Me interesa</button>
                    </div>
                    <div className="py-16 text-center">
                        <button className="py-4 px-12 rounded-md bg-blue text-white text-base leading-5 font-semibold" onClick={goHome}>Me interesa</button>
                    </div>
                    <div className="py-16 text-center">
                        <button className="py-4 px-12 rounded-md bg-blue text-white text-base leading-5 font-semibold" onClick={goHome}>Me interesa</button>
                    </div>
                </div>

                <div class="grid grid-cols-4 flex items-center">
                    <div className="text-xl font-bold">Condiciones</div>
                    <div></div>
                    <div className="shadow-side"></div>
                    <div></div>
                </div>

                <div class="grid grid-cols-4 flex items-center">
                    <div className="py-4">
                        <h1 className="text-base font-medium">Ahorra</h1>
                        <h1 className="text-base font-normal">Cada mes ahorra el siguiente monto</h1>
                    </div>
                    <div className="text-base text-center font-normal"><span className="font-bold">S/ 100</span> durante 3 meses</div>
                    <div className="text-base text-center font-normal"><span className="font-bold">S/ 300</span> durante 3 meses</div>
                    <div className="text-base text-center font-normal"><span className="font-bold">S/ 500</span> durante 3 meses</div>
                </div>

                <hr></hr>

                <div class="grid grid-cols-4 flex items-center">
                    <div className="py-4">
                        <h1 className="text-base font-medium">Te prestamos</h1>
                        <h1 className="text-base font-normal">Es el monto que te prestamos</h1>
                    </div>
                    <div className="text-base text-center font-normal">S/ 1,000</div>
                    <div className="text-base text-center font-normal">S/ 3,000</div>
                    <div className="text-base text-center font-normal">S/ 5,000</div>
                </div>

                <hr></hr>

                <div class="grid grid-cols-4 flex items-center">
                    <div className="py-4">
                        <h1 className="text-base font-medium">Cuota</h1>
                        <h1 className="text-base font-normal">El pago que realizarás cada mes</h1>
                    </div>
                    <div className="text-base text-center font-normal">S/ 105.52</div>
                    <div className="text-base text-center font-normal">S/ 317.00</div>
                    <div className="text-base text-center font-normal">S/ 527.60</div>
                </div>

                <hr></hr>

                <div class="grid grid-cols-4 flex items-center">
                    <div className="py-4">
                        <h1 className="text-base font-medium">Plazo</h1>
                        <h1 className="text-base font-normal">Tiempo en el que  pagarás el préstamo</h1>
                    </div>
                    <div className="text-base text-center font-normal">12 meses</div>
                    <div className="text-base text-center font-normal">12 meses</div>
                    <div className="text-base text-center font-normal">12 meses</div>
                </div>

                <hr></hr>

                <div class="grid grid-cols-4 flex items-center">
                    <div className="py-4">
                        <h1 className="text-base font-medium">TCEA*</h1>
                        <h1 className="text-base font-normal">Intereses que pagarás por el costo del préstamo</h1>
                    </div>
                    <div className="text-base text-center font-normal">50%</div>
                    <div className="text-base text-center font-normal">50%</div>
                    <div className="text-base text-center font-normal">50%</div>
                </div>
            </div>
            </div>

            <div className="bg-green px-80 py-16 banner-radius2 mt-80">
                <div className="flex">
                    <img className="w-14 h-14 mt-48" src={require('../../static/chambahorro_perfil.png')} />
                    <div className="ml-8 text-white">
                        <h1 className="text-3xl font-bold text-center px-32">Chamberos que están más cerca de sus sueños</h1>
                        <h1 className="mt-8 text-3xl font-normal">“Estaba planeando mi campaña navideña y ningún banco quería darme un crédito y tampoco una solución. Interbank con Chambahorro me dieron la oportunidad de acceder a un crédito para invertirlo en productos para mi campaña”.</h1>
                        <h1 className="mt-6 text-xl font-semibold">Maria Rojas</h1>
                        <h1 className="mt-1 text-base font-normal">Bodega “Vendemás” </h1>
                    </div>
                </div>
            </div>

            <div className="w-full py-28 px-48 ">
                <div className="w-full flex items-center grid grid-cols-3 gap-24">
                    <div>
                        <h1 className="text-base font-semibold">Contáctanos</h1>
                        <h1 className="mt-2 text-base font-normal">contacto@chambahorro.com.pe</h1>
                        <h1 className="mt-4 text-base font-normal">(+51) 993 188 128</h1>
                    </div>

                    <div>
                        <h1 className="text-base font-semibold">Legales</h1>
                        <h1 className="mt-2 text-base font-normal">Términos y condiciones</h1>
                        <h1 className="mt-4 text-base font-normal">Política de privacidad de datos</h1>
                    </div>

                    <div>
                        <h1 className="text-base font-semibold">¿Quiénes somos?</h1>
                        <h1 className="mt-2 text-base font-normal">Somos una página web gratuita que busca</h1>
                        <h1 className="mt-4 text-base font-normal">ayudarte a obtener un</h1>
                    </div>
                </div>
                <div className="w-full mt-4 flex items-center grid grid-cols-3 gap-24">
                    <div className="col-span-2"></div>
                    <div className="flex items-center">
                        <h1 className="text-base">Con el respaldo de</h1>
                        <img className="h-6 ml-4" src={require('../../static/chambahorro_logoibk2.png')} />
                    </div>
                </div>

                <hr className="my-14"></hr>

                <h1 className="text-base font-normal text-center">2022 Chambahorro. Todos los derechos reservados</h1>
            </div>

            {showModal ? modal : null}

        </div>
    );
}

export { Landing }