async function getGiphy(value) {
  const image = document.createElement("IMG");
  await axios
    .get(
      `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=BV5VshxqT61wOLVIOq7w8h8mwCBcUD5V`
    )
    .then(function (response) {
      let res = response.data.data;
      let randomIdx = res[Math.floor(Math.random() * res.length)];
      let randomImg = randomIdx.images.original.url;
      image.setAttribute("src", randomImg);
      image.setAttribute("width", "300");
      image.setAttribute("height", "300");
      image.classList.add("giphyImg");
      const container = document.querySelector(".container");
      container.append(image);
    });
}

const handleSubmit = (evt) => {
  const inputVal = document.querySelector("#search").value;
  evt.preventDefault();
  getGiphy(inputVal);
};

const btn = document
  .querySelector("#submitBtn")
  .addEventListener("click", handleSubmit);

const handleRemoveGiphys = () => {
  document.querySelectorAll(".giphyImg").remove();
};

const removeBtn = document
  .querySelector("#remove")
  .addEventListener("click", handleRemoveGiphys);
