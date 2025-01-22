document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Gather form values
    const eventDetails = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      location: document.getElementById('location').value,
      ticketPrice: document.getElementById('ticketPrice').value,
      privacy: document.querySelector('input[name="privacy"]:checked').value,
    };
  
    // Display event details in the console (you can replace this with your backend logic)
    console.log("Event Details:", eventDetails);
  
    // Clear form after submission
    document.getElementById('eventForm').reset();
    
    // Alert user about the event creation (optional)
    alert('Event Created Successfully!');
  });
// Discussion Forum: Posting a new discussion
function postDiscussion() {
    const discussionInput = document.getElementById('discussionInput');
    const discussionBoard = document.getElementById('discussionBoard');
    
    if (discussionInput.value.trim() !== "") {
      const newPost = document.createElement('div');
      newPost.classList.add('post');
      newPost.innerHTML = `<p>${discussionInput.value}</p>`;
      discussionBoard.appendChild(newPost);
      discussionInput.value = ""; // Clear the input field
    } else {
      alert("Please enter some text before posting.");
    }
  }
  
  // Poll: Submit Poll Response and Show Result
  document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const pollOptions = document.getElementsByName('poll');
    let selectedOption = "";
    pollOptions.forEach(option => {
      if (option.checked) {
        selectedOption = option.value;
      }
    });
  
    if (selectedOption !== "") {
      document.getElementById('pollResult').innerHTML = `<p>You selected: <strong>${selectedOption}</strong></p>`;
    } else {
      alert("Please select a topic to vote.");
    }
  });
  
  // Live Q&A: Asking a question
  function askQuestion() {
    const qaInput = document.getElementById('qaInput');
    const qaBoard = document.getElementById('qaBoard');
  
    if (qaInput.value.trim() !== "") {
      const newQuestion = document.createElement('div');
      newQuestion.classList.add('question');
      newQuestion.innerHTML = `<p><strong>Question:</strong> ${qaInput.value}</p>`;
      qaBoard.appendChild(newQuestion);
      qaInput.value = ""; // Clear the input field
    } else {
      alert("Please enter a question.");
    }
  }
    