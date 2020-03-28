setTimeout(() => {
  console.info(`Select Country, Catagory and Enter Your API Key than Click on 'Get News', Now your News will fetching And You can see that!`);
}, 500);

let response = document.getElementById('response')
response.innerHTML = `Submit all Imformation to Get News`
function newsResponse() {
  const country = document.getElementById('country-input').value
  const catagory = document.getElementById('catagory-input').value
  const api = document.getElementById('Apikey-input').value
  if (api == "") {
    window.alert("First input Api Key")
  } else {
    var pattern = `https://newsapi.org/v2/top-headlines?country=${country}&category=${catagory}&apiKey=${api}`
    var pattern2 = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api}`
    if (catagory == "Top") {
      pattern = ""
      pattern += pattern2
    }


    const xhr7 = new XMLHttpRequest();
    xhr7.open('GET', `${pattern}`, true);
    console.log(`Your JSON Link of ${catagory} News is : `, pattern)
    //On Progress

    xhr7.onprogress = function onprogress() {
      console.log(`We Are Sending a Request to the Server For Your ${catagory} News.`)
      let response = document.getElementById('response')
      response.innerHTML = "";
      let spin7 = ``
      let response7 = document.getElementById('Response')
      response7.scrollIntoView()
      let spinHtml7 = `
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            `
      spin7 += spinHtml7
      response7.innerHTML = spin7

      let refreshMainDiv = document.getElementById('refreshMainDiv')
      let refreshMainDivEmptyHTML = ``
      let refreshMainDivHTML = `
            <div id="refrash">
              <img onclick="newsResponse()" onmouseover="refreshHover()" onmouseout="refreshHoverOut()" class="Refresh" src="refresh.png"></img>
              <button type="button" onclick="newsClose()" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <br><br>
              <h6 class="card-subtitle mb-2 text-muted" id="refreshAlt"></h6>
            </div>
          `
      refreshMainDivEmptyHTML += refreshMainDivHTML;
      refreshMainDiv.innerHTML = refreshMainDivEmptyHTML;
    }

    //ON LOAD

    xhr7.onload = function (element) {
      if (this.status === 200) {
        let json7 = JSON.parse(this.responseText)

        let articles7 = json7.articles;
        let response7 = document.getElementById('Response')

        console.log(articles7)
        let totalResultsJSON = json7
        let totalResults = document.getElementById('totalResults')
        let totResultHTML = `
                <h6 class="card-subtitle mb-2 text-muted my-2">Total ${totalResultsJSON["totalResults"]} Found but we can show you ${articles7.length} results.</h6>
              `
        totalResults.innerHTML = totResultHTML;
        let newsHtml7 = "";
        articles7.forEach(function (element, index) {
          if (element["content"] == null) {
            let news7 = `
                    <div class="card my-4" style="width: 18 rem;">
                      <div class="card-body">
                        <h5 class="card-title">${++index}:- ${element["title"]}</h5>
                        <p class="card-text" style="color:red;">Could not get this Content But You can <a id="scroll3" target="_blank" href="${element["url"]}" class="card-link">Read More Here</a></p>
                      </div>
                    </div>
                    `
            newsHtml7 += news7;
          } else {
            let news7 = `
                    <div class="card my-4" style="width: 18 rem;">
                      <div class="card-body">
                        <h5 class="card-title">${++index}:- ${element["title"]}</h5>
                        <p class="card-text">${element["content"]}</p>
                        <a target="_blank" href="${element["url"]}" class="card-link">Read More</a>
                      </div>
                    </div>
                  `

            newsHtml7 += news7;
          }
        })
        response7.innerHTML = newsHtml7;

      }
      else {
        console.error(' SOMETHING WENT WRONG ')
        console.error(`${this.status} error occured!!! Please Submit right imformation to Get News`)
        let response7 = document.getElementById('Response')
        response7.innerHTML = ""
        let errorDiv = document.getElementById('errorDiv')
        errorDiv.innerHTML = `${this.status} error occured!!! Please Submit right imformation to Get News.`
        let totalResults = document.getElementById('totalResults')
        totalResults.innerHTML = ""
        let response = document.getElementById('response')
        response.innerHTML = ""
      }
    }
    xhr7.send()
    setTimeout(() => {
      window.scrollTo(0, 446);
    }, 1000);
  }
}
// function more() {
//   var more = document.getElementById('more')
//   more.innerHTML = ""
//   let string = `
//     <hr>
//     <button type="button" onclick="moreClose()" class="close" aria-label="Close">
//       <span aria-hidden="true">&times;</span>
//     </button>
//     <h4>More Projects Made by Henil Malaviya</h4>
//     <ul>
//       <li>
//         <h5><a href="D:/Projects/java web/Traffic Light/main.html" target="_blank">Traffic Light</a></h5>
//       </li>
//       <li>
//         <h5><a href="file:///D:/Projects/java%20web/Tempture/main.html" target="_blank">Temparature Convertor</a></h5>
//       </li>
//       <li>
//         <h5><a href="D:/Projects/java web/News Website/main.html" target="_blank">Top News of India</a></h5>
//       </li>
//       <li>
//         <h5><a href="D:/Projects/java web/World Note/note.html" target="_blank">World Note</a></h5>
//       </li>
//       <li>
//         <h5><a href="D:/Projects/java web/Product selling/main.html" target="_blank">Product Profit For MR</a></h5>
//       </li>
//       <li>
//         <h5><a href="D:/Projects/java web/Calender [mini]/main.html" target="_blank">Mini Calender</a></h5>
//       </li>
//       <li>
//         <h5><a id="scroll" href="D:/Projects/java web/Form 2020 with Elemenet Print/main.html" target="_blank">Form with Element Print</a></h5>
//       </li>
//     </ul>
//     `
//   more.innerHTML += string
//   let scroll = document.getElementById('scroll')
//   scroll.scrollIntoView({ behavior: 'smooth' })
// }
// function moreClose() {
//   var more = document.getElementById('more')
//   more.innerHTML = ""
//   let scroll = document.getElementById('MadeBy')
//   scroll.scrollIntoView({ behavior: "smooth" })
// }
function feedbackResponse() {
  var feedbackResponseDiv = document.getElementById('feedbackResponseDiv')
  let feedbackResponseDivHTML = `
          <hr style="height: 1px; background-color: black;">
          <button type="button" onclick="feedBackClose()" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button> 
            <h3 class="card-subtitle mb-2 text-muted my-2">Feedback:</h3>
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Feedback</span>
              </div>
              <textarea id="feedBackInput" type="text" class="form-control" style="min-height: 50px; max-height: 200px; height: 60px;" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Your Feedback Here"></textarea>
              <br><br>
              <button class="btn btn-primary btn-sm" onclick="feedBackSubmit()">Submit Feedback</button>
            </div>
            <br>
            <h5 id="feedbackResponseValue" class="card-subtitle mb-2 text-muted my-2"></h5>
            <br>
            <button type="button" id="scroll2" class="btn btn-primary btn-sm" onclick="lastFeedBack()">Last Feedback</button>
            <br><br>
        `
  feedbackResponseDiv.innerHTML = feedbackResponseDivHTML
  var scroll2 = document.getElementById('scroll2')
  scroll2.scrollIntoView({ behavior: 'smooth' })
}
function feedBackSubmit() {
  var feedBackInput = document.getElementById('feedBackInput').value
  var feedbackResponseValue = document.getElementById('feedbackResponseValue')
  if (feedBackInput == "") {
    console.error("First Input Feedback")
  }
  else if (feedBackInput.length < 3) {
    console.error("Your Feedback is not sufficient!")
  }
  else {
    feedbackResponseValue.innerHTML = `
            Your Feedback:- ${feedBackInput}
          `
    localStorage.setItem('Feedback', feedBackInput)
    window.alert("Thanks For Your Feedback")
  }
}
function lastFeedBack() {
  var feedbackResponseValue = document.getElementById('feedbackResponseValue')
  var lastFeedBackValue = localStorage.getItem('Feedback')
  if (lastFeedBackValue === null) {
    lastFeedBackValue = "You had not add any Feedback Last time!"
  }
  feedbackResponseValue.innerHTML = `
          Your Last Feedback was:- ${lastFeedBackValue}
        `
}
function feedBackClose() {
  var feedbackResponseDiv = document.getElementById('feedbackResponseDiv')
  feedbackResponseDiv.innerHTML = ""
  let scroll = document.getElementById('MadeBy');
  scroll.scrollIntoView({ behavior: "smooth" })
}
function refreshHover() {
  let refreshAlt = document.getElementById('refreshAlt')
  refreshAlt.innerHTML = "Refresh ?"
}
function refreshHoverOut() {
  let refreshAlt = document.getElementById('refreshAlt')
  refreshAlt.innerHTML = ""
}
function copyApiKey() {
  var apiInput = document.getElementById('Apikey-input')
  apiInput.select()
  apiInput.setSelectionRange(0, 999999999)
  document.execCommand('copy')
  setTimeout(() => {
    alert("API key Copied: " + apiInput.value)
  }, 500);
  console.info("API key Copied: " + apiInput.value)
}

function mainHome() {
  let scroll5 = document.getElementById('scrollIsThis');
  scroll5.scrollIntoView({ behavior: 'smooth' })
}

function newsClose() {
  let confirm = window.confirm("Do You want to Close all News?")
  if (confirm === false) {

  } else {
    let response7 = document.getElementById('Response')
    let refreshMainDiv = document.getElementById('refreshMainDiv')
    let totalResults = document.getElementById('totalResults')
    totalResults.innerHTML = ""
    refreshMainDiv.innerHTML = ""
    response7.innerHTML = ""

    let response = document.getElementById('response');
    response.innerHTML = `Submit all Imformation to get News!`

    let errorDiv = document.getElementById('errorDiv')
    errorDiv.innerHTML = ""

    let scroll5 = document.getElementById('scrollIsThis');
    scroll5.scrollIntoView({ behavior: 'smooth' })
  }
}
