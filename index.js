const form = document.querySelector("form");
let output = document.querySelector(".output");

if (output.innerHTML === "") {
  output.innerHTML = "Meat will appear here";
}

const clearBacon = () => {
  output.innerHTML = "";
};

const fetchBacon = async () => {
  let data = {
    paras: form.paragraphs.value,
    sentences: form.sentences.value,
    type: "all-meat",
    "start-with-lorem": form["start-with-lorem"].checked ? 1 : 0,
  };

  let bacon_url = new URL("https://baconipsum.com/api/");

  Object.keys(data).forEach((key) =>
    bacon_url.searchParams.append(key, data[key])
  );

  const response = await fetch(bacon_url);

  const bacons = await response.json();

  let flesh = ``;

  bacons.forEach((bacon) => (flesh += `<p>${bacon}</p>`));

  output.innerHTML += flesh;
};
