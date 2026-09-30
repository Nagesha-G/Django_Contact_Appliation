/* =========================================
Contact Manager - JavaScript
========================================= */

/* ---------- Browser Navigation ---------- */

function goBack() {
if (window.history.length > 1) {
window.history.back();
} else {
window.location.href = "/";
}
}

/* ---------- Delete Confirmation ---------- */

document.addEventListener("DOMContentLoaded", function () {

```
const deleteForms = document.querySelectorAll(
    'form[action*="/delete/"]'
);

deleteForms.forEach(function (form) {

    form.addEventListener("submit", function (event) {

        const confirmed = confirm(
            "Are you sure you want to delete this contact?"
        );

        if (!confirmed) {
            event.preventDefault();
        }

    });

});
```

});

/* =========================================
Three.js Background
========================================= */

function startThreeBackground() {

```
// Don't run if Three.js isn't loaded
if (typeof THREE === "undefined") {
    return;
}

const canvas = document.getElementById("three-background");

if (!canvas) {
    return;
}

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);


/* ---------- Particles ---------- */

const geometry = new THREE.BufferGeometry();

const particleCount = 500;

const positions = new Float32Array(
    particleCount * 3
);

for (let i = 0; i < particleCount * 3; i++) {

    positions[i] =
        (Math.random() - 0.5) * 14;

}

geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);


const material = new THREE.PointsMaterial({
    color: 0x7dd3fc,
    size: 0.025,
    transparent: true,
    opacity: 0.7
});


const particles = new THREE.Points(
    geometry,
    material
);

scene.add(particles);


/* ---------- Animation ---------- */

function animate() {

    requestAnimationFrame(animate);

    particles.rotation.y += 0.0008;
    particles.rotation.x += 0.0002;

    renderer.render(
        scene,
        camera
    );
}

animate();


/* ---------- Resize ---------- */

window.addEventListener(
    "resize",
    function () {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);
```

}

/* ---------- Start ---------- */

document.addEventListener(
"DOMContentLoaded",
startThreeBackground
);
