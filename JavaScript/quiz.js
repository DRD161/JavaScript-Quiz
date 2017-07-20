function submitAnswers() {
    //Set Total Amount Of Questions
    var total = 5;
    //Set Starting Score Value
    var score = 0;

    //Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //Form Validation
    /* Iterate through the questions and alert
       the user if they forget to answer a question */
    for (i = 1; i <= total; i++) {
        if (eval("q" + i) == null || eval("q" + i) == '') {
            alert("You forgot to answer question " + i);
            return false;
        }

    }

    //Set Correct Answers
    var answers = ["b", "d", "d", "b", "a"];

    //Check Answer
    /* Iterate through the array of correct answers and if the answer is 
       correct increase the score by one */
    for (i = 1; i <= total; i++) {
        if (eval("q" + i) == answers[i - 1]) {
            score++;
        }

    }
    //Display Results
    var results = document.getElementById("results");
    results.innerHTML = "<h3>You scored <span> " + score + " </span> out of <span>" + total + "</span></h3>"
    alert("You Scored " + score + " Out Of " + total);

    if (score === 5) {
        alert("PERFECT SCORE!");
    }
     if (score === 4) {
        alert("GREAT WORK!");
    }
     if (score === 3) {
        alert("VERY GOOD!");
    }
     if (score === 2) {
        alert("BETTER LUCK NEXT TIME.");
    }
     if (score === 1) {
        alert("TRY AND STUDY HARDER.");
    }

    return false;
}
