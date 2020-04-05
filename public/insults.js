document
  .querySelector(".request-insult")
  .addEventListener("click", function() {
    fetch("/insults")
      .then((res)=>{
        return res.json();
      })
      .then((data)=> {
        document.querySelector(".insult").innerText = data.insult;
      })
      .catch((err)=> {
        console.error(err);
      });
  });