const APILINK='https://api.themoviedb.org/3/movie/550?api_key=2e10cbb039a2532c3d1df8bf3ca667c9'
const IMG_PATH='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg'
const SEARCHAPI='https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=2e10cbb039a2532c3d1df8bf3ca667c9'

 const main=document.getElementById("section")
 const form=document.getElementById("form")
 const search=document.getElementById("query")

 returnMovies(APILINK)
 function returnMovies(url){
    fetch(url).then(res=>res.json())
    .then(function(data)
    {
        console.log(data.results);
        data.results.forEach(element => {
            const div_card=document.createElement('div');
            div_card.setAttribute('class','card')

            const div_row=document.createElement('div');
            div_row.setAttribute('class','row')

            const div_column=document.createElement('div');
            div_column.setAttribute('class','column')

            const title=document.createElement('h3');
            title.setAttribute('id','title')

            const center=document.createElement('center');
            const image=document.createElement('img');
            image.setAttribute('class','tumbnail')
            image.setAttribute('id','image')



            title.innerHTML=`${element.title}`
            image.src=IMG_PATH + element.poster_path; 

            center.appendChild(image)
            div_card.appendChild(center)
            div_card.appendChild(title)
            div_column.appendChild(div_card)
            div_row.appendChild(div_column)



            main.appendChild(div_row)

            
        });
    });
 }
 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML=''

    const searchItem=search.value
    if(searchItem){
        returnMovies(SEARCHAPI+searchItem);
        search.value=""
    }
 })