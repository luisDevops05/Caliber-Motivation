let heading = document.getElementById('quote')

const apiUrl = 'https://favqs.com/api/qotd'

fetch(apiUrl).then((response)=>{
    if(response.ok){
        return response.json()
    }else{
        throw new Error ('NetWork response error')
    }
}).then(results =>{
    console.log(results)
    displayUser(results)
}).catch((error)=>console.error('fetch error',error))



function displayUser(results){

 let body = results.quote
 heading.textContent= body.body


}
window.setInterval('refresh()', 10000); 	
// Call a function every 10000 milliseconds 
// (OR 10 seconds).

// Refresh or reload page.
function refresh() {
    window .location.reload();
}


