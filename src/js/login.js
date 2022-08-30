
class darMolde{
    static btnDarkMode = document.querySelector(".darkMode");
    static html = document.querySelector("html");

    static changeColor(){
        console.log(this.btnDarkMode)
        darMolde.btnDarkMode.addEventListener("click", ()=>{
            this.html.classList.toggle("darkMode")
            this.changeText()
        })
    }
    static changeText(){
        if(this.html.classList.contains("darkMode")){
            this.btnDarkMode.innerText = "Light Mode"
        }else{
            this.btnDarkMode.innerText = "Dark Mode"
        }
    }

}

darMolde.changeColor()