let buton = document.querySelector('.buton')
let inputText = document.querySelector('.inputText')
let mainDiv = document.querySelector('.maindiv')
let img = document.querySelector('.img')
let Gitdiv = document.querySelector('.Gitdiv')
let link = document.querySelector('.link')
buton.addEventListener('click',(ev)=>{
    ev.preventDefault()
    let name = inputText.value
    fetch(`https://api.github.com/users/${name}`)
    .then(result => result.json())
    .then((data)=>{
        console.log(data);
        img.src = data.avatar_url
        link.href = `https://github.com/${name}`
    })
})

