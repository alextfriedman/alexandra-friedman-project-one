// Adding comments to the comment section on the blog page

// Get information from the user in the form element
    // query selector to store form element
    // store user info in a variable
    // all of this will go in an event listener on button submit
// Append the information to the page
    // query selector for the dynamic content

const formElement = document.querySelector("form.commentForm");

formElement.addEventListener("submit", function(event){
    event.preventDefault();

    const nameInput = document.querySelector("input[type=text]");

    const name = nameInput.value;

    const emailInput = document.querySelector("input[type=email]");
    
    const commentInput = document.querySelector("textarea#comment");

    const comment = commentInput.value;

    if (comment) {
        // create a p element with a class="date"
        const dateName = document.createElement("p");
        dateName.classList.add("date");
        // update the p.date textContent to be the user's name
        dateName.textContent = name;
        // append name to the div on the page
        document.querySelector("div.newComment").appendChild(dateName);
        // create a p element
        const paragraph = document.createElement("p");
        // update the p textContent to be the user's comment
        paragraph.textContent = comment;
        // append comment to the div on the page
        document.querySelector("div.newComment").appendChild(paragraph);
        // clear the form by making it an empty string
        nameInput.value = "";
        emailInput.value = "";
        commentInput.value = "";
    };
});

