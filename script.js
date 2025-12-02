function tokenize(text){
    //const cleaned = text.replace(/\s+/g,'');

const tokens=[];

for(let i=0;i<text.length;i+=4){
    tokens.push(text.slice(i,i+4));
}
return tokens;
}

function counttoken(){
    const prompt = document.getElementById("prompt").value;
    const charcount = prompt.length;//.replace(/\s+/g,'').length;
    const tokens= tokenize(prompt);
    document.getElementById("CharNum").textContent = charcount;
    document.getElementById("tokenNum").textContent = tokens.length;
}
function cleartext(){
    document.getElementById("prompt").value ="";
    document.getElementById("CharNum").textContent = 0;
    document.getElementById("tokenNum").textContent = 0;
}

