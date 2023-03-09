// selecting thr word
document.querySelector(".search").addEventListener("click", getWord)

function getWord() {
  let word = document.querySelector("input").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        // showing the word in the dom
        document.querySelector("h3").innerText = word;
        console.log(data[0].meanings[0].partOfSpeech)
        // shwoing the part of speech on the dom
        document.querySelector(".partOfSpeech").innerText = data[0].meanings[0].partOfSpeech;
        console.log(data[0].phonetic)
        // phonetic
        document.querySelector(".phonetic").innerText = data[0].phonetic;
        // definition
        document.querySelector(".definition").innerText = data[0].meanings[0].definitions[0].definition;
        // example sentences using the word
        console.log(data[0].meanings[0].definitions[0].example || "")
        document.querySelector(".examples").innerText = data[0].meanings[0].definitions[0].example || "";
        // empty error message
        document.querySelector(".error-message").innerText = "";
      } else {
        empty()
        let error = `Could not locate ${word}, please enter a new word`;
        document.querySelector(".error-message").innerText = error;
      }
    })
    .catch((err) => {
        empty()
      let error = `Could not locate ${word}, please enter a new word. Error message: ${err}`;
      document.querySelector(".error-message").innerText = error;
    });
}

function empty(){
    document.querySelector(".examples").innerText = ''
    document.querySelector(".phonetic").innerText = ''
    document.querySelector(".definition").innerText = ''
    document.querySelector(".examples").innerText = ''
    document.querySelector(".partOfSpeech").innerText = ''
     document.querySelector("h3").innerText = ''
}