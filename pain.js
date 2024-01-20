const sidebar=document.querySelector('.side-bar-container')
const bar=document.querySelector('.bar')
const close=document.querySelector('.close')


bar.addEventListener('click',function(){
    sidebar.classList.toggle('show')  //toggle means able/disable if we click it ones it will able the button and if we click that one's again it will disable it.
    console.log(sidebar.classList)

})


close.addEventListener('click',function(){
    sidebar.classList.remove('show')
})


