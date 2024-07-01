async function getRexipes() {
  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=pizza`
  );
  let data = await response.json();
  let recipes = data.recipes;
  const result = recipes
    .map(function (ele) {
      const TwoWords = ele.title.split(" ").slice(0, 2).join(" ");
      return `
    <tr>
    <td>${TwoWords}</td>
    <td class="img"><img src="${ele.image_url}"/></td>
    <td><a href="${ele.source_url}" target="_blank">View Recipe</a></td>
    </tr>
    `;
    })
    .join(" ");
  document.querySelector("tbody").innerHTML = result;
}

getRexipes();
