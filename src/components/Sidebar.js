import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import TokenService from "../services/TokenService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { hideAction, showAction } from "../redux/actions/sidebarAction";

const Sidebar = () => {
  let navigate = useNavigate();
  const iniciales = TokenService.getInitials();
  const nombres = TokenService.getNames();
  const [isOpen, setOpen] = useState(false);

  const array = window.location.pathname.split("/");
  const ruta = array[1];

  const { show } = useSelector((state) => state.sidebarReducer);
  const dispatch = useDispatch();

  const handleIsOpen = () => {
    setOpen(!isOpen);
  }

  const closeSideBar = () => {
    setOpen(false);
  }

  const goExit = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  const changeState = () => {
    if(!show){
        dispatch(showAction());
    }
    else{
        dispatch(hideAction());
    }
  }

  return (
    <Menu right isOpen={show} onOpen={handleIsOpen} onClose={handleIsOpen} styles={ruta == 'home'? {bmBurgerBars: {
      background: '#fff'
    }} : {bmBurgerBars: {
      background: '#000'
    }}}>
      <ul className="list-none w-full">
        <li className="justify-end flex items-center">
          <span className="poppins text-black text-sm font-bold">{nombres}</span>&nbsp;
          <div className="inline-block px-2 py-1.5 bg-color-1 rounded-full poppins text-white font-bold">
            {iniciales}
          </div> &nbsp;
          <FontAwesomeIcon className="h-7" icon={faBars} onClick={changeState}  />
        </li>

        <li className="mt-3"><a className="poppins text-black text-sm font-medium" href="/home">Inicio</a></li>
        <li><a className="poppins text-black text-sm font-medium" href="/team">Equipo</a></li>
        <li><a className="poppins text-black text-sm font-medium" href="/questions">Preguntas frecuentes</a></li>
        <li><a className="poppins text-black text-sm font-medium" href="https://wa.me/51943731086?text=Hola%20Apolo,%20tengo%20una%20consulta." target="_blank">Ayuda</a></li>
        <li><a className="poppins text-black text-sm font-medium" onClick={goExit}>Cerrar sesión</a></li>
      </ul>
    </Menu>
  );
};

export { Sidebar };
