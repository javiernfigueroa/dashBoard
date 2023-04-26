fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url('${data.urls.full}')`;
    document.getElementById("author").textContent = ` By: ${data.user.name}`;
  })
  .catch((err) => {
    console.log("someghing went wrong");
    document.body.style.backgroundImage = "url('error.jpg')";
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)

    document.getElementById('test').innerHTML = `
    <img src=${data.image.small}/>
    <spam>${data.market_data.ath.usd} usd</spam>
    `
  })
  .catch((err) => console.log("ups, there is problem"));
