const addmovBTN = document.getElementById("add-movie-btn")
const searchBTN = document.getElementById("search-btn")
const titleInput = document.getElementById("title")
const extranamInput = document.getElementById("extra-name")
const extravalInput = document.getElementById("extra-value")
const movielist = document.getElementById('movie-list')
const filterInput = document.getElementById('filter-title')

let favmovlist = []

function clearinputs()
{
    titleInput.value = ''
    extranamInput.value = ''
    extravalInput.value = ''
    filterInput.value = ''
}

function showingmov(filte = '')
{
    if ( !favmovlist.length)
        movielist.classList.remove('visible')
    else
        movielist.classList.add('visible')
    
    // const {info} = favmovlist
    // movielist.classList.add('visible')
    movielist.innerHTML = ''

    filtmov = !filte ? favmovlist : favmovlist.filter( movi =>  movi.info.titleval.includes(filte) )

    filtmov.forEach ( (mov) =>
    {
        const movlis = document.createElement('li')
        text = mov.info.titleval + ' - ('
        for(const key in mov.info)
            if (key !== 'titleval')
                text = text + `${key} : ${mov.info[key]})`
        
        movlis.textContent = text
        movielist.append(movlis)
    })
}
    
function addmovhandle()
{
    titleval = titleInput.value
    extranamval = extranamInput.value
    extravalval = extravalInput.value
    
    if (!titleval.trim() || !extranamval.trim() || !extravalval.trim())
    return 
    
    const movobj =
    {
        info : 
        {
            titleval,
            [extranamval] : extravalval
        },
        id : Math.random()
    }

    favmovlist.push(movobj)
    console.log(favmovlist)
    showingmov()
    clearinputs()
}

function searchmovhandle()
{
    filterva = filterInput.value
    showingmov(filterva)
}

addmovBTN.addEventListener('click' , addmovhandle)
searchBTN.addEventListener('click' , searchmovhandle)