$(document).ready(function () {



    $('.one').click(function () {

        $('.home1').toggle(1000)


        $('.home').toggle(1000)


        $('.getstarted').toggle(1000)


    });





    $('.hireme').hide()
    $('.portfolio').hide()


    $('.home1').click(function () {




        $('.getstarted').toggle(1000)



    });


    $('.para').hide()
    $('.para1').hide()




    $('.getstarted').click(function () {

        $('.hireme').toggle(1000)


        $('.portfolio').toggle(1000)

       

    });

    $('.hireme').click(function () {



        $('.para1').toggle(1000)

    });

    $('.load1').hide()
    $('.load2').hide()
    $('.load3').hide()
    $('.cate').hide()



    $('.portfolio').click(function () {

        $('.cate').toggle(1000)


        $('.load1').toggle(1100)

        $('.load2').toggle(1100)

        $('.load3').toggle(1100)



    });

    $('.one').dblclick(function () {

        $('.second1').toggle(1000)


    });
    
    $('.getstarted-1').click(function () {

        $('.hireme').toggle(1000)
        $('.portfolio').toggle(1000)


    });

});


    
    
    
    