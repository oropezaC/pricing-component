var range_pricing = document.getElementById("range_pricing");
var price = document.getElementById("price");
var type_bill = document.getElementById("type_bill");
var views = document.getElementById("views");
let toggle = document.getElementById("toggle");

function component_quote(){
    let rangePricin = range_pricing.value;
    let multiple = range_pricing.value * 25;
    let color = 'linear-gradient(to right, hsl(174, 77%, 80%) ' + multiple + '%, hsl(224, 65%, 95%) ' + multiple + '%)';
    range_pricing.style.background = color;

    if(toggle.checked == false){
        type_bill.innerHTML = "/month";
        if(rangePricin == 0){
            price.innerHTML = "$8.00";
            views.innerHTML = "10K pageviews";
        }
        else if(rangePricin == 1){
            price.innerHTML = "$12.00";
            views.innerHTML = "50K pageviews";
        }
        else if(rangePricin == 2){
            price.innerHTML = "$16.00";
            views.innerHTML = "100K pageviews";
        }
        else if(rangePricin == 3){
            price.innerHTML = "$24.00";
            views.innerHTML = "500k pageviews";
        }
        else if(rangePricin == 4){
            price.innerHTML = "$36.00";
            views.innerHTML = "1M pageviews";
        }
    }
    else {
        type_bill.innerHTML = "/year";
        if(rangePricin == 0){
            let valueForYear =  8*12 - (8 * 12)*0.25;
            price.innerHTML = "$" + valueForYear + ".00" ;
            views.innerHTML = "10K pageviews";
        }
        else if(rangePricin == 1){
            let valueForYear =  12*12 - (12 * 12)*0.25;
            price.innerHTML = "$" + valueForYear + ".00" ;
            views.innerHTML = "50K pageviews";
        }
        else if(rangePricin == 2){
            let valueForYear =  16*12 - (16 * 12)*0.25;
            price.innerHTML = "$" + valueForYear + ".00" ;
            views.innerHTML = "100K pageviews";
        }
        else if(rangePricin == 3){
            let valueForYear =  24*12 - (24 * 12)*0.25;
            price.innerHTML = "$" + valueForYear + ".00" ;
            views.innerHTML = "500k pageviews";
        }
        else if(rangePricin == 4){
            let valueForYear =  36*12 - (36 * 12)*0.25;
            price.innerHTML = "$" + valueForYear + ".00" ;
            views.innerHTML = "1M pageviews";
        }
    }
    
}


range_pricing.addEventListener('input', function(){
    component_quote()    
})

toggle.addEventListener('input', function(){
    component_quote()    
})




var discount = document.getElementById("discount");
var billingDiscount = document.querySelectorAll("label-toggle-discount");
var w = window.innerWidth;

if (w < 501){
    if(discount.innerHTML != "25%"){
     discount.innerHTML = "25%";
    }
}

window.addEventListener("resize", function(event) {
    var w = window.innerWidth;
   if (w < 501){
       if(discount.innerHTML != "25%"){
        discount.innerHTML = "25%";
       }
       
   }
   else if( w > 500){
    if(discount.innerHTML == "25%"){
        discount.innerHTML = "25% discount";
       }
   }
})