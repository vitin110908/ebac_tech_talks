    AOS.init();

    const dataDoEnvento = new Date("Dec 1, 2026 19:00:00")
    const timeStampDoEnvento = dataDoEnvento.getTime();

    const contaAsHoras = setInterval(function()  {
        const agora = new Date();
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEnvento - timeStampAtual;

        const diaMs = 1000 * 60 * 60 * 24;
        const horaEms = 1000 * 60 * 60;
        const Minutos = 1000 * 60 ;

        const diasAteOEvento =  Math.floor(distanciaAteOEvento / diaMs );
        const horaAteOEvento = Math.floor((distanciaAteOEvento % diaMs) / horaEms);
        const MinutosAteOEvento = Math.floor((distanciaAteOEvento % horaEms) / Minutos); 
        const seguntosAteOEvento = Math.floor ((distanciaAteOEvento % Minutos) / 1000)

        console.log(diasAteOEvento);
        console.log(horaAteOEvento);
        console.log(MinutosAteOEvento);
        console.log(seguntosAteOEvento)


        document.getElementById ('contador').innerHTML = `${diasAteOEvento}d ${horaAteOEvento}h ${MinutosAteOEvento}m ${seguntosAteOEvento}s `;

        if (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = "Evento expirado";
        }
    }, 1000);