{

    let mass = document.querySelector("input") ; 
    console.log(mass) ; 
    let planetChoice = document.querySelector("select") ; 
    let button = document.querySelector("button") ; 
    let planetContainer = document.querySelector(".planet-box") ; 
    let outputContainer = document.querySelector(".output-box") ;
    let textContainer = document.querySelector(".output-box p") ;
    let weightContainer =  document.querySelector(".weight") ;

    let images = ["mercury.png" , "venus.png" , "earth.png" , "mars.png" , "jupiter.png" , "saturn.png" , "uranus.png" , "neptune.png" , "pluto.png"]

    button.addEventListener("click" , function(){

        if(mass.value === "") {
            console.log("mass") ; 
            planetContainer.style.display  = "none" ; 
            outputContainer.style.display = "flex" ; 
            textContainer.innerText = "The value of mass is required" ; 
        }else if(isNaN(mass.value*1) === true) {
            planetContainer.style.display  = "none" ; 
            outputContainer.style.display = "flex" ; 
            textContainer.innerText = "Enter a numeric mass" ;
        }
        else if(planetChoice.value == "0"){
            planetContainer.style.display  = "none" ; 
            outputContainer.style.display = "flex" ; 
            textContainer.innerText = "You did not choose a planet yet" ;
        }else{

            findMass(mass.value) ;
            planetContainer.style.display  = "flex" ; 
            outputContainer.style.display = "flex" ; 
            weightContainer.style.display = "flex" ; 


        }

    })

    function findMass(mvalue){

        console.log("hell") ; 

        let ans = 0 ; 
        let planet ; 
        mvalue *= 9.8 ; 
        switch(planetChoice.value) {

            case "1":
                ans = mvalue * 0.38 ;
                planet = "Mercury" ; 
                break ;
            case "2":
                ans = mvalue * 0.91 ; 
                planet = "Venus" ; 
                break ;  
            case "3":
                ans = mvalue * 1 ; 
                planet = "Earth" ; 
                break ;
            case "4":
                ans = mvalue * 0.38 ; 
                planet = "Mars" ; 
                break ;
            case "5":
                ans = mvalue * 2.34 ; 
                planet = "Jupiter" ; 
                break ;
            case "6":
                ans = mvalue * 1.06 ;
                planet = "Saturn" ;  
                break ;
            case "7":
                ans = mvalue * 0.92 ; 
                planet = "Uranus" ; 
                break ;
            case "8":
                ans = mvalue * 1.19 ; 
                planet = "Neptune" ; 
                break ;
            default:
                ans = mvalue * 0.06 ; 
                planet = "Pluto" ; 
                break ;
    
        }
        textContainer.innerText = "The weight of the object on "+ planet ;
        weightContainer.innerText = ans.toFixed(2) + " N"; 
        document.querySelector("img").src = images[planetChoice.value*1 - 1] ; 
 
    }



}