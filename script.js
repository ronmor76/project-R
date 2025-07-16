alert("hellooo")

function scoping(postName){
    let likes = 0;

    // closure
    return function(){
        likes++;
        console.log(`${postName} Got ${likes} likes!`);
    }
}

let likesPost1 = scoping("Post Fight")
likesPost1();
likesPost1();