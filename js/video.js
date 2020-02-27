var video;

function getVid(){
	video = document.querySelector("#myVideo");
	console.log("Speed is " + + video.playbackRate);
}

function playVid() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100+'%'
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	var video = document.getElementById("myVideo");
	video.playbackRate = video.playbackRate * 0.8;
	console.log("Speed is " + + video.playbackRate);
}

function increaseSpeed() {
	var video = document.getElementById("myVideo");
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is " + + video.playbackRate);
}

function skipAhead() {
	var video = document.getElementById("myVideo");
	// if (video.ended=false){
	// 	video.currentTime += 60}
	// else{
	// 	video.playbackRate = 1.0}, logic is reversable
	if (video.currentTime < video.duration){
		video.currentTime += 60}
	else {
		video.currentTime = 0
		video.playbackRate = 1}
	console.log("Current location is "+ video.currentTime);
}

function mute() {

	if (video.muted){
		document.getElementById('mute').innerHTML = "Mute"
		console.log("Changed to unmuted")
		video.muted = false}
	else{
		document.getElementById('mute').innerHTML = "Unmute"
		console.log("Changed to muted")
		video.muted = true}
}

function changeVolume() {
	var video = document.getElementById("myVideo");
	// console.log(this.value)
	// console.log("Volume slider is", volumeSlider.value)
	video.volume = volumeSlider.value / 100
	console.log("Volume is ", video.volume);
    document.querySelector("#volume").innerHTML = video.volume *100+'%'
}

function gray() {
	// var video = document.getElementById("myVideo")
	video.classList.add("grayscale")
	console.log("In grayscale")
}

function color() {
	// var video = document.getElementById("myVideo")
	video.classList.remove("grayscale")
	console.log("In color")
}



// The skip and restart playback speed at 1 is an if statement