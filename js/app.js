class BoredActivity {
    ajax;
    content;
    url;
    

    constructor(category){
        this.ajax = new XMLHttpRequest();
        this.url = "http://www.boredapi.com/api/activity?type="+category;
        
        
    }
    getNewActivity(){
        
        
        
    
        
    this.ajax.onreadystatechange = function(){
            if(this.readyState == 4 && this.status==200){

                let Activity= JSON.parse(this.responseText);
                console.log(Activity)
                let h2 = document.createElement("h2");
                h2.innerHTML=Activity.activity;
                
                document.getElementById("activities").innerHTML+= "<h3> accessibility :" + Activity.accessibility + "<h3>";
                document.getElementById("activities").innerHTML+= "<h3> participants :" + Activity.participants + "<h3>";
                document.getElementById("activities").innerHTML+= "<h3> price :" + Activity.price + "<h3>";
                document.getElementById("activities").innerHTML+= "<h3> type :" + Activity.type + "<h3>";
            } else if(this.readyState !=4){console.log("LOADING")

            } else {
                console.log("error accured")
            }

        }
        this.ajax.open("GET",this.url, true);
        this.ajax.send();

    }
}

let option = document.querySelectorAll("button");

for(let i=0;i<option.length; i++){
    option[i].addEventListener("click", function(){
        let activities = new BoredActivity(option[i].innerHTML);
        activities.getNewActivity()
    })
}

