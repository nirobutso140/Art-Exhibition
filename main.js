

// const desc = document.querySelectorAll('.desc')
// let desc = parent.querySelectorAll('.desc')
// console.log(desc);
// console.log(userInput);


// const searchFun = () =>{
   
//     let userInput = document.getElementById('userValue').value.toUpperCase();
//     let parent = document.getElementById('parent');
//     let desc = parent.getElementsByTagName('section');
   

//     for(let i = 0; i < desc.length; i++){
//         let p = desc[i].getElementsByTagName('p')[2]

//         if(p){
//             let textVal = p.innerHTML

//             if(textVal.toUpperCase().indexOf(userInput) > -1){
//                 desc[i].style.display = ''
//             }else{
//                 desc[i].style.display = 'none'
//             }
//         }
//     }
// }


function filterSearchResults() {
    // Get the user's query
    const searchQuery = document.getElementById("searchFilter").value.toLowerCase();
  
    // Get the list of search results
    const searchResults = document.getElementsByClassName("division");
  
    // Loop through the search results and hide/show based on the search query
    for (let i = 0; i < searchResults.length; i++) {
      const p = searchResults[i].getElementsByTagName('p')[0]
      const resultText = p.innerText.toLowerCase();
      if (resultText.includes(searchQuery)) {
        searchResults[i].style.display = "block";
      } else {
        searchResults[i].style.display = "none";
      }
    }
  }

const searchInput = document.getElementById("searchFilter");
searchInput.addEventListener("input", filterSearchResults);










