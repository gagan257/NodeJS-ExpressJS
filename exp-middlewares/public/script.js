let inpcode = document.getElementById('inpcode')
let btnencode = document.getElementById('btnencode')

let code = document.getElementById('code')

btnencode.onclick = function(){
    let data = inpcode.value
    data = btoa(data)
    code.value = data
}
