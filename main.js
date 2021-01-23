

function get_paragraph(){
    var inputs =[];

    for (var i=1; i<6; i++)
    {
          inputs.push(document.getElementById("box-" +i).value);
    }
    var sentence = inputs.join(". ");
    console.log(sentence);
    document.getElementById("show_paragraph").innerHTML=sentence;
}