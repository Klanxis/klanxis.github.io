let currentImg = 1;
            function hoverswap(){
               let imgNum = this.id.charAt(3);
               document.querySelector('#large').src="img/kda"+imgNum+".jpg";
               currentImg = imgNum
            }

            function next(){
                if(currentImg == 4){
                    currentImg = 1;
                }
                else{
                    currentImg++;
                }
                document.querySelector('#large').src="img/kda"+currentImg+".jpg";

            }
            function prev(){
                if(currentImg == 1){
                    currentImg = 4;
                }
                else{
                    currentImg--;
                }
                document.querySelector('#large').src="img/kda"+currentImg+".jpg";

            }
            document.querySelector('#img1').addEventListener("mouseover",hoverswap);
            document.querySelector('#img2').addEventListener("mouseover",hoverswap);
            document.querySelector('#img3').addEventListener("mouseover",hoverswap);
            document.querySelector('#img4').addEventListener("mouseover",hoverswap);
