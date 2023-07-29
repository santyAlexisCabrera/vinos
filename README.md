<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Vinos Azteca</title>
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
    <link rel="stylesheet" href="estilo1.css">
</head>
<body>
    <!-- SECCION INICIO -->
    <section id="inicio">
        <!-- ENCABEZADO --> 
        <header>
            <div class="contenido-header">
                <div class="logo">
                    <img src="img/Logo Vinos Azteca.png" class="img" alt="">
                </div>
                <nav id="nav">
                    <ul>
                        <li class="menu">
                            <a href="#inicio" onclick="selecciona()">
                                <i class="fa-solid fa-house"></i>
                                <span>Inicio</span>
                                
                            </a>
                        </li>
                        <li class="menu">
                            <a href="#vinos" onclick="selecciona()">
                                <i class="fa-solid fa-wine-glass"></i>
                                <span> Tipo de vinos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#platillos" onclick="selecciona()">
                                <i class="fa-sharp fa-solid fa-utensils"></i>
                                <span>Tipo de platillos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#blog" onclick="selecciona()">
                                <i class="fa-solid fa-folder"></i>
                                <span>Blog</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contacto" onclick="selecciona()">
                                <i class="fa-solid fa-phone"></i>
                                <span>Contacto</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
    
                    <div class="social">
                        <a href="tel:+722-406-6256">
                            <i class="fa-solid fa-phone"></i>
                            722-406-6256
                        </a>
                        <a href="https://www.instagram.com/vinedosazteca/" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/watch?v=DGa3XYAuYEI" target="_blank">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    <div class="nav-responsive" id="bar" onclick="mostrarOcultar()">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
        </header>

        <!-- CARRUSEL -->
        <div class="carrusel">
            <div class="gallery js-flickity" data-flickity-options='{"wrapAround":true,
            "pageDots":false, "autoPlay":true}'>

            <div class="gallery-cell">
                    <img src="img/img1.jpg" alt="">
                </div>
                <div class="gallery-cell">
                    <img src="img/img2.jpg" alt="">
                </div>
                <div class="gallery-cell">
                    <img src="img/img3.jpg" alt="">
                </div>
                <div class="gallery-cell">
                    <img src="img/img4.jpg" alt="">
                </div>
                <div class="gallery-cell">
                    <img src="img/img5.jpg" alt="">
                </div>
                <div class="gallery-cell">
                    <img src="img/img6.jpg" alt="">
                </div>
            </div>
            <div class="info">
                <h2>Vinos exquisitos para degustar</h2>
                <p>Elaborados de forma artesanal, con mucho esmero, cuidado y amor.</p>
            </div>
        </div>
    </section>

    <!-- SECCION DE BOTELLAS DE VINO-->
    <section id="vinos">
        <h2>Tipo de vinos</h2>
        <div class="fila">
            <div class="item">
                <div class="icono">
                    <img src="img/v1.png" alt="">
                </div>
                <div class="info">
                    <h3>Pretexto</h3>
                    <br>
                    <p> Cabernet Sauvignon, Cabernet Franc, Malbec, Merlot, 
                        <br>
                        Syrah y Tempranillo
                        <br>
                        <br>
                        Cosecha: 2018/ 2019
                        <br>
                        <br>
                        Contenido Alcohólico: 13%
                        <br>
                        <br>
                        Temperatura de servicio: 17 a 18°C
                    <br>
                    <br>
                    Descripción del vino:
                    <br>
                    <br>
                    compuesto de 3 tipos de roble
                    <br>
                    (Americano, Francés y Húngaro)</p>
                </div>
            </div>
            <div class="item">
                <div class="icono">
                    <img src="img/v3.png" alt="">
                </div>
                <div class="info">
                    <h3>Cahuayo</h3>
                    <br>
                    <p> Cabernet Sauvignon y Malbec
                        <br>
                        <br>
                        Cosecha: 2018/ 2019
                        <br>
                        <br>
                        Contenido Alcohólico: 13%
                        <br>
                        <br>
                        Temperatura de servicio: 17 a 18°C
                    <br>
                    <br>
                    Descripción del video:
                    <br>
                    <br>
                    En nariz es frutal e intenso, recuerda la fruta roja y negra madura</p>
                </div>
            </div>
            <div class="item">
                <div class="icono">
                    <img src="img/v4.png" alt="">
                </div>
                <div class="info">
                    <h3>Rosillo</h3>
                    <br>
                    <p> Vino Merlot 100%
                        <br>
                        <br>
                        Cosecha: 2021
                        <br>
                        <br>
                        Contenido Alcohólico: 12.5%
                        <br>
                        <br>
                        Temperatura de servicio: 8 a 10°C
                    <br>
                    <br>
                    Descripción del video: 
                    <br>
                    <br>
                    Color rosado intenso.</p>
                </div>
            </div>
        </div>
        <div class="fila">
            <div class="item">
                <div class="icono">
                    <img src="img/v5.png" alt="">
                </div>
                <div class="info">
                    <h3>Apertura Blanco</h3>
                    <br>
                    <p> Tipo de vino: Vermuth
                        <br>
                        <br>
                        Contenido Alcohólico: 14%
                        <br>
                        <br>
                        Temperatura de servicio: 8 a 10°C 
                    <br>
                    <br>
                    descrición del vino:
                    <br>
                    <br>
                    compuesto de vino, ajenjo y otras sustancias amargas.</p>
                </div>
            </div>
            <div class="item">
                <div class="icono">
                    <img src="img/v6.png" alt="">
                </div>
                <div class="info">
                    <h3>Colibri</h3>
                    <br>
                    <br>
                    <p> Malbec, Tempranillo y Syrah
                        <br>
                        <br>
                        Cosecha: 2019
                        <br>
                        <br>
                        Contenido Alcohólico: 12%
                        <br>
                        <br>
                        Temperatura de servicio: 17 a 18°C 
                    <br>
                    <br>
                    Descripción del vino:
                    <br>
                    <br>
                    De color sutil parecido a la piel de un durazno, un rosado pálido muy finos.
                    </p>
                </div>
            </div>
            <div class="item">
                <div class="icono">
                    <img src="img/v7.png" alt="">
                </div>
                <div class="info">
                    <h3>Tordillo</h3>
                    <br>
                    <br>
                    <p> Blanc de blancs
                        <br>
                        <br>
                        Cosecha: 2021
                        <br>
                        <br>
                        Contenido Alcohólico: 12%
                        <br>
                        <br>
                        Temperatura de servicio: 8 a 10°C</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECCION DE PLATILLOS-->
    <section id="platillos">
        <h2>Tipo de Platillos</h2>

        <div class="fila">
            <div class="item">
                <img src="img/p1.png" alt="">
                <p>ensalada rusa</p>
            </div>
            <div class="item">
                <img src="img/p2.png" alt="">
                <p>ensalada caprese</p>
            </div>
            <div class="item">
                <img src="img/p3.png" alt="">
                <p>sirlon</p>
            </div>
        </div>
        <div class="fila">
            <div class="item">
                <img src="img/p4.png" alt="">
                <p>ensalada cesar</p>
            </div>
            <div class="item">
                <img src="img/p5.png" alt="">
                <p>ensalada de mago</p>
            </div>
            <div class="item">
                <img src="img/p6.png" alt="">
                <p>pasta a la boloñesa</p>
            </div>
        </div>
        
    </section>

    <!-- SECCION BLOG-->
    <section id="blog">
        <h2>Blog</h2>
        <!-- carrusel de los items del blog-->
        <div class="galeria-blog js-flickity" data-flickity-options='{"wrapAround":true,
            "pageDots":true}'>
            <div class="gallery-cell">
                <div class="item">
                    <div class="foto">
                        <img src="img/pr1.jpg" alt="">
                    </div>
                    <div class="info">
                        <h3>El arte de personalizar vinos</h3>
                        <p>La calidad de los vinos personalizados está respaldada por Viñedos Azteca, con vino queretano.</p>
                    </div>
                </div>
            </div>

            <div class="gallery-cell">
                <div class="item">
                    <div class="foto">
                        <img src="img/u1.jpg" alt="">
                    </div>
                    <div class="info">
                        <h3>Hacienda</h3>
                        <p>Ubicados en el Municipio de Ezequiel Montes en el estado de Querétaro, ven y disfruta la hacienda, nuestras instalaciones que te transportan al México de la época de las haciendas, cuando las labores del día a día se realizaban al tiro de caballos.</p>
                    </div>
                </div>
            </div>

            <div class="gallery-cell">
                <div class="item">
                    <div class="foto">
                        <img src="img/en1.jpg" alt="">
                    </div>
                    <div class="info">
                        <h3>Contactanos</h3>
                        <p>Teléfono de oficina 441 2772978 de martes a domingo de 10:00 a 17:00 horas. Informes y reservaciones vía WhatsApp al 414 2310395 de miércoles a domingo de 11:00 a 18:00 horas, martes dia de descanso. Por contingencia de COVID19 es imprescindible reservar ya que tenemos cupo limitado y el uso de cubre bocas es obligatorio..</p>
                    </div>
                </div>
            </div>
        
        </div>

        <a href="index2.html" target="_blank"> <button>Ver Más</button></a>
    </section>

    <!-- SECCION CONTACTO -->
    <section id="contacto">
        <div class="fila">
            <div class="col">
                <h1>Vinos Azteca</h1>
            </div>
            <div class="col">
                <h3>Menú</h3>
                <a href="#">Inicio</a>
                <a href="#">Vinos</a> 
                <a href="#">Platillos</a> 
                <a href="#">Blog</a>
                <a href="#">contacto</a> 
            </div>
            <div class="col">
                <h3>Organizador</h3>
                <a href="#">marcos</a>
            </div>
            <div class="col">
                <h3>Redes Sociales</h3>
                <div class="media">
                    <i class="fa-brands fa-instagram"></i>
                    <a href="https://www.instagram.com/vinedosazteca/" target="_blank">Instagram</a>    
                </div>
                <div class="media">
                    <i class="fa-brands fa-youtube"></i>
                    <a href="https://www.youtube.com/watch?v=omnQGlgJTMc&t=6s" target="_blank">Youtube</a>   
                </div>
            </div>
            <div class="col">
                <h3>Correo</h3>
                <input type="text" placeholder="Tu correo">
                <input type="submit" class="enviar">
            </div>
        </div>
    </section>

    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
    <script src="script.js"></script> 
 </body>
</html>
