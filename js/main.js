var req = new XMLHttpRequest();
var allStatus = [];
req.open("get", " http://api.weatherapi.com/v1/search.json?key=f412cca333674398889144451232502&q=london")
req.send();
req.addEventListener("readystatechange", function(){
    if(req.readyState == 4 && req.status == 200){
        allStatus = JSON.parse(req.response);
        display()
    }
})

var searchInput = document.querySelector(".searchIn")
function display(){
    var all ="";
    if( searchInput.value == "london" || searchInput.value == "" || searchInput.value == "London" ){
        for( i = 0 ; i<1 ; i++ ){
            all += `<div class="col-md-4 pb-4 bg-black">
            <div>
                <div class="d-flex mt-3 p-3 dis justify-content-between">
                <p class="mb-0">saturday</p>
                <p class="mb-0">25February</p>
                </div>
                <h3>${allStatus[i].name}</h3>
                <div class="d-flex align-items-center justify-content-between">
                    
                    <p class="fs-1">${allStatus[i].lat}</p>
                    <i class="fa-solid fs-3 text-warning fa-sun"></i>
                </div>
                <p>partly cloudy</p>
                <div class="d-flex justify-content-between">
                    <p><i class="fa-solid m-2 fa-umbrella"></i>20%</p>
                    <p><i class="fa-solid m-2 fa-wind"></i>18km/h</p>
                    <p><i class="fa-solid m-2 fa-compass"></i>East</p>
    
                </div>
                
            </div>
        </div>
        <div class="col-md-4 pb-4 dif">
            <div class="text-center mt-3 dis p-2"><p>sunday</p></div>
            <div class="text-center mt-4"><i class="fa-regular fs-3 text-warning fa-sun"></i></div>
            <p class="fs-2 text-center">${allStatus[i].lat}</p>
            <p class="fs-5 text-center">${allStatus[i].lon}</p>
        </div>
        <div class="col-md-4 pb-4 bg-black">
            <div class="text-center mt-3  dis p-2"><p>monday</p></div>
            <div class="text-center mt-4"><i class="fa-regular fs-3 text-warning fa-sun"></i></div>
            <p class="fs-2 text-center">${allStatus[i].lat}</p>
            <p class="fs-5 text-center">${allStatus[i].lon}</p>
        </div>`
        }
    }
    else if( searchInput.value == "ontario" || searchInput.value == "Ontario" ){
        for( i = 1 ; i<2 ; i++ ){
            all += `<div class="col-md-4 pb-4 bg-black">
            <div>
                <div class="d-flex mt-3 p-3 dis justify-content-between">
                <p class="mb-0">saturday</p>
                <p class="mb-0">25February</p>
                </div>
                <h3>${allStatus[i].region}</h3>
                <div class="d-flex align-items-center justify-content-between">
                    
                    <p class="fs-1">${allStatus[i].lat}</p>
                    <i class="fa-solid fs-3 text-warning fa-sun"></i>
                </div>
                <p>partly cloudy</p>
                <div class="d-flex justify-content-between">
                    <p><i class="fa-solid m-2 fa-umbrella"></i>20%</p>
                    <p><i class="fa-solid m-2 fa-wind"></i>18km/h</p>
                    <p><i class="fa-solid m-2 fa-compass"></i>East</p>
    
                </div>
                
            </div>
        </div>
        <div class="col-md-4 pb-4 dif">
            <div class="text-center mt-3 dis p-2"><p>sunday</p></div>
            <div class="text-center mt-4"><i class="fa-regular fs-3 text-warning fa-sun"></i></div>
            <p class="fs-2 text-center">${allStatus[i].lat}</p>
            <p class="fs-5 text-center">${allStatus[i].lon}</p>
        </div>
        <div class="col-md-4 pb-4 bg-black">
            <div class="text-center mt-3  dis p-2"><p>monday</p></div>
            <div class="text-center mt-4"><i class="fa-regular fs-3 text-warning fa-sun"></i></div>
            <p class="fs-2 text-center">${allStatus[i].lat}</p>
            <p class="fs-5 text-center">${allStatus[i].lon}</p>
        </div>`
        }
    }
    else if( searchInput.value == "Londonderry" || searchInput.value == "londonderry"){
        for( i = 2 ; i<3 ; i++ ){
            all += `<div class="col-md-4 pb-4 bg-black">
            <div>
                <div class="d-flex mt-3 p-3 dis justify-content-between">
                <p class="mb-0">saturday</p>
                <p class="mb-0">25February</p>
                </div>
                <h3>${allStatus[i].region}</h3>
                <div class="d-flex align-items-center justify-content-between">
                    
                    <p class="fs-1">${allStatus[i].lat}</p>
                    <i class="fa-solid fs-3 text-warning fa-sun"></i>
                </div>
                <p>partly cloudy</p>
                <div class="d-flex justify-content-between">
                    <p><i class="fa-solid m-2 fa-umbrella"></i>20%</p>
                    <p><i class="fa-solid m-2 fa-wind"></i>18km/h</p>
                    <p><i class="fa-solid m-2 fa-compass"></i>East</p>
    
                </div>
                
            </div>
        </div>
        <div class="col-md-4 pb-4 dif">
            <div class="text-center mt-3 dis p-2"><p>sunday</p></div>
            <div class="text-center mt-4"><i class="fa-regular fs-3 text-warning fa-sun"></i></div>
            <p class="fs-2 text-center">${allStatus[i].lat}</p>
            <p class="fs-5 text-center">${allStatus[i].lon}</p>
        </div>
        <div class="col-md-4 pb-4 bg-black">
            <div class="text-center mt-3  dis p-2"><p>monday</p></div>
            <div class="text-center mt-4"><i class="fa-regular fs-3 text-warning fa-sun"></i></div>
            <p class="fs-2 text-center">${allStatus[i].lat}</p>
            <p class="fs-5 text-center">${allStatus[i].lon}</p>
        </div>`
        }
    }
    else if( searchInput.value == "Londerzeel" || searchInput.value == "londerzeel"){
        for( i = 3 ; i<4 ; i++ ){
            all += `<div class="col-md-4 pb-4 bg-black">
            <div>
                <div class="d-flex mt-3 p-3 dis justify-content-between">
                <p class="mb-0">saturday</p>
                <p class="mb-0">25February</p>
                </div>
                <h3>${allStatus[i].region}</h3>
                <div class="d-flex align-items-center justify-content-between">
                    
                    <p class="fs-1">${allStatus[i].lat}</p>
                    <i class="fa-solid fs-3 text-warning fa-sun"></i>
                </div>
                <p>partly cloudy</p>
                <div class="d-flex justify-content-between">
                    <p><i class="fa-solid m-2 fa-umbrella"></i>20%</p>
                    <p><i class="fa-solid m-2 fa-wind"></i>18km/h</p>
                    <p><i class="fa-solid m-2 fa-compass"></i>East</p>
    
                </div>
                
            </div>
        </div>
        <div class="col-md-4 pb-4 dif">
            <div class="text-center mt-3 dis p-2"><p>sunday</p></div>
            <div class="text-center mt-4"><i class="fa-regular fs-3 text-warning fa-sun"></i></div>
            <p class="fs-2 text-center">${allStatus[i].lat}</p>
            <p class="fs-5 text-center">${allStatus[i].lon}</p>
        </div>
        <div class="col-md-4 pb-4 bg-black">
            <div class="text-center mt-3  dis p-2"><p>monday</p></div>
            <div class="text-center mt-4"><i class="fa-regular fs-3 text-warning fa-sun"></i></div>
            <p class="fs-2 text-center">${allStatus[i].lat}</p>
            <p class="fs-5 text-center">${allStatus[i].lon}</p>
        </div>`
        }
    }
    

    document.querySelector(".row").innerHTML = all


}