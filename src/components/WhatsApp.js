import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import TokenService from "../services/TokenService";

const WhatsApp = () => {
    const permisos = TokenService.getAuthorities();

    return (
        <div hidden={permisos == 'ROLE_COLABORADOR'}>
            <a href="https://wa.me/51943731086?text=Hola%20Apolo,%20tengo%20una%20consulta."
                className="whatsapp flex items-center justify-center text-white h-16 sm:h-20 w-16 sm:w-20 fixed text-2xl sm:text-3xl
            rounded-full z-50 bottom-10 xl:botton-4 right-4 sm:bottom-20 sm:right-5" target="_blank" title="Contactar a soporte por whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} size="xl" />
            </a>
        </div>

    )
}

export { WhatsApp }