$(document).ready(function(){
    for(var i=0;i<4;i++)
    {
    $('#pediatric').append('<div class="col-lg-6 col-md-6 col-sm-12 col-12 text-center pediatric-doctors"><div class="col-lg-9 mx-auto">'+
    '<div class="pediatric">Pediatric BMT</div>'+
    '<img src="img/Bitmap Copy.png" alt="Bitmap" class="img-fluid m-4">'+
    '<div class="name mb-2">Dr. Vijay Agarwal</div>'+
    '<div class="profession">MD, MRCP, PhD,CCT<br>Lead & Sr. Consultant - Medical Oncology & Haematology</div>'+
    '<div class="experience mb-4 mt-3">Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. </div>'+
    '<button class="btn know-more mb-5">Know More</button>'+
'</div></div>');
    }
    for(var i = 0; i < 10; i++)
    {
        $('#slide-swipe').append('<div class="swiper-slide col-lg-12 col-md-6 col-sm-12 col-12 slider-content">'+
        '<div class="row justify-content-center">'+
            '<div class="col-lg-3 col-md-6 col-sm-12 col-4">'+
              '<img src="img/john.png" alt="john" class="img-fluid ml-auto">'+
            '</div>'+
            '<div class="col-lg-4 col-md-6 col-sm-12 col-6 person-profession p-0">'+
              '<div class="john">John Doe</div>'+
              '<div>softwere Engineer</div>'+
            '</div>'+
            '<div class="col-lg-4 col-md-6 col-sm-6 col-6">'+
                '<img src="img/lines.png" alt="lines" class="img-fluid">'+
            '</div>'+
            '<div class="col-lg-12 col-md-12 col-sm-12 col-12 readable-content mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div>'+
        '</div>'+
        
    '</div>');
    }

    $("#top-scroll").on('click', function() {
        $(window).scrollTop(0);
      });
});
