function wrap(){

let i = 0;

function textReWriter () {
    let informText = ['Or you want create your?', 'We can help you!', 'Would you like buy new domain?'];

    let currentText = document.getElementsByClassName("rewriting");
    i > 2 ? i = 0: i;
    currentText[0] = '';
    let str ='';
    for(result of informText[i]){
    currentText[0] = setInterval(recall(result), 100);
    }
    function recall (result){
        return str += result;
    }
}

textReWriter();
}
wrap();