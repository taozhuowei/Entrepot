export default function () {
    let uuid=[]
    let chars='0123456789' +
        'abcdefghijklmnopqrstuvwxyz' +
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i=0 ; i<8 ; i++){
        uuid[i]=chars.substr(Math.floor(Math.random()*16),1);
    }

    console.log("generate uuid : "+uuid.join(""))

    return uuid.join("");
}