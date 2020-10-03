const inputA1 = document.getElementById('A1');
const inputA2 = document.getElementById('A2');
const inputA3 = document.getElementById('A3');
var mediaNotas;

function getMedia() {
    
    let notas = [
        inputA1.value,
        inputA2.value,
        inputA3.value
    ];

    notas = majorValue(notas);
    mediaNotas = media(notas[2], notas[1]);
    let resp = checkMedia(mediaNotas);

    setResponseFeedBack(resp.nota, 'media', resp.style);
}

function majorValue(values) {
    return values.sort(function(a, b) {
        return a - b;
    });
}

function media(valA, valB) {
    return (parseFloat(valA) + parseFloat(valB))/2;
}

function checkMedia(media) {
    if(media >= 6) {
        return {
            nota: media,
            style: {
                add: 'passad',
                remove: 'disapproved'
            }
        };

    }   else {
        return {
            nota: media,
            style: {
                add: 'disapproved',
                remove: 'passad'
            }
        }

    }
}

function setResponseFeedBack(response, id, feedbackStyle){
    const element = document.getElementById(id);
    element.innerHTML = response;
    element.classList.remove(feedbackStyle.remove);
    element.classList.add(feedbackStyle.add);
}