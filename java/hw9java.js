var score=0;
var letter = 'A';
var used_letters = new Array(100);
var q;
var inc = 0;
var pass = 1;

//not even sure if this for loop will run on start up
for (q=0; q < 100; q++) {
    used_letters[q] = 0;
}

function process() {
    event.preventDefault();

    score++;
    var divRdv = $('<div class="draggable ui-widget-content" data-object=score>My div</div>');
    divRdv.attr("data-object",score);
    $(document.getElementById('tiles')).append(divRdv);

    divRdv.draggable({revert: "invalid"});
}

function process2() {
    event.preventDefault();

    var random = (Math.random() * 99 + 1); //heres my random number this might give me 101 sometimes or not give me 100
    var n = random.toFixed(0);
    used_letters[inc] = n;
    inc++;

    for (q=0; q < 100; q++) {
        if (used_letters[q] == n) {
            pass = 0;
        } else {
            pass = 1;
        }
    }

    if (pass) {
        tile_maker(n);
    }
}

function process3() {
    event.preventDefault();

    var total_score = 0;
    var temp = 0;

    //score needs to be calculated and displayed
    if (ui.helper.data('dropped1')) { //assuming this will hold a boolean
        temp = parseInt($("#div1_value").data());
        total_score = total_score + temp;
    }
    if (ui.helper.data('dropped2')) { //assuming this will hold a boolean
        temp = parseInt($("#div2_value").data());
        total_score = total_score + temp;
    }
    if (ui.helper.data('dropped3')) { //assuming this will hold a boolean
        temp = parseInt($("#div3_value").data());
        total_score = total_score + temp;
    }
    if (ui.helper.data('dropped4')) { //assuming this will hold a boolean
        temp = parseInt($("#div4_value").data());
        total_score = total_score + temp;
    }
    if (ui.helper.data('dropped5')) { //assuming this will hold a boolean
        temp = parseInt($("#div5_value").data());
        total_score = total_score + temp;
    }
    if (ui.helper.data('dropped6')) { //assuming this will hold a boolean
        temp = parseInt($("#div6_value").data());
        total_score = total_score + temp;
    }
    if (ui.helper.data('dropped7')) { //assuming this will hold a boolean
        temp = parseInt($("#div7_value").data());
        total_score = total_score + temp;
    }

    if (ui.helper.data('dropped2') || ui.helper.data('dropped6')) { //double word bonus
        total_score = total_score * 2;
    }

    //display the score of the word
    $("#final_score").text(total_score);
    //used tiles need to be removed

    //tiles on the rack need to be replaced
}

function tile_maker (n) {
    if (n >= 1 && n <= 9) { //if the randomized result is equal to A come in here. Then make the div to make the new tile
        letter = 'A';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Atile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 10 && n <= 11) { //B
        letter = 'B';
        score = 3;

        var divRdv = $('<div class="draggable ui-widget-content" id="Btile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 12 && n <= 13) { //C
        letter = 'C';
        score = 3;

        var divRdv = $('<div class="draggable ui-widget-content" id="Ctile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 14 && n <= 17) { //D
        letter = 'D';
        score = 2;

        var divRdv = $('<div class="draggable ui-widget-content" id="Dtile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 18 && n <= 29) { //E
        letter = 'E';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Etile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 30 && n <= 31) { //F
        letter = 'F';
        score = F;

        var divRdv = $('<div class="draggable ui-widget-content" id="Ftile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 32 && n <= 34) { //G
        letter = 'G';
        score = 2;

        var divRdv = $('<div class="draggable ui-widget-content" id="Gtile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 35 && n <= 36) { //H
        letter = 'H';
        score = 4;

        var divRdv = $('<div class="draggable ui-widget-content" id="Htile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 37 && n <= 45) { //I
        letter = 'I';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Itile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n == 46) { //J
        letter = 'J';
        score = 8;

        var divRdv = $('<div class="draggable ui-widget-content" id="Jtile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n == 47) { //K
        letter = 'K';
        score = 5;

        var divRdv = $('<div class="draggable ui-widget-content" id="Ktile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 48 && n <= 51) { //L
        letter = 'L';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Ltile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 52 && n <= 53) { //M
        letter = 'M';
        score = 3;

        var divRdv = $('<div class="draggable ui-widget-content" id="Mtile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 54 && n <= 59) { //N
        letter = 'N';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Ntile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 60 && n <= 67) { //O
        letter = 'O';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Otile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 68 && n <= 69) { //P
        letter = 'P';
        score = 3;

        var divRdv = $('<div class="draggable ui-widget-content" id="Ptile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n == 70) { //Q
        letter = 'Q';
        score = 10;

        var divRdv = $('<div class="draggable ui-widget-content" id="Qtile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 71 && n <= 76) { //R
        letter = 'R';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Rtile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 77 && n <= 80) { //S
        letter = 'S';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Stile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 81 && n <= 86) { //T
        letter = 'T';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Ttile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 87 && n <= 90) { //U
        letter = 'U';
        score = 1;

        var divRdv = $('<div class="draggable ui-widget-content" id="Utile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 91 && n <= 92) { //V
        letter = 'V';
        score = 4;

        var divRdv = $('<div class="draggable ui-widget-content" id="Vtile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 93 && n <= 94) { //W
        letter = 'W';
        score = 4;

        var divRdv = $('<div class="draggable ui-widget-content" id="Wtile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n == 95) { //X
        letter = 'X';
        score = 8;

        var divRdv = $('<div class="draggable ui-widget-content" id="Xtile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 96 && n <= 97) { //Y
        letter = 'Y';
        score = 4;

        var divRdv = $('<div class="draggable ui-widget-content" id="Ytile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n == 98) { //Z
        letter = 'Z';
        score = 10;

        var divRdv = $('<div class="draggable ui-widget-content" id="Ztile" data-object=score data-letter=letter></div>');
        divRdv.attr("data-object",score); //the point value of the tile
        divRdv.attr("data-letter",letter); //the letter on the tile
        $(document.getElementById('tiles')).append(divRdv);

        divRdv.draggable({
            revert: "invalid"
        });
    } else if (n >= 99 && n <= 100) { //BLANK
        //ummm
    }
}
