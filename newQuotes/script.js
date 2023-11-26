// const xhr = new XMLHttpRequest()
// const url = 'https://api.quotable.io/random'
// xhr.open('GET',url)
// const pera = document.getElementById('pera');


// // xhr.onreadystatechange = function() {
// //     // Check if the request is complete (readyState is 4)
// //     if (xhr.readyState === 4) {
// //       // Check if the status is successful (status code 2xx)
// //       if (xhr.status >= 200 && xhr.status < 300) {
// //         // Parse the JSON response
// //         var data = JSON.parse(xhr.responseText);
// //         const content = data.content;
// //         console.log( data.content);
// //       } else {
// //         // Handle the error
// //         console.error('Error fetching quote:', xhr.statusText);
// //       }
// //     }
// // };


// function handleResponse() {
//     // Check if the request is complete (readyState is 4)
//     if (xhr.readyState === 4) {
//       // Check if the status is successful (status code 2xx)
//       if (xhr.status >= 200 && xhr.status < 300) {
//         // Parse the JSON response
//         var data = JSON.parse(xhr.responseText);
//         const quote = data.content;
//         // console.log(content);

//         // Call another function or perform operations with content here
//         processContent(quote);
//       } else {
//         // Handle the error
//         console.error('Error fetching quote:', xhr.statusText);
//       }
//     }
// }



// xhr.onreadystatechange = handleResponse;

// xhr.send();


// // const pera = document.getElementById('pera');

// pera.innerHTML= function processContent(quote) {
//     // Now you can use the content variable outside the onreadystatechange callback
//     // console.log('->', quote);
//     return quote;
// }



document.addEventListener("DOMContentLoaded", function () {
  const xhr = new XMLHttpRequest();
  const url = 'https://api.quotable.io/random';
  const pera = document.getElementById('pera');

  function handleResponse() {
      if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
              var data = JSON.parse(xhr.responseText);
              const quote = data.content;
              processContent(quote);
          } else {
              console.error('Error fetching quote:', xhr.statusText);
          }
      }
  }

  function processContent(quote) {
      pera.innerHTML = quote;
  }

  xhr.onreadystatechange = handleResponse;
  xhr.open('GET', url);
  xhr.send();
});