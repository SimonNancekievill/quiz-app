async function fetchDataAndRender() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean",
  );
  const data = await response.json();
  const results = data.results;
  //   const myResults = JSON.parse(results);
  //   console.log(myResults);
  console.log(results);

  results.forEach((result) => {
    console.log(result);
  });
}
fetchDataAndRender();
