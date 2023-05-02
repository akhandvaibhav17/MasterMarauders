const currentPage = document.title;
// Score Calculation
if (currentPage === "Document" || currentPage === "Instructions") {
    sessionStorage.setItem("Score", null);
    sessionStorage.clear();
}
var score = sessionStorage.getItem("Score");
if (score === null)
    score = 200;

//Finish
if (currentPage === "Finish") {
    document.querySelector('.total-score').innerHTML = "TotalScore- " + score;
    const buttons = document.querySelector('button');
    buttons.addEventListener('click', function() {
        window.location.replace("instruction.html");
        sessionStorage.setItem("Score", null);
    })
} else {
    document.querySelectorAll(".hint")[1].innerHTML = "Score " + score;
}

//Dead End
if (currentPage === "dead1") {
    const buttons = document.querySelectorAll('.dead-submit');
    buttons[0].addEventListener('click', function() {
        window.location.replace("page61.html");
        sessionStorage.setItem("Score", score - 3);
    })
    buttons[1].addEventListener('click', function() {
        window.location.replace("page2.html");
        sessionStorage.setItem("Score", score - 7);
    })
    buttons[2].addEventListener('click', function() {
        window.location.replace("page1.html");
        sessionStorage.setItem("Score", score - 12);
    })
}
if (currentPage === "dead2") {
    const buttons = document.querySelectorAll('.dead-submit');
    buttons[0].addEventListener('click', function() {
        window.location.replace("page62.html");
        sessionStorage.setItem("Score", score - 3);
    })
    buttons[1].addEventListener('click', function() {
        window.location.replace("page3.html");
        sessionStorage.setItem("Score", score - 7);
    })
    buttons[2].addEventListener('click', function() {
        window.location.replace("page1.html");
        sessionStorage.setItem("Score", score - 12);
    })
}
if (currentPage === "dead3") {
    const buttons = document.querySelectorAll('.dead-submit');
    buttons[0].addEventListener('click', function() {
        window.location.replace("page81.html");
        sessionStorage.setItem("Score", score - 3);
    })
    buttons[1].addEventListener('click', function() {
        window.location.replace("page4.html");
        sessionStorage.setItem("Score", score - 7);
    })
    buttons[2].addEventListener('click', function() {
        window.location.replace("page2.html");
        sessionStorage.setItem("Score", score - 12);
    })
    buttons[3].addEventListener('click', function() {
        window.location.replace("page1.html");
        sessionStorage.setItem("Score", score - 15);
    })
}
if (currentPage === "dead4") {
    const buttons = document.querySelectorAll('.dead-submit');
    buttons[0].addEventListener('click', function() {
        window.location.replace("page82.html");
        sessionStorage.setItem("Score", score - 3);
    })
    buttons[1].addEventListener('click', function() {
        window.location.replace("page5.html");
        sessionStorage.setItem("Score", score - 7);
    })
    buttons[2].addEventListener('click', function() {
        window.location.replace("page3.html");
        sessionStorage.setItem("Score", score - 12);
    })
    buttons[3].addEventListener('click', function() {
        window.location.replace("page1.html");
        sessionStorage.setItem("Score", score - 15);
    })
}
if (currentPage === "dead5") {
    const buttons = document.querySelectorAll('.dead-submit');
    buttons[0].addEventListener('click', function() {
        window.location.replace("page9.html");
        sessionStorage.setItem("Score", score - 3);
    })
    buttons[1].addEventListener('click', function() {
        window.location.replace("page5.html");
        sessionStorage.setItem("Score", score - 7);
    })
    buttons[2].addEventListener('click', function() {
        window.location.replace("page3.html");
        sessionStorage.setItem("Score", score - 12);
    })
    buttons[3].addEventListener('click', function() {
        window.location.replace("page1.html");
        sessionStorage.setItem("Score", score - 15);
    })
}
if (currentPage === "dead6") {
    const buttons = document.querySelectorAll('.dead-submit');
    buttons[0].addEventListener('click', function() {
        window.location.replace("page10.html");
        sessionStorage.setItem("Score", score - 3);
    })
    buttons[1].addEventListener('click', function() {
        window.location.replace("page5.html");
        sessionStorage.setItem("Score", score - 7);
    })
    buttons[2].addEventListener('click', function() {
        window.location.replace("page3.html");
        sessionStorage.setItem("Score", score - 12);
    })
    buttons[3].addEventListener('click', function() {
        window.location.replace("page1.html");
        sessionStorage.setItem("Score", score - 15);
    })
}

//View Hint
const hint = document.querySelector('.hint');
hint.addEventListener('click', function() {
    document.querySelector(".hints").style.display = "block";
})

//Checking Answer
const output = document.querySelector('.response');
const buttons = document.querySelector('.submit');
buttons.addEventListener('click', function() {
    if (currentPage === "Node1") {
        answer = output.value;
        if (answer == 'ITALY')
            window.location.replace("page2.html");
        else if (answer == 'GERMANY')
            window.location.replace("page3.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
    if (currentPage === "Node2") {
        answer = output.value;
        if (answer == 'DAFAQU')
            window.location.replace("page4.html");
        else if (answer == 'YANGBAOSHAN')
            window.location.replace("page61.html");
        else
            document.querySelector(".incorrect").style.display = "block";

    }
    if (currentPage === "Node3") {
        answer = output.value;
        if (answer == 'DAVID WARNER')
            window.location.replace("page5.html");
        else if (answer == 'JOS BUTTLER')
            window.location.replace("page62.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
    if (currentPage === "Node4") {
        answer = output.value;
        if (answer == 'CALLISTO')
            window.location.replace("page7.html");
        else if (answer == 'EUROPA')
            window.location.replace("page5.html");
        else if (answer == 'GANYMEDE')
            window.location.replace("page81.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
    if (currentPage === "Node5") {
        answer = output.value;
        if (answer == 'EMU')
            window.location.replace("page9.html");
        else if (answer == 'OSTRICH')
            window.location.replace("page82.html");
        else if (answer == 'PENGUIN')
            window.location.replace("page10.html");
        else
            document.querySelector(".incorrect").style.display = "block";

    }
    if (currentPage === "Node61") {
        answer = output.value;
        if (answer == 'KICK OFF')
            window.location.replace("dead1.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
    if (currentPage === "Node62") {
        answer = output.value;
        if (answer == 'KICK OFF')
            window.location.replace("dead2.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
    if (currentPage === "Node7") {
        answer = output.value;
        if (answer == 'NESTLE')
            window.location.replace("page11.html");
        else if (answer == 'LAYS')
            window.location.replace("page9.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
    if (currentPage === "Node81") {
        answer = output.value;
        if (answer == 'WINNER')
            window.location.replace("dead3.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
    if (currentPage === "Node82") {
        answer = output.value;
        if (answer == 'WINNER')
            window.location.replace("dead4.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
    if (currentPage === "Node9") {
        answer = output.value;
        if (answer == 'FRENCH')
            window.location.replace("dead5.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
    if (currentPage === "Node10") {
        answer = output.value;
        if (answer == 'CELEBRATE')
            window.location.replace("dead6.html");
        else
            document.querySelector(".incorrect").style.display = "block";

    }
    if (currentPage === "Node11") {
        answer = output.value;
        if (answer == 'CONGRATULATIONS')
            window.location.replace("finish.html");
        else
            document.querySelector(".incorrect").style.display = "block";
    }
})