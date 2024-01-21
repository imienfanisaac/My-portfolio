let quizDataq = []
let index =0;
let qid ="";  
let score = 0;
let messageEls = document.getElementById("qcards")

// Function to read all current data in db collection "quiz"
const getplayQuiz = async () => {
    await db
        .collection("quiz")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                docData = doc.data();
                quizDataq.push(docData)
                //Here we show the quiz
            });
        })
        .then(() => {
            playQuiz(quizDataq);
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
};
getplayQuiz();

let qResultsEl = document.querySelector(".qresults");
let qMessageEl = document.querySelector("#checkmessage");
let qRatingsEl = document.querySelector("#q-ratings");
let qcardEL = document.querySelector("#qcards");
let scoreMsgEl = document.querySelector("#scoremessage");


function playQuiz(data) {
    qcardEL.innerHTML= "";
   
    if (score >= 1) {
         scoreMsgEl.innerHTML=`Score: ${score} points`
    }
    else{
        scoreMsgEl.innerHTML=`Score: ${score} point`
    }
    data.map((docData, i) => {
        if (index == i && docData)  {
            const card = document.querySelector("#qcards");
            quizPlayEl = document.createElement("DIV");
            quizPlayEl.innerHTML = "";
            let cardInfo = `
            <div  class="col mb-4 tarjetas">
                <div class="card bg-light text-dark my-3">
                    <div class="card-body">
                        <h5 class="card-title">Question: ${docData.question}</h5>
                        <div class="select" id="iden">
                            <p id="1" class="card-text"> ${docData.answers.answer1}</p> 
                            <p id="2" class="card-text"> ${docData.answers.answer2}</p>
                            <p id="3" class="card-text"> ${docData.answers.answer3}</p>
                        </div>
                        <h5 class="pt-3">Difficulty rate</h5>
                        <span class="fa fa-star ques-star"></span>
                        <span class="fa fa-star ques-star"></span>
                        <span class="fa fa-star ques-star"></span>
                        <span class="fa fa-star ques-star"></span>
                        <span class="fa fa-star ques-star"></span>
                        <button id="submit" type="submit" class="btn btn-md btn-success btn-block p-1 my-3">
                        Submit
                        </button>
                    </div>
                </div>
            </div>`;

            quizPlayEl.innerHTML = cardInfo;
            quizPlayEl.style.width = "100%";
            card.append(quizPlayEl);
            let answerEL = document.getElementsByClassName(`card-text`)
            for (i=0; i<answerEL.length; i++) {
                answerEL[i].addEventListener('click',(e)=>{
                    for (j=0; j<answerEL.length; j++) {
                    answerEL[j].style.color="black" 
                    }
                    qid = e.target.id
                    document.getElementById(`${qid}`).style.color="blue"; 
                
                })

            }
            // A little time out, in case the DOM is not rendered with the
            // question cards so quickly
            setTimeout(() => {
                importRating(docData.points, i);
                document.getElementById('submit').addEventListener('click',()=>{
                    scoreQuiz(docData.right_ans, docData.points)                        
                })
            }, 1000)
        }     
                
    })
    index += 1;
    if (index > data.length) {
        popupmessage()
    }
};

function scoreQuiz(right_ans, points) {
    var xid = qid;

    console.log(xid)
    console.log(right_ans)
    if (xid==right_ans) {
        score+=points
    }
    playQuiz(quizDataq) 
} 

function importRating(points, i) {
    let starsEl = document.getElementsByClassName(`fa fa-star ques-star`);
    for (i = 0; i < starsEl.length; i++) {
        if (points > i) {
            starsEl[i].classList.toggle("checked");
        }
    }
}

function  popupmessage() {
    messageEls.innerHTML = `<button type="submit" class="btn btn-md p-1 btn-success btn-block my-2" id="replay"
    onclick="backtoplay()">Replay Quiz</button>`
}
function backtoplay() {
    window.location="playquiz.html"
}



