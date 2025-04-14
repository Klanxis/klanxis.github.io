
//image gallery
let currentImg = 1;
            function hoverswap(){
               let imgNum = this.id.charAt(3);
               document.querySelector('#large').src="img/kda"+imgNum+".jpg";
               currentImg = imgNum
            }
            //next button loop around
            function next(){
                if(currentImg == 4){
                    currentImg = 1;
                }
                else{
                    currentImg++;
                }
                document.querySelector('#large').src="img/kda"+currentImg+".jpg";

            }
            //prev button loop around
            function prev(){
                if(currentImg == 1){
                    currentImg = 4;
                }
                else{
                    currentImg--;
                }
                document.querySelector('#large').src="img/kda"+currentImg+".jpg";

            }
            //hoverswap listener
            document.querySelector('#img1').addEventListener("mouseover",hoverswap);
            document.querySelector('#img2').addEventListener("mouseover",hoverswap);
            document.querySelector('#img3').addEventListener("mouseover",hoverswap);
            document.querySelector('#img4').addEventListener("mouseover",hoverswap);
