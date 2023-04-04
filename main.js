// // selecting thr word
// document.querySelector(".search").addEventListener("click", getWord)
// document.querySelector("input").addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     getWord();
//   }
// });

// function getWord() {
//   let word = document.querySelector("input").value;
//   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.length > 0) {
//         // showing the word in the dom
//         document.querySelector("h3").innerText = word;
//         console.log(data[0].meanings[0].partOfSpeech)
//         // shwoing the part of speech on the dom
//         document.querySelector(".partOfSpeech").innerText = data[0].meanings[0].partOfSpeech;
//         console.log(data[0].phonetic)
//         // phonetic
//         document.querySelector(".phonetic").innerText = data[0].phonetic;
//         // definition
//         document.querySelector(".definition").innerText = data[0].meanings[0].definitions[0].definition;
//         // example sentences using the word
//         console.log(data[0].meanings[0].definitions[0].example || "")
//         document.querySelector(".examples").innerText = data[0].meanings[0].definitions[0].example || "";
//         // empty error message
//         document.querySelector(".error-message").innerText = "";
//       } else {
//         empty()
//         let error = `Could not locate ${word}, please enter a new word`;
//         document.querySelector(".error-message").innerText = error;
//       }
//     })
//     .catch((err) => {
//         empty()
//       let error = `Could not locate ${word}, please enter a new word. Error message: ${err}`;
//       document.querySelector(".error-message").innerText = error;
//     });
// }



// function empty(){
//     document.querySelector(".examples").innerText = ''
//     document.querySelector(".phonetic").innerText = ''
//     document.querySelector(".definition").innerText = ''
//     document.querySelector(".examples").innerText = ''
//     document.querySelector(".partOfSpeech").innerText = ''
//      document.querySelector("h3").innerText = ''
// }

// selecting the search button and input field
document.querySelector(".search-button").addEventListener("click", getWord);
document.querySelector(".search-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWord();
  }
});

function getWord() {
  let word = document.querySelector(".search-input").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        // showing the word in the DOM
        document.querySelector(".word").innerText = word;
        // showing the part of speech on the DOM
        document.querySelector(".part-of-speech").innerText = data[0].meanings[0].partOfSpeech;
        // showing the phonetic notation on the DOM
        document.querySelector(".phonetic").innerText = data[0].phonetic || "";
        // showing the definition on the DOM
        document.querySelector(".definition").innerText = data[0].meanings[0].definitions[0].definition || "";
        // showing example sentences using the word on the DOM
        document.querySelector(".examples").innerText = data[0].meanings[0].definitions[0].example || "";
        // empty error message
        document.querySelector(".error-message").innerText = "";
      } else {
        empty();
        let error = `Could not locate "${word}", please enter a new word`;
        document.querySelector(".error-message").innerText = error;
      }
    })
    .catch((err) => {
      empty();
      let error = `Could not locate "${word}", please enter a new word. Error message: ${err}`;
      document.querySelector(".error-message").innerText = error;
    });
}

function empty() {
  document.querySelector(".word").innerText = "";
  document.querySelector(".part-of-speech").innerText = "";
  document.querySelector(".phonetic").innerText = "";
  document.querySelector(".definition").innerText = "";
  document.querySelector(".examples").innerText = "";
}
