(document).ready(function(){

    (".filter").click(function(){
        var value = (this).attr('data-rel');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            ('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            (".filter").not('.'+value).hide('3000');
            ('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ((".filter").removeClass("active")) {
(this).removeClass("active");
}
(this).addClass("active");

});


