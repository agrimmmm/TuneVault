const sbtn = document.getElementById("s-btn");
const search = document.getElementById("search");
const results = document.getElementById("results");
const durationInput = document.getElementById("duration");
const explicitInput = document.getElementById("explicit");
const clearFiltersBtn = document.getElementById("clearFilters");

sbtn.addEventListener("click", (event) => {
  event.preventDefault();

  const value = search.value;
  const duration = durationInput.value;
  const explicity = explicitInput.value;

  let url = `https://itunes.apple.com/search?term=${value}&entity=song&limit=10`;
  if(explicity == "notexplicit")
    url = `https://itunes.apple.com/search?term=${value}&entity=song&explicit=no&limit=10`;

  fetch(url)
  
    .then((response) => response.json())
    .then((data) => {
      results.innerHTML = "";
      data.results.forEach((result) => {
        const trackName = result.trackName;
        const artistName = result.artistName;
        const artworkUrl = result.artworkUrl100;
        const previewUrl = result.previewUrl;
        const explicitness = result.trackExplicitness;
        const time = result.trackTimeMillis / 1000 / 60;

        if (explicity == "all" && duration == "") {
          const resultDiv = document.createElement("div");
          resultDiv.innerHTML = `
          <div class="box">
              <img class="pic" src="${artworkUrl}" alt="${trackName} by ${artistName}">
              <div class="name">${trackName}</div>
              <div class="year">${artistName}</div>
              <audio class="num" src="${previewUrl}" controls></audio>
          </div>

          <p>&nbsp</p>
          `;
          results.appendChild(resultDiv);
        } else {
          if (explicity == "explicit" && duration == "") {
            if (explicitness != "notExplicit") {
              const resultDiv = document.createElement("div");
              resultDiv.innerHTML = `
                <div class="box">
                    <img class="pic" src="${artworkUrl}" alt="${trackName} by ${artistName}">
                    <div class="name">${trackName}</div>
                    <div class="year">${artistName}</div>
                    <audio class="num" src="${previewUrl}" controls></audio>
                </div>
        
                <p>&nbsp</p>`;
              results.appendChild(resultDiv);
            }
          }

          if (explicity == "notexplicit" && duration == "") {
            if (explicitness == "notExplicit") {
              const resultDiv = document.createElement("div");
              resultDiv.innerHTML = `
                <div class="box">
                    <img class="pic" src="${artworkUrl}" alt="${trackName} by ${artistName}">
                    <div class="name">${trackName}</div>
                    <div class="year">${artistName}</div>
                    <audio class="num" src="${previewUrl}" controls></audio>
                </div>
        
                <p>&nbsp</p>`;
              results.appendChild(resultDiv);
            }
          }

          if (duration != "" && explicity == "explicit") {
            if (duration >= time && explicitness != "notExplicit") {
              const resultDiv = document.createElement("div");
              resultDiv.innerHTML = `
              <div class="box">
                  <img class="pic" src="${artworkUrl}" alt="${trackName} by ${artistName}">
                  <div class="name">${trackName}</div>
                  <div class="year">${artistName}</div>
                  <audio class="num" src="${previewUrl}" controls></audio>
              </div>

              <p>&nbsp</p>
              `;
              results.appendChild(resultDiv);
            }
          }

          if (duration != "" && explicity == "notexplicit") {
            if (duration >= time && explicitness == "notExplicit") {
              const resultDiv = document.createElement("div");
              resultDiv.innerHTML = `
              <div class="box">
                  <img class="pic" src="${artworkUrl}" alt="${trackName} by ${artistName}">
                  <div class="name">${trackName}</div>
                  <div class="year">${artistName}</div>
                  <audio class="num" src="${previewUrl}" controls></audio>
              </div>

              <p>&nbsp</p>
              `;
              results.appendChild(resultDiv);
            }
          }

          if (duration != "" && explicity == "all") {
            if (duration >= time) {
              const resultDiv = document.createElement("div");
              resultDiv.innerHTML = `
              <div class="box">
                  <img class="pic" src="${artworkUrl}" alt="${trackName} by ${artistName}">
                  <div class="name">${trackName}</div>
                  <div class="year">${artistName}</div>
                  <audio class="num" src="${previewUrl}" controls></audio>
              </div>

              <p>&nbsp</p>
        `;
              results.appendChild(resultDiv);
            }
          }
        }
      });
    })
    
    .catch((error) => {
      console.error(error);
      results.innerHTML = `<h1 style="text-align: center;">An error occurred while searching. Please try again later.</h1><br><br>`;
    });
});

clearFiltersBtn.addEventListener("click", () => {
  durationInput.value = "";
  explicitInput.value = "all";
  sbtn.click();
});
