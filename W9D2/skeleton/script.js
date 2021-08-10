document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  const button = document.getElementsByClassName("favorite-submit");
  // debugger;
  button[0].addEventListener("click", event => {
    event.preventDefault();
    const input = document.querySelector(".favorite-input");

    const ul = document.querySelector("#sf-places");

    const newItem = document.createElement("li");
    newItem.textContent = input.value;
    ul.append(newItem);
    input.value = "";
    // const favorit 

  });


  // const handleFavoriteSubmit = (e) => {
  //   e.preventDefault();

  //   const favoriteInput = document.querySelector(".favorite-input");
  //   const favorite = favoriteInput.value;
  //   favoriteInput.value = "";

  //   const newListLi = document.createElement("li");
  //   newListLi.textContent = favorite;

  //   const favoritesList = document.getElementById("sf-places");
  //   favoritesList.appendChild(newListLi);
  // };

  // const listSubmitButton = document.querySelector(".favorite-submit");
  // listSubmitButton.addEventListener("click", handleFavoriteSubmit);




  // adding SF places as list items

  // --- your code here!



  // adding new photos

  // --- your code here!



});
