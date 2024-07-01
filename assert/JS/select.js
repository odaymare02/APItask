async function getSpacifecRecipes() {
  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=pizza`
  );
  let data = await response.json();
  let recipes = data.recipes;
  const resultOfOption = recipes.map(function (ele) {
    return `
        <option>${ele.title}</option>
        `;
  });
  document.querySelector("select").innerHTML = resultOfOption;
  let forms = document.querySelector("form");
  forms.onsubmit = function (e) {
    e.preventDefault();
    const result = recipes.map(function (ele) {
      const twoWords = ele.title.split(" ").slice(0, 2).join(" ");
      if (ele.title == e.target.elements[0].value)
        return `
            <tr>
            <td>${twoWords}</td>
            <td class="img"><img src="${ele.image_url}" /></td>
            <td><a href="${ele.source_url}" target="_blank">View Recipe</a></td>`;
    });
    document.querySelector("tbody").innerHTML = result.join(" ");
  };
}
getSpacifecRecipes();
