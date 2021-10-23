function addingStrings (){
    var totalString ="";
    for(let i=0;i<arguments.length;i++){
        totalString+=arguments[i]+' ';
    }
    //  firstString+secondString;
    // console.log(totalString);
    // console.log([...arguments].join(" "));
    console.log(arguments);
}

addingStrings("Shad" , "Tuba" , "Reza" , "Sidratul" , 'Muntaha' , 'egg');