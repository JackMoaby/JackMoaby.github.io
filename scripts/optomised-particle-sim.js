var particle_canvas = document.getElementById("particles-canvas");
var particle_screen = particle_canvas.getContext("2d");

var  simulation_settings, particles, paused
var mouse_location = [50,50]


particle_canvas.width = window.innerWidth; 
particle_canvas.height = window.innerHeight;


function init(){
    paused = false

    // [max_particles, dot_size, delta_v, friction]
    if (window.innerWidth > 800){
        simulation_settings = [2500, 5, 0.00008, 0.0012]
    } else {
        simulation_settings = [1000, 2, 0.00008, 0.0012]
    }

    // Clear particle array on init
    particles = []
    for (let i = 0; i < simulation_settings[0]; i++){
        particles.push([Math.random() * 100, Math.random() * 100, 0, 0]);
    }
}

function update_particles(){
    if (paused == false) {
        // Update the particles by their angle and velocity
        for (let i = 0; i < particles.length; i++) {
            particles[i][0] = particles[i][0] * (1 - simulation_settings[3])
            particles[i][1] = particles[i][1] * (1 - simulation_settings[3])
            let angle = Math.atan(Math.abs(mouse_location[1] - particles[i][1]) / Math.abs(mouse_location[0] - particles[i][0]))
            if (particles[i][0] < mouse_location[0] && particles[i][1] < mouse_location[1]){
                particles[i][2] += Math.cos(angle) * (180 / Math.PI) * simulation_settings[2];
                particles[i][3] += Math.sin(angle) * (180 / Math.PI) * simulation_settings[2];
            } else if (particles[i][0] > mouse_location[0] && particles[i][1] < mouse_location[1]){
                particles[i][2] -= Math.cos(angle) * (180 / Math.PI) * simulation_settings[2];
                particles[i][3] += Math.sin(angle) * (180 / Math.PI) * simulation_settings[2];
            } else if (particles[i][0] < mouse_location[0] && particles[i][1] > mouse_location[1]){
                particles[i][2] += Math.cos(angle) * (180 / Math.PI) * simulation_settings[2];
                particles[i][3] -= Math.sin(angle) * (180 / Math.PI) * simulation_settings[2];
            } else if (particles[i][0] > mouse_location[0] && particles[i][1] > mouse_location[1]){
                particles[i][2] -= Math.cos(angle) * (180 / Math.PI) * simulation_settings[2];
                particles[i][3] -= Math.sin(angle) * (180 / Math.PI) * simulation_settings[2];
            }
            particles[i][0] += particles[i][2]
            particles[i][1] += particles[i][3]
        }
        // Call the update again
        requestAnimationFrame(update_particles);
    }
}

function frame(){
    if (paused == false) {
        // Clear the canvas
        // particle_screen.clearRect(0, 0, particle_canvas.width, particle_canvas.height);

        // Motion blur the canvas
        particle_screen.beginPath();
        particle_screen.fillStyle = "rgba(0, 0, 0, 0.4)";
        particle_screen.rect(0, 0, particle_canvas.width, particle_canvas.height); 
        particle_screen.fill();

        // Draw the particles
        for (let i = 0; i < particles.length; i++) {
            particle_screen.beginPath();
            particle_screen.fillStyle = "#24b5aa";
            particle_screen.arc((particles[i][0] / 100) * particle_canvas.width , (particles[i][1] / 100) * particle_canvas.height, simulation_settings[1], 0, 2 * Math.PI)
            particle_screen.fill();
        }
        // Call the frame again
        requestAnimationFrame(frame);
    }
}

// On particle_screen resize, change the canvas to fill the particle_screen
onresize = function(event){
    particle_canvas.width = window.innerWidth;
    particle_canvas.height = window.innerHeight;
}

// On mouse movement update the mouse target point
onmousemove = function(event){
    if ((event.clientY < particle_canvas.height) && (event.clientX < particle_canvas.width)){
        mouse_location = [event.clientX / particle_canvas.width * 100, event.clientY / particle_canvas.height * 100]
    }
}
touchstart = function(event){
    if ((event.clientY < particle_canvas.height) && (event.clientX < particle_canvas.width)){
        mouse_location = [event.clientX / particle_canvas.width * 100, event.clientY / particle_canvas.height * 100]
    }
}
touchend = function(event){
    if ((event.clientY < particle_canvas.height) && (event.clientX < particle_canvas.width)){
        mouse_location = [event.clientX / particle_canvas.width * 100, event.clientY / particle_canvas.height * 100]
    }
}

onscroll = function(event){
    if (window.scrollY < particle_canvas.height){
        if (paused == true){
            paused = false;
            requestAnimationFrame(frame);
        }
    } else {
        paused = true;
    }
};


init();
update_particles();
frame();
