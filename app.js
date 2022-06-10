let pictures = document.querySelectorAll(".pictures");

      let Modal = document.querySelector(".modal");

      let modelContainer = document.querySelector(".model-container");

      let coleBtn = document.querySelector(".close");

      let modelimg = document.querySelector(".model-img");

      for (let index = 0; index < pictures.length; index++) {
        pictures[index].addEventListener("click", function (e) {
          let image;
          image = e.target.src;

          modelimg.src = image;
          modelContainer.style.display = "flex";
        });
      }
      coleBtn.addEventListener("click",()=>{
         modelContainer.style.display = "none"
      })