$(document).ready(function() {
    // Header
    const headerHeight = 100;
    $(document).scroll(function() {
        const scroll = getCurrentScroll();
        if(scroll >= headerHeight) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }
    })
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    // GNB
    $('header nav .depth1 > li > a').hover(function(){
        if(!$('header').hasClass('hover')){
            $('header').addClass('hover');
            $(this).closest('nav').find('.depth2').stop(true,true).fadeIn(400);
        }
    });

    $('header nav .depth2').hover(function(){
        $(this).prev().addClass('on');
    }, function() {
        $(this).prev().removeClass('on');
    })

    $('nav').mouseleave(function(){
        $('header').removeClass('hover');
        $('header nav .depth2').hide(); 
    });

    // Util
    $('.button-change-lang').on('click', function() {
        $(this).addClass('active').parent().siblings().find('.button-change-lang').removeClass('active');
    })

    // Toggle Nav
    $('.toggle-btn-wrap span i').on('click', function() {
        $('.ri-align-right').eq(0).toggleClass('display-none');
        $('.ri-close-fill').toggleClass('display-none');
        $('.toggle-nav').toggleClass('on');
    })

    $('.mob-nav a').on('click', function() {
        $('.ri-align-right').eq(0).toggleClass('display-none');
        $('.ri-close-fill').toggleClass('display-none');
        $('.toggle-nav').toggleClass('on');
    })

    // Main Banner
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        innerWidth / innerHeight,
        0.1,
        1000
    )
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    })
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.querySelector('.main-section-01 .globe').appendChild(renderer.domElement)
    

    // create a Sphere
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        new THREE.MeshBasicMaterial({
            // color: 0xffffff,
            map: new THREE.TextureLoader().load('statics/visual/images/earth01.jpg')
        })
    );
    scene.add(sphere);
    // scene.background = new THREE.Color(0xffffff);

    // set size
    camera.position.z = 14;

    function animate() {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
        sphere.rotation.y += 0.0017;
    }
    animate();
    

    // main-section-carousel
    $('.main-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 800,
        autoplayHoverPause: true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768: {
                items:2
            },
            769:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
})
    
 