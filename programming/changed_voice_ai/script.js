const startRecordButton = document.getElementById('startRecord');
const stopRecordButton = document.getElementById('stopRecord');
const playRecordButton = document.getElementById('playRecord');
const deleteRecordButton = document.getElementById('deleteRecord');
const retryRecordButton = document.getElementById('retryRecord');
const audioPlayer = document.getElementById('audioPlayer');

let mediaRecorder;
let audioChunks = [];

startRecordButton.addEventListener('click', startRecording);
stopRecordButton.addEventListener('click', stopRecording);
playRecordButton.addEventListener('click', playRecording);
deleteRecordButton.addEventListener('click', deleteRecording);
retryRecordButton.addEventListener('click', retryRecording);

function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            startRecordButton.disabled = true;
            stopRecordButton.disabled = false;
            playRecordButton.disabled = true;
            deleteRecordButton.disabled = true;
            retryRecordButton.disabled = true;

            mediaRecorder.addEventListener('dataavailable', event => {
                audioChunks.push(event.data);
            });
        })
        .catch(error => {
            console.error('Error al acceder al micrófono:', error);
        });
}

function stopRecording() {
    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach(track => track.stop());
    startRecordButton.disabled = false;
    stopRecordButton.disabled = true;
    playRecordButton.disabled = false;
    deleteRecordButton.disabled = false;
    retryRecordButton.disabled = false;
}


function playRecording() {
    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    audioPlayer.src = audioUrl;
    audioPlayer.play();
}

function deleteRecording() {
    audioChunks = [];
    audioPlayer.src = '';
    startRecordButton.disabled = false;
    stopRecordButton.disabled = true;
    playRecordButton.disabled = true;
    deleteRecordButton.disabled = true;
    retryRecordButton.disabled = true;
}

function retryRecording() {
    audioChunks = [];
    audioPlayer.src = '';
    startRecording();
}


