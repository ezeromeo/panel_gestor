function setupFormadorIconPopover() {
    let iconImage = document.getElementById('formadorIcon');
    let isClicked = false;

    if (!iconImage) return;

    var menuPopover = new bootstrap.Popover(iconImage, {
        html: true,
        content: `<div class="d-flex flex-column align-items-between justify-content-center popoverFecha">
                    <p id="gestor">Gestor</p>
                    <p id="administrador">Administrador</p>
                    <p id="alumnoInscrito">Alumno Inscrito</p>
                    <p id="formador">Formador</p>
                  </div>`,
        trigger: 'manual',
        placement: 'bottom',
    });

    iconImage.addEventListener('click', function (event) {
        isClicked = !isClicked;
        menuPopover.toggle();
        event.stopPropagation();
    });

    document.addEventListener('click', function () {
        if (isClicked) {
            isClicked = false;
            menuPopover.hide();
        }
    });


    document.body.addEventListener('click', function (event) {
        console.log(event)
        const isGitHubPages = window.location.hostname.includes('github.io');
        if (event.target.id === 'formador') {
            window.location.href = isGitHubPages ? '/panel_gestor' : '/index.html';
        }
        else if (event.target.id === 'administrador') {
            window.location.href = isGitHubPages ? '/panel_gestor' : '/assets/pages/administrador.html';
        }
    });
    
    
}

document.addEventListener('DOMContentLoaded', function () {
    setupFormadorIconPopover();
});

function setupIconImageEvents(iconImage) {
    let isClicked = false;
    let menu = document.querySelector('#iconImage'); 

    var menuPopover = new bootstrap.Popover(menu, {
        html: true,
        content: `<div class="d-flex flex-column align-items-between justify-content-center popoverFecha">
                    <p id="asistencia">Resumen Asistencia</p>
                    <p id="control">Resumen Control</p>
                    <p id="formador">Control Formador</p>
                    <p id="documentacion">Documentación</p>
                  </div>`,
        trigger: 'manual',
        placement: 'bottom',
    });

    iconImage.addEventListener('mouseover', function () {
        if (!isClicked) {
            this.src = "../img/x-icon.svg";
        }
    });

    iconImage.addEventListener('mouseout', function () {
        if (!isClicked) {
            this.src = "../img/burger-menu-icon.svg";
        }
    });

    iconImage.addEventListener('click', function (event) {
        isClicked = !isClicked;  
        this.src = "../img/x-icon.svg";
        menuPopover.toggle();
        setupModalEvents(); 
        event.stopPropagation();
    });

    document.addEventListener('click', function () {
        if (isClicked) {
            isClicked = false;
            iconImage.src = "../img/burger-menu-icon.svg";
            menuPopover.hide();
        }
    });
}

function setupModalEvents() {
    document.getElementById('asistencia').addEventListener('click', function() {
        openModal('Resumen asistencia');
    });
    document.getElementById('control').addEventListener('click', function() {
        openModal('Resumen control');
    });
    document.getElementById('formador').addEventListener('click', function() {
        openModal('Control Formadores y Responsables');
    });
    document.getElementById('documentacion').addEventListener('click', function() {
        openModal('Documentación');
    });
}