// Adding comments to the comment section on the blog page

// Get information from the user in the form element
    // query selector to store form element
    // store user info in variables
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
        
        // Code to make the date appear taken (& modified) from NakedBrunch on Stack Overflow: https://stackoverflow.com/questions/4904667/html-how-do-i-insert-dynamic-date-in-webpage
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];
        let today = new Date();
        today.setTime(today.getTime() + (1000 * 3600));
        document.getElementById("spanDate").innerHTML = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + " by ";
        
        // clear the form inputs
        nameInput.value = "";
        emailInput.value = "";
        commentInput.value = "";
    };
    
});

