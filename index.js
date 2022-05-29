$(document).ready(
             function(){

                           $("button").click(

                                        function(){
                                                 $(".show-par").toggle();
                                            
                                                
                                                 if(   $(".lower-div").empty()){
                                              
                                                       $(".lower-div").append($("p").clone())
                                                       $(".lower-div").children().css({"width":"90%","margin":"auto","margin-top":"2%"}) 
                                                  }else{alert("no")}
                                                 
                                                 
                                                 
                                             
                                           
                                        }


                           )
             }
)
     