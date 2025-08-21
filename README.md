<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" href="assets/css/standar.css">
    <link rel="shortcut icon" href="favicon.ico"/>
    <title>::: Centro de Pinturas Nubia Estrada</title>
</head>
<body id="page-top">
    <a id="buttonTop"></a>

    <section id="nbar" class="p-0">
        <nav class="navbar navbar-expand-lg bg-dark px-0 py-3 fixed-top border-bottom" id="navTop">
            <div class="container-fluid">
                <a class="navbar-brand" href="#page-top">
                <img src="assets/img/logo01.png" class="logo_nav rounded" alt="logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link nlink" href="#page-top" aria-current="page">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nlink" href="#products">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nlink" href="#testimony">Testimonios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nlink" href="#team">Equipo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nlink" href="#contact">Contactenos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nlink" href="#aboutus">Nosotros</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </section>

    <section id="page-top" class="p-0">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <span class="hs_text_1">Calidad y precisión en preparación de pinturas</span>
                <span class="hs_text_def_1">Mas de 25 años de experiencia en la preparacion de colores de alta calidad.</span>
                <img src="assets/img/cpne_web_banner_01.png" alt="home_promo" class="pgtop" >
              </div>
              <div class="carousel-item">
                <span class="hs_text_2">Trabajamos con las mejores marcas del mercado</span>
                <span class="hs_text_def_2">Ocupamos siempre los mejores productos para un resultado de alta calidad.</span>
                <img src="assets/img/cpne_web_banner_02.png" alt="home_promo" class="pgtop" >
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </section>

    <section id="products" class="p-0" style="background: rgb(242,243,248);">
        <h2 class="fw-bolder text-center pt-10" style="background: rgb(242,243,248);">Estas son las marcas con las que nosotros trabajamos</h2>
        <div class="slider">
            <button id="prev" class="btn">
                <i class="las la-angle-left"></i>
            </button>

            <div class="card-content">
                <!-- Card -->
                <div class="card">
                    <h4>4.5</h4>
                    <i class="lar la-heart"></i>
                    <div class="card-img">
                        <img src="https://photo-cdn.icons8.com/assets/sata/editor/object/244/fc8f52e5-219e-47a0-8475-b96d4f3e6529.png" alt="">
                        <img class="blur" src="https://photo-cdn.icons8.com/assets/sata/editor/object/244/fc8f52e5-219e-47a0-8475-b96d4f3e6529.png" alt="">
                    </div>
                    <div class="card-text">
                        <h2>Basket Ball</h2>
                        <p>I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.<p>
                    </div>
                </div>
                <!-- Card End -->
                
                <!-- Card -->
                <div class="card">
                    <h4>4.4</h4>
                    <i class="lar la-heart"></i>
                    <div class="card-img">
                        <img src="https://photo-cdn.icons8.com/assets/sata/editor/object/456/1e8ed695-cab8-45b2-b09c-153a7970f9f3.png" alt="">
                        <img class="blur" src="https://photo-cdn.icons8.com/assets/sata/editor/object/456/1e8ed695-cab8-45b2-b09c-153a7970f9f3.png" alt="">
                    </div>
                    <div class="card-text">
                        <h2>Volley Ball</h2>
                        <p>I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.<p>
                    </div>
                </div>
                <!-- Card End -->
                
                <!-- Card -->
                <div class="card">
                    <h4>4.7</h4>
                    <i class="lar la-heart"></i>
                    <div class="card-img">
                        <img src="https://photo-cdn.icons8.com/assets/sata/editor/object/565/58f397b1-b9d9-49da-91a2-2b647835c0c3.png" alt="">
                        <img class="blur" src="https://photo-cdn.icons8.com/assets/sata/editor/object/565/58f397b1-b9d9-49da-91a2-2b647835c0c3.png" alt="">
                    </div>
                    <div class="card-text">
                        <h2>Disco Ball</h2>
                        <p>I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.<p>
                    </div>
                </div>
                <!-- Card End -->
                
                <!-- Card -->
                <div class="card">
                    <h4>4.2</h4>
                    <i class="lar la-heart"></i>
                    <div class="card-img">
                        <img src="https://photo-cdn.icons8.com/assets/sata/editor/object/0/a46a853c-ae2a-462e-bc2d-94daa8feb269.png" alt="">
                        <img class="blur" src="https://photo-cdn.icons8.com/assets/sata/editor/object/0/a46a853c-ae2a-462e-bc2d-94daa8feb269.png" alt="">
                    </div>
                    <div class="card-text">
                        <h2>Blue Ball</h2>
                        <p>I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.<p>
                    </div>
                </div>
                <!-- Card End -->
                
                <!-- Card -->
                <div class="card">
                    <h4>4.1</h4>
                    <i class="lar la-heart"></i>
                    <div class="card-img">
                        <img src="https://photo-cdn.icons8.com/assets/sata/editor/object/830/92cd5f82-0cfb-478d-9d32-a4a7180f593f.png" alt="">
                        <img class="blur" src="https://photo-cdn.icons8.com/assets/sata/editor/object/830/92cd5f82-0cfb-478d-9d32-a4a7180f593f.png" alt="">
                    </div>
                    <div class="card-text">
                        <h2>Green Ball</h2>
                        <p>I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.<p>
                    </div>
                </div>
                <!-- Card End -->
                
                <!-- Card -->
                <div class="card">
                    <h4>4.5</h4>
                    <i class="lar la-heart"></i>
                    <div class="card-img">
                        <img src="https://photo-cdn.icons8.com/assets/sata/editor/object/244/fc8f52e5-219e-47a0-8475-b96d4f3e6529.png" alt="">
                        <img class="blur" src="https://photo-cdn.icons8.com/assets/sata/editor/object/216/0d1423ba-5c74-427f-8137-e07dc2209e65.png" alt="">
                    </div>
                    <div class="card-text">
                        <h2>Red Ball</h2>
                        <p>I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.<p>
                    </div>
                </div>
                <!-- Card End -->
            
            </div>

            <button id="next" class="btn">
                <i class="las la-angle-right"></i>
            </button>
        </div>
    </section>

    <section id="testimony" class="p-0">
        <div class="wrapper">
            <div class="scroll-list">
                <div class="scroll-list__wrp js-scroll-content js-scroll-list">
                    <div class="scroll-list__item js-scroll-list-item">
                        <div class="row p-4">
                            <div class="col-4">
                                <img src="assets/img/300-1.jpg" class="sitem rounded">
                            </div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                    <div class="scroll-list__item js-scroll-list-item">
                        <div class="row p-4">
                            <div class="col-4">
                                <img src="assets/img/300-2.jpg" class="sitem rounded">
                            </div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                    <div class="scroll-list__item js-scroll-list-item">
                        <div class="row p-4">
                            <div class="col-4">
                                <img src="assets/img/300-3.jpg" class="sitem rounded">
                            </div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                    <div class="scroll-list__item js-scroll-list-item">
                        <div class="row p-4">
                            <div class="col-4">
                                <img src="assets/img/300-4.jpg" class="sitem rounded">
                            </div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                    <div class="scroll-list__item js-scroll-list-item">
                        <div class="row p-4">
                            <div class="col-4">
                                <img src="assets/img/300-5.jpg" class="sitem rounded">
                            </div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                    <div class="scroll-list__item js-scroll-list-item">
                        <div class="row p-4">
                            <div class="col-4">
                                <img src="assets/img/300-6.jpg" class="sitem rounded">
                            </div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                    <div class="scroll-list__item js-scroll-list-item">
                        <div class="row p-4">
                            <div class="col-4">
                                <img src="assets/img/300-7.jpg" class="sitem rounded">
                            </div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                    <div class="scroll-list__item js-scroll-list-item">
                        <div class="row p-4">
                            <div class="col-4">
                                <img src="assets/img/300-8.jpg" class="sitem rounded">
                            </div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                    <div class="scroll-list__item js-scroll-list-item">
                        <div class="row p-4">
                            <div class="col-4">
                                <img src="assets/img/300-9.jpg" class="sitem rounded">
                            </div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="team" class="p-0" style="background: rgb(242,243,248);">
        <h2 class="fw-bolder text-center pt-10" style="background: rgb(242,243,248);">Te presentamos a nuestro equipo</h2>

        <div class="slider">
            <button id="prevt" class="btn">
                <i class="las la-angle-left"></i>
            </button>

            <div class="card-content">
                <div class="card" style="width: 16rem;">
                    <img src="assets/img/300-1.jpg" class="card-img-top" alt="300">
                    <div class="card-body">
                        <h5 class="card-title">Juan Perez</h5>
                        <p class="card-text">El mejor CEO que puede haber.</p>
                    </div>
                </div>

                <div class="card" style="width: 16rem;">
                    <img src="assets/img/300-2.jpg" class="card-img-top" alt="300">
                    <div class="card-body">
                        <h5 class="card-title">Juan Perez</h5>
                        <p class="card-text">El mejor CEO que puede haber.</p>
                    </div>
                </div>

                <div class="card" style="width: 16rem;">
                    <img src="assets/img/300-3.jpg" class="card-img-top" alt="300">
                    <div class="card-body">
                        <h5 class="card-title">Juan Perez</h5>
                        <p class="card-text">El mejor CEO que puede haber.</p>
                    </div>
                </div>

                <div class="card" style="width: 16rem;">
                    <img src="assets/img/300-4.jpg" class="card-img-top" alt="300">
                    <div class="card-body">
                        <h5 class="card-title">Juan Perez</h5>
                        <p class="card-text">El mejor CEO que puede haber.</p>
                    </div>
                </div>

                <div class="card" style="width: 16rem;">
                    <img src="assets/img/300-5.jpg" class="card-img-top" alt="300">
                    <div class="card-body">
                        <h5 class="card-title">Juan Perez</h5>
                        <p class="card-text">El mejor CEO que puede haber.</p>
                    </div>
                </div>

                <div class="card" style="width: 16rem;">
                    <img src="assets/img/300-6.jpg" class="card-img-top" alt="300">
                    <div class="card-body">
                        <h5 class="card-title">Juan Perez</h5>
                        <p class="card-text">El mejor CEO que puede haber.</p>
                    </div>
                </div>
            </div>

            <button id="nextt" class="btn">
                <i class="las la-angle-right"></i>
            </button>
        </div>
    </section>

    <section id="contact" class="p-0">
        <h2 class="m-10 fw-bolder text-center">Mantente en contacto con nosotros</h2>
        <div class="container">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-12">
                    <div class="row">
                        <p class="font-text-li pe-0 ps-0">Siempre puedes estar en contacto con nosotros utilizando cualquiera de los siguientes medios:</p>
                    </div>
                    <div class="row pt-2">
                        <div class="col-md-6 ms-md-auto pe-0 ps-0">
                            <h3 class="font-header-h2">Nuestros teléfonos</h3>
                            <ul>
                                <li class="font-text-li">Delivery Express: +505 83880152.</li>
                                <li class="font-text-li">Atencion al Cliente: +505 22508708</li>
                            </ul>

                            <h3 class="font-header-h2">Donde nos ubicas?</h3>
                            <p class="font-text-li">Barrio Campo Bruce, semaforos boer 4 1/2 cuadras arriba, Managua.</p>
                        </div>
                        <div class="col-md-6 ms-md-auto pe-0 ps-0">
                            <div class="row">
                                <h3 class="font-header-h2">Escribenos</h3>
                                <div class="col-2 font-text-li">Nombre:</div>
                                <div class="col-10">
                                    <input type="text" class="form-control form-control-sm" id="txName">
                                </div>
                                <div class="col-2 font-text-li">Teléfono:</div>
                                <div class="col-10">
                                    <input type="text" class="form-control form-control-sm" id="txPhone">
                                </div>
                                <div class="col-2 font-text-li">Asunto:</div>
                                <div class="col-10">
                                    <textarea type="text" class="form-control form-control-sm" id="txMessage"></textarea>
                                </div>
                                <div class="col-2"></div>
                                <div class="col-10">
                                    <a class="btn btn-dark btn-lg w-100 mt-1" href="#">
                                        Enviar
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 ms-md-auto ps-0 pe-0 mt-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.280256012307!2d-86.25810351222752!3d12.142194034637633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f715601dc317c07%3A0x53ade30c62e198ee!2sCentro%20de%20Pinturas%20Nubia%20Estrada!5e0!3m2!1ses!2sni!4v1701865067994!5m2!1ses!2sni" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <nav class="navbar fixed-bottom navbar-expand-lg navbar-white bg-white justify-content-center border-top">
        <div class="row">
            <p class="text-footer">Todos los derechos reservados por Centro de Pinturas Nubia Estrada © 2023</p>
        </div>
        <div class="row">
            <p class="text-footer">. Design by Osmell J. Rosales R.</p>
        </div>
    </nav>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.3.1/smooth-scrollbar.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.3.1/plugins/overscroll.js"></script>
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
    <script type="text/javascript" src="assets/js/standar.js"></script>
    <script>
        $(document).ready(function () {
            var Scrollbar = window.Scrollbar;

            Scrollbar.use(window.OverscrollPlugin);

            var customScroll = Scrollbar.init(document.querySelector('.js-scroll-list'), {
                plugins: {
                    overscroll: true
                }
            });

            var listItem = $('.js-scroll-list-item');

            listItem.eq(0).addClass('item-focus');
            listItem.eq(1).addClass('item-next');

            customScroll.addListener(function (status) {

                var $content = $('.js-scroll-content');

                var viewportScrollDistance = 0;


                viewportScrollDistance = status.offset.y;
                var viewportHeight = $content.height();
                var listHeight = 0;
                var $listItems = $content.find('.js-scroll-list-item');
                for (var i = 0; i < $listItems.length; i++) {
                    listHeight += $($listItems[i]).height();
                }

                var top = status.offset.y;
                // console.log(top);
                var visibleCenterVertical = 0;
                visibleCenterVertical = top;

                var parentTop = 1;
                var $lis = $('.js-scroll-list-item');
                var $focusLi;
                for (var i = 0; i < $lis.length; i++) {
                    var $li = $($lis[i]);
                    var liTop = $li.position().top;
                    var liRelTop = liTop - parentTop;

                    var distance = 0;
                    var distance = Math.abs(top - liRelTop);
                    var maxDistance = $('.js-scroll-content').height() / 2;
                    var distancePercent = distance / (maxDistance / 100);


                    if (liRelTop + $li.parent().scrollTop() > top) {
                        if (!$li.hasClass('item-focus')) {
                            $li.prev().addClass('item-hide');
                            $lis.removeClass('item-focus');
                            $lis.removeClass('item-next');
                        }
                        $li.removeClass('item-hide');
                        $li.addClass('item-focus');
                        $li.next().addClass('item-next');
                        break;
                    }
                }
            });

        });
    </script>
</body>
</html>