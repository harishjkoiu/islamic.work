





//Quarn Function
function getQuranSurah(){
    let popup=document.querySelector('.surah-popup')
    let closebtn=document.querySelector('.close')
    fetch('http://api.alquran.cloud/v1/meta')
    .then(response =>response.json()
        ).then(data =>{
            let surahContainer=document.querySelector('.surahContainer');
            surahContainer.innerHTML=''
            let surahInfo=data.data.surahs.references;
            for( let surah of surahInfo){
               // console.log(surah)
                surahContainer.innerHTML+=`
                <div class="surah">
                <h3>${surah.number}</h3>
                <p>${surah.name}</p>
                <p>${surah.englishName}</p>
                 </div>
                `
            } 
            let allSurahs=document.querySelectorAll('.surah')
            allSurahs.forEach((surah,index) =>{
                surah.addEventListener('click' ,()=>{
                    popup.classList.add('active')
                     getAyat(index)
                })
                })
           
        })
        closebtn.addEventListener('click',()=>{
            popup.classList.remove('active')
        })
}
getQuranSurah()

//Get Surahs Ayat
function getAyat(surahIndex){
    let ayatContainer=document.querySelector('.ayats')
    ayatContainer.innerHTML=''
    fetch(`http://api.alquran.cloud/v1/surah/${surahIndex+1}`).
    then(response=>response.json())
    .then(data =>{
      let ayat=data.data.ayahs
      console.log(ayat)
      for(let ayah of ayat){
        ayatContainer.innerHTML+=
        `<span>${ayah.text} (${ayah.numberInSurah})</span>`   
      }
      
    }) 
  
}


getPrayTime()

//prev event
prevBtn.addEventListener('click' ,()=>{
    hadithIndex == 0 ? hadithIndex=24 :hadithIndex--
    getHadith()
})
//next event
nextBtn.addEventListener('click' ,()=>{
    hadithIndex ==24 ? hadithIndex=0 :hadithIndex++
    getHadith()
})
//Explorer Button event
const explore=document.getElementById('explore');
const hadithSection=document.querySelector('.hadith')
explore.addEventListener('click' ,()=>{
    hadithSection.scrollIntoView({
        behavior:'smooth'
    })
})
//Scroll Button
scrollbtn.addEventListener('click' ,()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})
//responsive Website Menu
let bars=document.querySelector('.bars')
let list =document.querySelector('header ul')
bars.addEventListener('click',()=>{
    list.classList.toggle('active')
})
