// Función para actualizar el temporizador
function actualizarTemporizador() {
    const fechaFutura = new Date('January 8, 2025 00:00:00');
    const ahora = new Date();
    const tiempoRestante = fechaFutura - ahora;

    if (tiempoRestante > 0) {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        // Mostrar el tiempo restante en el formato: Faltan: d:h:m:s
        document.getElementById("contador").innerHTML =
            `Faltan: ${dias}d ${horas}h ${minutos}m ${segundos}s`;

        // Bloquear las barras laterales
        document.querySelectorAll('.barra-lateral').forEach(el => {
            el.style.pointerEvents = "none";
        });

        // Ocultar las imágenes mientras no haya llegado la fecha
        document.getElementById("imagenesGaleria").style.display = "none";

        // Mostrar el reproductor de YouTube (por si estaba oculto antes)
        const reproductor = document.getElementById("reproductor");
        if (reproductor) {
            reproductor.style.display = "block";
        }

        // Asegurarse de que el mensaje personalizado esté oculto
        document.getElementById("mensajeCumpleaños").style.display = "none";

    } else {
        // Cambiar texto del contador a "🎉VEINTE MÁS UNO🎉"
        document.getElementById("contador").innerHTML = "🎉VEINTE MÁS UNO🎉";

        // Mostrar el mensaje personalizado
        const mensajePersonalizado = `Amor, tus cumpleaños nunca fueron simples como pensaste que los eran, la mayoría de las veces se arruinaban por culpa ajena a la tuya pero quiero que sepas que le dedique todo el amor del mundo a esto, como siempre te lo mereces. Así de linda, hermosa, feliz, preciosa, con sus antibajos, con su manera, con su caracter, con todo el conjunto de cosas que tenes vos hacen que tengas una personalidad distinta a cualquier ser humano en este planeta. La verdad que si te tengo que describir con palabras es que sos el amor de mi vida, que sos una persona con la cual se preocupa del resto y siempre está cuando uno lo necesita. No puedo evitar no emocionarme cuando estoy con vos, porque sé que un futuro nuestro nos espera y que siempre siempre siempre vamos a estar juntos ante adversidades, lindos días o días complicados. Vos llegaste para encaminar mi vida para bien, y acá estamos, juntos superando todas las cosas día a día. Nada es fácil y todo lleva su recorrido para estar donde estamos hoy y sinceramente yo no me puedo quejar de nada, simplemente que disfrutes tu cumpleaños conmigo, realmente soy un re afortunado de tenerte y de acompañarte a todos lados y que siempre sepas algo, ni yo, ni nadie te va a controlar o van a cambiar tus sentimientos, algo que vos sentís es totalmente personal y está bien que tengas todo tipo de sentimientos, sos una persona que va más allá del límite, que hace todo para no tirar la toalla, que nunca se rinde ante situaciones que cualquier persona ya no hubiera soportado y eso te lo valoro un montón. Te merecés esto y mucho más Maca, yo siendo sinceros soy un pibe afortunado de tenerte y no digas que no, porque si lo soy y que personas como vos no se tienen en este planeta o al menos no hay más en el mundo que no seas vos. Te amo con mi vida entera, me esforcé banda programando esto de 0 y espero que te haya re gustado todo, te amo mi vida sos el amor de mi vida y sos mi todo. De verdad quiero pasar toda mi vida con vos, estar juntos por siempre y que ante adversidades o cosas de la vida que podamos pasar siempre siempre eso nos junte a nosotros. Porque unidos somos todo, podemos con todo y muchisimo más. Posta estoy muy ansioso y quiero que llegue la hora para poder formar una familia hermosa con vos, como siempre lo sos y que todo todo se cumpla. No doy más de las ganas. TE AMO CON TODA MI VIDA HEROMSAAAAAAAA ¡FELICES 21 BEBEEEEEEEEEEEEEEEEEEEEEEEEEE! MIAU Y MUAK 😍😍😍`;

        // Mostrar el mensaje personalizado
        document.getElementById("mensajeCumpleaños").innerText = mensajePersonalizado;
        document.getElementById("mensajeCumpleaños").style.display = "block";

        // Eliminar el reproductor de YouTube
        const reproductor = document.getElementById("reproductor");
        if (reproductor) {
            reproductor.style.display = "none";
        }

        // Mostrar las imágenes cuando llegue el día
        document.getElementById("imagenesGaleria").style.display = "block";

        // Cambiar título y subtítulo
        document.getElementById("titulo").innerText = "¡FELIZ CUMPLE AMOR DE MI VIDA!";
        document.getElementById("subtitulo").innerText = "TE AMO CON TODA MI VIDA, SOS TODO PARA MI Y ESPERO QUE TE GUSTE LO QUE ESTÁS POR LEER BEBE.";
        
        // Reproducir el audio de fondo cuando llegue el contador a 0
        const audioFondo = document.getElementById("audioFondo");
        audioFondo.play(); // Reproduce el audio   

        document.body.style.background = "linear-gradient(135deg, #ff99cc, #ff1f82)";
        document.getElementById("contador").style.animation = "explosionTexto 2s ease";

        confetti({
            particleCount: 60,
            spread: 60,
            origin: { y: 0.6 }
        });
    }
}


// Función para crear globos aleatorios
// Función para crear globos aleatorios
function crearGlobo() {
    const globosContainer = document.getElementById("globos-container");
    const globosActivos = document.querySelectorAll('.globo');
    
    // Limitar a 5 globos en pantalla (puedes ajustarlo según sea necesario)
    if (globosActivos.length < 10) {
        const globo = document.createElement("div");
        globo.classList.add("globo");

        // Colocar el globo en una posición aleatoria en la pantalla
        const left = Math.random() * window.innerWidth;
        const top = Math.random() * window.innerHeight;
        globo.style.left = `${left}px`;
        globo.style.top = `${top}px`;

        // Añadir el globo al contenedor
        globosContainer.appendChild(globo);

        // Eliminar el globo después de un tiempo (cuando termina la animación)
        setTimeout(() => {
            globo.remove();
        }, 5000); // 5 segundos hasta que el globo desaparezca
    }
}

// Función para iniciar la creación de globos
document.getElementById("contador").addEventListener("mouseover", () => {
    // Crear un globo sin cooldown
    crearGlobo();
});

function crearEmoji() {
    const emojiContainer = document.createElement("div");
    emojiContainer.textContent = "❤️";
    emojiContainer.style.position = "absolute";
    emojiContainer.style.left = `${Math.random() * window.innerWidth}px`;
    emojiContainer.style.top = `${Math.random() * window.innerHeight}px`;
    emojiContainer.style.fontSize = "3em";
    document.body.appendChild(emojiContainer);

    setTimeout(() => {
        emojiContainer.remove();
    }, 1000); // Duración de la animación
}

document.getElementById("contador").addEventListener("mouseover", crearEmoji);

const frases = [
    "Te amo más que ayer, pero menos que mañana.",
    "Cada segundo sin vos se me hace eterno.",
    "Sos mi razón de vivir.",
    "Gracias por hacerme sentir seguro conmigo mismo.",
    "Mi vida no seria igual sin vos.",
    "Amo tu sonrrisa",
    "Tus lunares me encantan <3",
    "Cuando sean las 12...",
    "... vas a ver por qué te amo tanto"
];

function mostrarFrase() {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("mensajeCumpleaños").innerText = frase;
}

setInterval(mostrarFrase, 2000); // Cambia de frase cada 2 segundos

// Llamada inicial para actualizar el temporizador
setInterval(actualizarTemporizador, 1000);
