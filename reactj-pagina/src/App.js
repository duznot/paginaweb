import React, { useState } from "react";
import Pagination from "./components/Paginationx";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    
      {
        userId: 1,
        id: 1,
        title: "son o bien hacer repeler los providentes que exceptúan la opción de la responsabilidad",
        body: "porque y el recibir\nrecibidos consecuencias expedidos y con\nresponsabilidad de la molestia para las cuales son totales\nnuestro asunto es sin embargo son restos que llegan al arquitecto"
      },
      {
        userId: 1,
        id: 2,
        title: "quien es este",
        body: "es asunto del tiempo de la vida\nseguir sin nada responsabilidad dolor bendito y dolores no\neludir blandura de la voluntad o no la molestia relega\nquien abriéndose no debidos posibles quien no sino ninguno"
      },
      {
        userId: 1,
        id: 3,
        title: "las molestias casi ejercen repeler quienes se sientan o",
        body: "y justo es por derecho\nplacer providente de todos los eligidos o hacia\nplacer doloroso o acusante que debe parecer\nmolestias para el odio y el trabajo y la voluntad"
      },
      {
        userId: 1,
        id: 4,
        title: "este y es el asunto",
        body: "nada y a menudo rechazando el placer\nes pero asumir la culpa de los asuntos\nquien aquí comodidad desconoce y sostiene el dolor en derecho\nquien son el placer de los asuntos en aquel querer"
      },
      {
        userId: 1,
        id: 5,
        title: "desconocen las cosas que odian",
        body: "desconocen el perdón solicitando es\notro o la molestia permanece pero es\nplacer todos posibles son placeres quien\nes o tener dolor no"
      },
      {
        userId: 1,
        id: 6,
        title: "dolor el gran ellos abren porque",
        body: "de manera que el cuerpo es el ni quien da el seguimiento\nmolestias para nosotros algo\nperspectivas y ni nadie abren la responsabilidad de la acusación\nplacer dolorosos quieren y el doloroso asunto"
      },
      {
        userId: 1,
        id: 7,
        title: "gran facilidad sin embargo",
        body: "dolor colocado por algunos y el vida\ngrande que quiere quien quiere sino nadie o a menudo\nciertamente repele excepto lo que porque\nson que seguir ellos o lo que aquellos"
      },
      {
        userId: 1,
        id: 8,
        title: "dolor dolor es mismo",
        body: "dignos abriendo dolor quien ellos\nfacilidades algunas ánimos así recibir quien así podemos con\npedir grande mayores excepto\nmismo hasta comodidad dolor de la voluntad de manera aut"
      },
        {
          userId: 1,
          id: 9,
          title: "desconocen el derecho a todo dolor temporal y acusaciones",
          body: "consecuencia del alma desconocen derecho dolor\nporque hacia\nvoluntad pero cómo o nosotros\ny es o lo que o providente placer sin embargo placer"
        },
        {
          userId: 1,
          id: 10,
          title: "opción molestias id porque él",
          body: "donde y expedita modo con oficio o grande\ndolores que repudian\nverdadero si está\nquienes voluntad que pero acusamos veracidad error"
        },
        {
          userId: 2,
          id: 11,
          title: "y en verdad porque alaban sin embargo",
          body: "deleite rechazando molestias localizadas no mínima llega quien placeres\nacusamos en él benditos están\no quien no placeres hasta comodidad quien ocurre\nhasta alma comodidad"
        },
        {
          userId: 2,
          id: 12,
          title: "en algunos tiempos odia es dolor",
          body: "por lo tanto id o grande\npresente porque y él odia y él placer y\nsabio porque nada estima localizado porque id voluntad\nocurre es distinción odio"
        },
        {
          userId: 2,
          id: 13,
          title: "dolores hacia en placer molestia y a menudo donde alma",
          body: "o dicho podemos ser molestia placer comodidad donde dolor\nél corrupto rechazando placer suyo asuntos\nes con que lo eligido mínimo\nsoportando rechazado asumir asunto por el arquitecto mismo"
        },
        {
          userId: 2,
          id: 14,
          title: "placer elegible opción",
          body: "huida y acusamos dolores soportando aquello placer\nno doloroso ni hacer\nhacia quien dolores molestias benditos\npero o placer total está iluminado"
        },
        {
          userId: 2,
          id: 15,
          title: "llega lo que tiempos",
          body: "reprobar quienes colocan\nquiere mínima oficio dolores impide repudiar molestias nombre\nplacer rechazado quien deleite\noficios grato vida"
        },
        {
          userId: 2,
          id: 16,
          title: "siéntete que percibes deseo dolores asuntos mismo laboriosos odio",
          body: "siente nombre sino cómo abrirse o\nmás allá ellos huyen mayores placeres porque\nplacer quien nadie que en alias porque es\nconsecuencia grande molestia acusamos él sino voluntad dicho"
        },
          {
            userId: 2,
            id: 17,
            title: "huye el placer pero molestias placer providente",
            body: "ellos placer y aut odia nacido de\nmás allá fuga molestias ningún\nlugar razón quien ellos\nquien nada razón nadie quiere hasta aut id donde"
          },
          {
            userId: 2,
            id: 18,
            title: "placer y por lo tanto verdadero temporal molestias",
            body: "llega donde quien\ntrabajo total resultado no dolor\nhasta y es repudiado\nes placer o deudas y grande"
          },
          {
            userId: 2,
            id: 19,
            title: "adquirir placer ilumina aut rechazados quien",
            body: "ilumina quien deseo providente está grande\nahí pero aut todo\nvoluntad mayores ningún resultado y\nadquirir donde él expedito está quienes placer"
          },
          {
            userId: 2,
            id: 20,
            title: "dolores a providente reciben en",
            body: "quien consecuencias dirige posible alguien amado similar\nrecibe además mismo amado\nellos verdad oficios ejercicio o huye aut necesidades totales\ntodo asunto resultado expedito de hecho conque explico"
          },
          {
            userId: 3,
            id: 21,
            title: "más allá de ellos mismos placeres mínimos porque así",
            body: "repelen algo presente dolor donde\npero total menos no por lo tanto\nnada trabajo molestias son dolor llega aquí rechazado voluntad\ntemporal y tener expedito son"
          },
          {
            userId: 3,
            id: 22,
            title: "dolor así donde a voluntad explico porque nombre",
            body: "ellos quien y mismo mismo recibe aut\npero todo no odio\nexpedito ellos molestia aut y más allá recuerdo recibe\nnombre impide esto"
          },
          {
            userId: 3,
            id: 23,
            title: "máximo id vida nada nunca",
            body: "verdad donde no eligendo\nlo que arquitecto donde no vida\nes aquello sit temporal doloroso huye lo que\ny y o bien benditos seguir ningún pero tener perspicaz"
          },
          {
            userId: 3,
            id: 24,
            title: "sin embargo aquí trabajo son dolores ocurren",
            body: "en verdad y de nada\ntodo placer porque quien\nplacer resultado nunca alguna son\ntotal rechazado id dignos aut pero más allá desean"
          },
          {
            userId: 3,
            id: 25,
            title: "recuerdo alias distinción donde quien",
            body: "nada resultado hasta\ntodo quien está o consecuencia\nmismo eligendo mismo molestias y todo error nuestro\nmolestias aquello tiempo porque y distinción"
          },
          {
            userId: 3,
            id: 26,
            title: "es y lo que odia quien no",
            body: "similar ser dolores nada acusamos\ntodo dolor huida resultado reproche huye rechazado tiempos\nperspectiva con hasta alabanza\ntodo aut molestias o verdadero"
          },
          {
            userId: 3,
            id: 27,
            title: "casi id y ellos tienen aut donde sin embargo",
            body: "él pero dolores mismo ser posible deudas localizadas\ndeudas quien quien y\nhasta lugar querer ellos aut odia fácil\nresultado recibe necesidades asunto pero inventor tiempos resultado"
          },
          {
            userId: 3,
            id: 28,
            title: "deleite nada y cuerpo sin placer seguir",
            body: "no y solicitar ex lo que hasta grandes\ngrandes rechazados total aut blandura molestias cuales aquello\nhasta placeres placer\nsimilar nuestro él"
          },
          {
            userId: 3,
            id: 29,
            title: "justo su culpa que necesidad ea",
            body: "odia grande hasta a menudo pero no quien\ntemporal además nada\nacusamos ilumina dolores aquello dolor\neligendo repudiado odia grande similar pero con mayores"
          },
          {
            userId: 3,
            id: 30,
            title: "de donde grande similar soportar",
            body: "alias dolor mismo\nimpide blandura no llega odio máximo\nblandura amado de él quien temporal porque sin embargo recuerdo\nde providente perspicaz porque"
          },        
  ]);
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className="App">
      <div className="container py-4">
        <div className="row">
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-3 mb-3" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5>
                    #{post.id} {post.title}
                  </h5>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>
  );
}

export default App;
