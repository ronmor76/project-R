alert("hellooo")

function scoping(postName){
    let likes = 0;

    // closure
    return function(){
        likes++;
    }
}

let likesPost1 = scoping("Post Fight")
likesPost1();
likesPost1();