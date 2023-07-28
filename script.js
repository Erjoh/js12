const arrayImg = document.querySelectorAll('.box')
const selectallbtn = document.querySelector('#selectallbtn')
const inputCheckBox = document.querySelectorAll('.inputChB')


arrayImg.forEach((img, index) => {
    img.addEventListener('click', () => {
        img.classList.toggle('bg-indired')
        inputCheckBox[index].checked = !inputCheckBox[index].checked
    })
})

selectallbtn.addEventListener("click", () => {
    inputCheckBox.forEach((checkbox) => {
        checkbox.checked = !checkbox.checked
    })
    arrayImg.forEach((img) => {
        img.classList.toggle('bg-indired')
    })
})
