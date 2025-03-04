const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image,index) =>{
    image.addEventListener("click",(e) => {
        image.classList.add("active");
        optionImages.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove("click");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["./images/rock.png","./images/paper.png","./images/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];
            let cpuValue = ["R","P","S"][randomNumber];
            let userValue = ["R","P","S"][index];
            
            let outComes = {
                RR:"Draw",
                RS:"User",
                RP:"CPU",
                PP:"Draw",
                PS:"CPU",
                PR:"User",
                SS:"Draw",
                SR:"CPU",
                SP:"User",
            };
            let outComeValue = outComes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        });
    });
});