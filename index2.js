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
              <textarea id="feedBackInput" type="text" class="form-control" style="min-height: 50px; min-width: 200px; max-height: 200px; height: 60px;" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Your Feedback Here"></textarea>
              <br><br>
              <button class="btn btn-primary btn-sm" onclick="feedBackSubmit()">Submit Feedback</button>
            </div>
            <br>
            <h5 id="feedbackResponseValue" class="card-subtitle mb-2 text-muted my-2"></h5>
            <br>
            <button type="button" id="scroll2" class="btn btn-primary btn-sm" id="feedbackSubmit" onclick="lastFeedBack()">Last Feedback</button>
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
