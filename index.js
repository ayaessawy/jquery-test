$(document).ready(
             function(){
                          var x =$(".box").height();
                           $("button").click(

                                        function(){
                                                 $(".show-par").toggle();    //for read more button(when click button )
                                                
                                                
                                                 if(   $(".lower-div").empty() && $("p").hasClass("show-par") ){            // if condition to  prevent more clone (once clone for paragraph   when  you click  button more than one)
                                                      
                                                       $(".lower-div").append($("p").clone())
                                                       $(".lower-div").children().css({"width":"90%","margin":"auto","margin-top":"2%"}
                                                       ) 
                                                  }else{alert("no")}
                                                 
                                                 
                                             
                                             
                                           
                                        }


                           )
             }
)
     