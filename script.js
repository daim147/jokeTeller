const btn = document.getElementById("btn")
const audioElement = document.getElementById("audio")

function test(joke){
    VoiceRSS.speech({
        key: '01df973b182a4cea824873899806b5cf',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}


async function gettingJokes(){
    let joke = ''
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist") ;
        const data = await response.json()
 
      if(data.setup){
  joke = `${data.setup} ... ${data.delivery}`

      }else if(data.joke){
  joke = `${data.joke} `

      }
 
     test(joke)
    } catch (error) {
        console.log(error)
    }
  
}

btn.addEventListener("click",()=>{

    gettingJokes()
    btn.disabled = true

})
audioElement.addEventListener("ended", ()=>{
    btn.disabled = false
})