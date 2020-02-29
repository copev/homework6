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
	//  if (video.ended){
	// 	video.currentTime = 0
	//  	video.playbackRate = 1.0}
	// else{
	// 	video.currentTime += 60

	if (video.currentTime < video.duration && video.ended==false){
	// unsure if this is closer, because the logic of this statement might be irrelevant. If a condition is met during hte execution of this if statement, does the program stop what its doing or continue on with what it was told? Ex. this statement says add 60 if the video's current time is less than the duration, but what happens if the end is hit after adding only 40 seconds? does this continue to add the remaining 20 because it was already in progress or will it stop since it now means video.ended==true?
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