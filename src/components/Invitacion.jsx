import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import dress from "../assets/esmeralda/dressCodeIcon.svg";
import Countdown from "./Countdown";
import MusicScreen from "./MusicScreen";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import DressCodeEsmeralda from "./DressCodeEsmeralda";
import song from "../assets/song.mp3";

const Invitacion = () => {
  const targetDate = new Date("2025-11-22T21:00:00-03:00");

  const colorPrincipal = "#A7C7E7";
  const colorSecundario = "#A7C7E7";

  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#ffffff]">
      <div className="absolute z-40">
        <MusicScreen cancion={song} />
      </div>

    <div
        className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-center bg-cover bg-no-repeat font-eleganteText space-y-5 overflow-hidden bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1761147867/Disen%CC%83o_sin_ti%CC%81tulo_85_ch4xbf.jpg')] md:bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1761170507/Sin_ti%CC%81tulo_Sitio_web_1_mq3f4y.jpg')]"
        // style={{
        //   backgroundImage:
        //     "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1761147867/Disen%CC%83o_sin_ti%CC%81tulo_85_ch4xbf.jpg')",
        // }}
      >
        <div data-aos="fade-in">
          <h1 className="text-7xl md: font-cinzel text-gold z-10 italic mt-80 md:mt-96">
            Abril
          </h1>

          <div className="flex flex-col items-center mt-6 space-y-2">
            <div className="flex items-center justify-center space-x-6 text-[#4e4e4e]">
              <span className="border-t border-[#4e4e4e] w-20"></span>
              <p className="uppercase tracking-[0.3em] font-semibold text-lg">
                Sábado
              </p>
              <span className="border-t border-[#4e4e4e] w-20"></span>
            </div>
            <h2 className="text-6xl md:text-7xl font-cinzel text-gold">22</h2>
            <div className="flex items-center justify-center space-x-6 text-[#4e4e4e]">
              <span className="border-t border-[#4e4e4e] w-20"></span>
              <p className="uppercase tracking-[0.3em] font-semibold text-lg">
                Noviembre
              </p>
              <span className="border-t border-[#4e4e4e] w-20"></span>
            </div>
            <p className="text-[#4e4e4e] font-light tracking-[0.2em] text-2xl mt-1">
              2025
            </p>
          </div>
        </div>
      </div>

      <div>
        <section
          id="contador"
          className="bg-white py-10 border-y-4 border-[#A7C7E7]"
        >
          <Countdown
            targetDate={targetDate}
            containerClasses="my-8"
            backgroundColor="#e5e7eb"
            progressColor="#A7C7E7"
            textColor="black"
            valueClassName="text-3xl font-light"
            labelClassName="text-base font-thin"
          />
        </section>

        <section id="lugares" className="relative text-center bg-white">
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            hora_inicio="21:00 hs"
            hora_fin="05:00 hs"
            salon="Jano's Berisso"
            hora_civil="21:00hs"
          />
          <a
            href="https://maps.app.goo.gl/jitmzL4K9HsT4BKN7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-gray-700 my-5 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>
        {/* 
          <div className="bg-white border-b border-[#A7C7E7]">
            <InstagramWall
              userClass="text-[#A7C7E7]"
              logoClass="text-[#A7C7E7]"
              user="@mr.almada_"
            />
          </div> */}

        <div className="bg-[#A7C7E7] text-center relative text-white">
          <GoogleCalendarButton
            imgClass="text-[#A7C7E7]"
            buttonClass="border-white rounded-full"
            titleCalendar="XV de Abril"
            salon="Jano's Berisso, RP10 B1923, B1923 Berisso, Provincia de Buenos Aires"
            fechaComienzo="20251122T210000"
            fechaFin="20251123T050000"
          />
        </div>

        <div className="relative bg-white py-10">

          <img
            src="https://res.cloudinary.com/dfschbyq2/image/upload/v1761159941/Disen%CC%83o_sin_ti%CC%81tulo_35_xcmqrg.svg"
            alt="Decoración floral"
            className="absolute bottom-0 -left-10 w-32 md:w-48 opacity-90 pointer-events-none z-20"
            style={{ transform: "rotate(5deg)" }}
          />
          <DressCodeEsmeralda dressCode="Elegante" icon={dress} />
          <img
            src="https://res.cloudinary.com/dfschbyq2/image/upload/v1761159941/Disen%CC%83o_sin_ti%CC%81tulo_35_xcmqrg.svg"
            alt="Decoración floral"
            className="absolute bottom-0 -right-10 w-32 md:w-48 opacity-90 pointer-events-none z-20"
            style={{ transform: "scaleX(-1) rotate(5deg)" }}
          />
        </div>

        <DatosBancarios
          claseIcon="text-white"
          texto="Si deseas hacerme un regalo, te dejo los datos"
          claseContenedor="bg-[#A7C7E7] text-white"
          claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
          textSize="text-lg"
          background={{ backgroundColor: colorPrincipal }}
          styleBotonModal={{
            backgroundColor: "white",
            borderColor: "#9eba8a",
          }}
          claseBotonModal={{
            backgroundColor: "#A7C7E7",
            borderColor: "#A7C7E7",
          }}
          styleModal={{ backgroundColor: colorSecundario }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          cbu=""
          alias="Red.Ombu.Broma"
          banco="Banco Nación"
          nombre="Galli Verónica Adriana"
          claseModal="bg-[#A7C7E7]"
          borderModal="border-[#A7C7E7]"
          textColor="text-[#A7C7E7]"
        />

        <Asistencia
          clase="py-10 bg-white bg-fixed border-b-4 border-[#A7C7E7]"
          claseTitle="text-gray-700"
          claseButton="border-2 border-[#A7C7E7] font-semibold hover:bg-[#A7C7E7]  text-gray-700 hover:text-white rounded-full"
          linkAsistencia="https://wa.me/5492215382265?text=Hola%2C%20confirmo%20mi%20asistencia%20a%20los%20XV%20de%20Abril.%20Mi%20nombre%20completo%20es..."
        />

        <div className="font-dancingScript text-2xl bg-white">
          <TextoFinal textoFinal="Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única" textClass=""/>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
