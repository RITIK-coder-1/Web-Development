let sent = "Hey Hey, this is ritik! Do you know who Ritik is? Ufff"

const count = (sentence) => {
    const repeatCount = new Map()
    const words = sentence.toLowerCase().split(" ");

    for (let index = 0; index < words.length; index++) {
        const word = words[index].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        const repeat = repeatCount.get(word) || 0;
        repeatCount.set(word, repeat + 1);
    }
    console.log(repeatCount);
    return repeatCount;
}

count(sent)

