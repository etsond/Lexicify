
  document.querySelector(".search").addEventListener("click", getWord)


function getWord(){
      let word = document.querySelector("input").value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log("the part of speech")
            console.log(data[0].meanings[0].partOfSpeech)
            console.log(data[0].phonetic)
            console.log(data[0].meanings[0].definitions[0].definition)
            console.log("test")
            console.log(data[0].meanings[0].definitions[0].example || '')

        })
        .catch(err => {
            console.log(`err ${err}`)
        })
}