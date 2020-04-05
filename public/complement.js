document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement")
      .then((res)=>{
        return res.json();
      })
      .then((data)=> {
        document.querySelector(".complement").innerText = data.complement;
      })
      .catch((err)=> {
        console.error(err);
      });
  });