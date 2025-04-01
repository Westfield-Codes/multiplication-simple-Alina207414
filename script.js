/* MULTIPLICATION SIMPLE
 * This program should ask multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */

main()

/* main controls the program. Calling askQuestions() it provides feedback depending on the 
 * number right returned: Either "Perfect!" or otherwise it says how many right out of the number asked. 
 * Set a number of questions as the variable called questions.
 * @param none
 * @return none
 */
function main() {
    let questions = 5;
    let right = askQuestions(questions);
    if (right == questions) {
    alert("Perfect!");
    }
    else {
        alert("You got " + right + " out of " + questions);
    }


}

/* askFive calls askQuestion() questions times, sending the question number as an argument. 
 * It counts number wrong returned, and return number wrong to main().
 * @param: none
 * @return: score (0-question)
 */
function askQuestions(questions) {
    let right = 0;
    let question = 1;
    while (question <= questions) {
        right += askQuestion(question);
    question ++;
    }
    return right; 
}
/* askQuestion asks a multiplication question, using the quesiton parameter to say which
 * question is being asked.  It returns 1 if correct, 0 if incorrect.
 * @param: question (integer 1-5)
 * @return: integer (0 or 1)
 */
function askQuestion(question){
   let a = Math.floor(Math.random()*(9-3+1))+2;
   let b = Math.floor(Math.random()*(9-3+1))+2;
   let product = a * b;
   let equation = "Question " + question + "  : " + a + " * " + b + " = ?";
   let answer = prompt(equation);
   if (answer == product) {
    alert("correct!");
    return true;
     alert("Incorrect!");
    return false;
   }
}