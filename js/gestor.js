function iniciarAplicacion(){
    setupFormadorIconPopover();
    initializePopovers();
    applyEstadoColorClasses();
    initializePopoversAndCustomSelect();
    setupModalTrigger();
    setupAlumnosModal();
    setupCuestionarioSatisfaccionModal();
    setupMensajesSinLeerModal();
    setupMessageForm();
    setupForoModal();
    
    const iconImage = document.querySelector('#iconImage');
    const checkboxCelda = document.querySelector('.checkboxCelda');
    const teamsIcon = document.getElementById('teams');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    if (iconImage) {
        setupIconImageEvents(iconImage);
    }

    if (checkboxCelda) {
        checkboxCelda.addEventListener('click', redirectToAdministradorEditarGrupo);
    }

    if (teamsIcon) {
        teamsIcon.addEventListener('click', function() {
           
            window.open('https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_OGEwYzVjZWItMjU1ZS00MDdhLTkwMjgtYjVmZDFjOWFlOWVk%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252255ebc626-c187-4104-ad23-6ba253a4430a%2522%252c%2522Oid%2522%253a%2522618a437f-63df-4051-aa8f-b6f78ad37d57%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=7994d80d-4f90-4778-843a-fa37c907d995&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true', '_blank');
        });
    }

    document.querySelectorAll('.sesiones').forEach(button => {
        button.addEventListener('click', function() {
            openSignatureModalWithoutQR();
        });
      });
  
      hamburgerBtn.addEventListener('click', function() {
          const isOpen = hamburgerMenu.classList.contains('show');
          hamburgerMenu.classList.toggle('show', !isOpen);
      });
  
      document.addEventListener('click', function(event) {
          if (!hamburgerBtn.contains(event.target) && !hamburgerMenu.contains(event.target)) {
              hamburgerMenu.classList.remove('show');
          }
      });
    
}

// Redireccion a las otras pantallas desde el header


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
        const isGitHubPages = window.location.hostname.includes('github.io');
        if (event.target.id === 'formador') {
            window.location.href = isGitHubPages ? '/panel_gestor' : '/index.html';
        }
        else if (event.target.id === 'administrador') {
            window.location.href = isGitHubPages ? '/panel_gestor/assets/pages/administrador.html' : '/assets/pages/administrador.html';
        }
    });
    
    
    
}

// Apertura de menu burger de la card

function setupIconImageEvents(iconImage, menuPopover) {
    let isClicked = false;

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

// Configuración de Popovers para cada ícono
function initializePopovers() {
    const iconImage1 = document.querySelector('#iconImage');
    const iconImage2 = document.querySelector('#iconImage2');
    const iconImage3 = document.querySelector('#iconImage3');

    const popoverContent = `<div class="d-flex flex-column align-items-between justify-content-center popoverFecha">
                                <p class="mb-1" id="editarGrupo">Editar grupo</p>
                                <p class="mb-1" id="asistencia">Resumen Asistencia</p>
                                <p class="mb-1" id="control">Resumen Control</p>
                                <p class="mb-1" id="formadorControl">Control Formador</p>
                                <p class="mb-1" id="documentacion">Documentación</p>
                                <div class="controlChecksDiv w-100 d-flex align-items-center justify-content-between">
                                    <p class="mb-1" id="controlChecks">Control checks</p>
                                    <img src="../img/chevron-right.svg" class="mb-1">
                                </div>
                            </div>`;

    if (iconImage1) {
        let popover1 = new bootstrap.Popover(iconImage1, {
            html: true,
            content: popoverContent,
            trigger: 'manual',
            placement: 'bottom'
        });
        setupIconImageEvents(iconImage1, popover1);
    }

    if (iconImage2) {
        let popover2 = new bootstrap.Popover(iconImage2, {
            html: true,
            content: popoverContent,
            trigger: 'manual',
            placement: 'bottom'
        });
        setupIconImageEvents(iconImage2, popover2);
    }

    if (iconImage3) {
        let popover3 = new bootstrap.Popover(iconImage3, {
            html: true,
            content: popoverContent,
            trigger: 'manual',
            placement: 'bottom'
        });
        setupIconImageEvents(iconImage3, popover3);
    }
}


function setupSecondPopover(controlChecksElement) {
    const secondaryPopoverContent = `
        <div class="d-flex flex-column align-items-between justify-content-center popoverFecha">
            <p>Bloqueo envíos</p>
            <p>Firm@</p>
            <p>Geolocalización</p>
            <p>AV Subsalas y Grabación</p>
        </div>`;

    let secondaryPopover = new bootstrap.Popover(controlChecksElement, {
        html: true,
        content: secondaryPopoverContent,
        trigger: 'manual',
        placement: 'right'
    });

    controlChecksElement.addEventListener('click', function(event) {
        event.stopPropagation(); // Detiene la propagación para evitar cerrar el popover principal
        secondaryPopover.toggle(); // Alterna la visibilidad del popover secundario
    });

    return secondaryPopover;
}

function setupModalEvents() {
    const editarGrupo = document.getElementById('editarGrupo');
    if (editarGrupo) {
        editarGrupo.addEventListener('click', redirectToAdministradorEditarGrupo);
    }
    document.getElementById('asistencia').addEventListener('click', function() {
        openModal('Resumen asistencia');
    });
    document.getElementById('control').addEventListener('click', function() {
        openModal('Resumen control');
    });
    document.getElementById('formadorControl').addEventListener('click', function() {
        openModal('Control Formador');
    });
    document.getElementById('documentacion').addEventListener('click', function() {
        openModal('Documentación');
    });
}

const alumnosDataTeleformacion = [
    {
        alumno: 'Miguel Martínez [TUTOR]',
        asistencia: '11%',
        diploma: 'No Aplica',
        certifica: 'No Aplica',
        check1: true,
        fechaEnvio1: 'No Aplica',
        verEmail1: '',
        check2: true,
        fechaEnvio2: 'No Aplica',
        verEmail2: '',
        contenidos: '100%',
        tiempoTotal1: '2,3 Horas',
        eval: 'Si',
        mensajes: '2',
        tiempoTotal2: '0,2 Horas',
        acceso: 'Si',
        primera: '02/08/2023 10:11',
        ultima: '12/08/2023 14:33',
        total: '23',
        resultado: '100% Passed'
    },
    {
        alumno: 'Hernández Santiago',
        asistencia: '28,56%',
        diploma: 'Aprovechas',
        certifica: 'Si',
        check1: false,
        fechaEnvio1: 'Pendiente',
        verEmail1: '../img/envelopeIcon.svg',
        check2: false,
        fechaEnvio2: '',
        verEmail2: '',
        contenidos: '100%',
        tiempoTotal1: '2,3 Horas',
        eval: 'Si',
        mensajes: '2',
        tiempoTotal2: '0,2 Horas',
        acceso: 'Si',
        primera: '02/08/2023 10:11',
        ultima: '12/08/2023 14:33',
        total: '23',
        resultado: '100% Passed'
    },
    {
        alumno: 'Rodríguez Matthias',
        asistencia: '28,56%',
        diploma: '',
        certifica: '',
        check1: false,
        fechaEnvio1: '09/08/2023 09:23',
        verEmail1: '../img/envelopeIcon.svg',
        check2: false,
        fechaEnvio2: '',
        verEmail2: '',
        contenidos: '',
        tiempoTotal1: '',
        eval: '',
        mensajes: '',
        tiempoTotal2: '',
        acceso: '',
        primera: '',
        ultima: '',
        total: '',
        resultado: ''
    },
    {
        alumno: 'González María',
        asistencia: '28,56%',
        diploma: '',
        certifica: '',
        check1: false,
        fechaEnvio1: 'Pendiente',
        verEmail1: '../img/envelopeIcon.svg',
        check2: false,
        fechaEnvio2: '',
        verEmail2: '',
        contenidos: '',
        tiempoTotal1: '',
        eval: '',
        mensajes: '',
        tiempoTotal2: '',
        acceso: '',
        primera: '',
        ultima: '',
        total: '',
        resultado: ''
    },
    {
        alumno: 'Alumnos: 3',
        asistencia: '28,56%',
        diploma: '',
        certifica: '',
        check1: true,
        fechaEnvio1: 'Enviados: 1',
        verEmail1: '',
        check2: true,
        fechaEnvio2: 'Enviados: 1',
        verEmail2: '',
        contenidos: '',
        tiempoTotal1: '',
        eval: '',
        mensajes: '',
        tiempoTotal2: '',
        acceso: '',
        primera: '',
        ultima: '',
        total: '',
        resultado: ''
    }
];

const alumnosDataPresencial = [
  {
      alumno: 'Diego Pérez',
      asistencia: '28,56%',
      participacion: '',
      eval1: '',
      asistenciaFirmada: 'No',
      fechaUltimaSesion: 'Pendiente',
      asistenciaConfirmada: false,
      columna8: '',
      columna9: '',
      totalSesiones: '3',
      asistenciaValidada: 'No',
      fechaValidacion: 'Pendiente',
      validacionConfirmada: false,
      columna14: '',
      columna15: '',
      totalAsistencias: '3'
  },
  {
      alumno: 'Rodríguez Matthias',
      asistencia: '28,56%',
      participacion: '',
      eval1: '',
      asistenciaFirmada: 'No',
      fechaUltimaSesion: 'Pendiente',
      asistenciaConfirmada: false,
      columna8: '',
      columna9: '',
      totalSesiones: '2',
      asistenciaValidada: 'No',
      fechaValidacion: 'Pendiente',
      validacionConfirmada: false,
      columna14: '',
      columna15: '',
      totalAsistencias: '2'
  },
  {
      alumno: 'González María',
      asistencia: '28,56%',
      participacion: '',
      eval1: '',
      asistenciaFirmada: 'No',
      fechaUltimaSesion: 'Pendiente',
      asistenciaConfirmada: false,
      columna8: '',
      columna9: '',
      totalSesiones: '3',
      asistenciaValidada: 'No',
      fechaValidacion: 'Pendiente',
      validacionConfirmada: false,
      columna14: '',
      columna15: '',
      totalAsistencias: '3'
  },
  {
      alumno: 'Alumnos: 3',
      asistencia: '28,56%',
      participacion: '',
      eval1: '',
      asistenciaFirmada: '0',
      fechaUltimaSesion: '',
      asistenciaConfirmada: '',
      columna8: '',
      columna9: '',
      totalSesiones: '',
      asistenciaValidada: '',
      fechaValidacion: '',
      validacionConfirmada: '',
      columna14: '',
      columna15: '',
      totalAsistencias: ''
  }
];

const controlData = [
  {
    alumno: "Diego Perez",
    porcentaje: "28,56%",
    vacio1: "-",
    vacio2: "-",
    certifica: "-",
    check1: false,
    estado1: "Pendiente",
    emailIcon1: "../img/envelopeIcon.svg",
    check2: false,
    fecha1: "Pendiente",
    emailIcon2: "../img/envelopeIcon.svg",
    check3: false,
    destinatario1: "Pendiente Julián Romero",
    emailIcon3: "../img/envelopeIcon.svg",
    check4: false,
    estado2: "Pendiente",
    emailIcon4: "../img/envelopeIcon.svg",
    estado3: "Pendiente",
    vacio3: "",
    check5: false,
    estado4: "Pendiente",
    emailIcon5: "../img/envelopeIcon.svg",
    estado5: "Pendiente",
    vacio4: "",
    firmaDiploma: "Pendiente",
    doc: "",
    check6: false,
    estado6: "Pendiente",
    emailIcon6: "../img/envelopeIcon.svg",
    fecha2: "Pendiente",
    emailIcon7: "../img/envelopeIcon.svg",
    fecha3: "11/02/2023 10:12",
    emailIcon8: "../img/envelopeIcon.svg",
    estado7: "Pendiente",
    emailIcon9: "../img/envelopeIcon.svg"
  },
  {
    alumno: "Rodríguez Matthias",
    porcentaje: "28,56%",
    vacio1: "-",
    vacio2: "-",
    certifica: "-",
    check1: false,
    estado1: "Pendiente",
    emailIcon1: "../img/envelopeIcon.svg",
    check2: false,
    fecha1: "03/07/2023 10:33",
    emailIcon2: "../img/envelopeIcon.svg",
    check3: false,
    destinatario1: "Pendiente Julián Romero",
    emailIcon3: "../img/envelopeIcon.svg",
    check4: false,
    estado2: "Pendiente",
    emailIcon4: "../img/envelopeIcon.svg",
    estado3: "Pendiente",
    vacio3: "",
    check5: false,
    estado4: "Pendiente",
    emailIcon5: "../img/envelopeIcon.svg",
    estado5: "Pendiente",
    vacio4: "",
    firmaDiploma: "Pendiente",
    doc: "",
    check6: false,
    estado6: "Pendiente",
    emailIcon6: "../img/envelopeIcon.svg",
    fecha2: "Pendiente",
    emailIcon7: "../img/envelopeIcon.svg",
    fecha3: "11/02/2023 10:12",
    emailIcon8: "../img/envelopeIcon.svg",
    estado7: "Pendiente",
    emailIcon9: "../img/envelopeIcon.svg"
  },
  {
    alumno: "González María",
    porcentaje: "28,56%",
    vacio1: "-",
    vacio2: "-",
    certifica: "-",
    check1: false,
    estado1: "Pendiente",
    emailIcon1: "../img/envelopeIcon.svg",
    check2: false,
    fecha1: "Pendiente",
    emailIcon2: "../img/envelopeIcon.svg",
    check3: false,
    destinatario1: "Pendiente Marian Bean",
    emailIcon3: "../img/envelopeIcon.svg",
    check4: false,
    estado2: "Pendiente",
    emailIcon4: "../img/envelopeIcon.svg",
    estado3: "Pendiente",
    vacio3: "",
    check5: false,
    estado4: "Pendiente",
    emailIcon5: "../img/envelopeIcon.svg",
    estado5: "Pendiente",
    vacio4: "",
    firmaDiploma: "Pendiente",
    doc: "",
    check6: false,
    estado6: "Pendiente",
    emailIcon6: "../img/envelopeIcon.svg",
    fecha2: "Pendiente",
    emailIcon7: "../img/envelopeIcon.svg",
    fecha3: "Pendiente",
    emailIcon8: "../img/envelopeIcon.svg",
    estado7: "Pendiente",
    emailIcon9: "../img/envelopeIcon.svg"
  },
  {
    alumno: "Alumnos: 3",
    porcentaje: "",
    vacio1: "-",
    vacio2: "-",
    certifica: "0",
    check1: false,
    estado1: "Enviados: 1",
    emailIcon1: "",
    check2: false,
    fecha1: "Enviados: 1",
    emailIcon2: "",
    check3: false,
    destinatario1: "Enviados: 1",
    emailIcon3: "",
    check4: false,
    estado2: "Enviados: 1",
    emailIcon4: "",
    estado3: "Enviados: 1",
    vacio3: "",
    check5: false,
    estado4: "Enviados: 1",
    emailIcon5: "",
    estado5: "Enviados: 1",
    vacio4: "",
    firmaDiploma: "Enviados: 1",
    doc: "",
    check6: "",
    estado6: "Enviados: 1",
    emailIcon6: "",
    fecha2: "Enviados: 1",
    emailIcon7: "",
    fecha3: "Enviados: 1",
    emailIcon8: "",
    estado7: "Enviados: 1",
    emailIcon9: ""
  }
];

const formadorData = [
  {
      alumno: "Hernández Santiago",
      porcentaje: "38,5",
      evaluacion: "P",
      puntaje: "64",
      email: "sfernadez@email.es",
      emailConfirmado: false,
      estadoEmail: "No aplica",
      iconoEmail: "",
      revisado: false,
      pendiente: "Pendiente",
      iconoPendiente: "../img/envelopeIcon.svg",
      fecha: "09/08/2023",
      iconoFecha: "../img/envelopeIcon.svg",
      activo: false,
      estadoFinal: "Pendiente",
      iconoFinal: "",
      revisadoFinal: false,
      fechaFinal: "No aplica",
      iconoFechaFinal: ""
  },
  {
      alumno: "Martínez Isabel",
      porcentaje: "0",
      evaluacion: "P",
      puntaje: "64",
      email: "imartinez@email.es",
      emailConfirmado: false,
      estadoEmail: "No Aplica",
      iconoEmail: "",
      revisado: false,
      pendiente: "Error",
      iconoPendiente: "../img/envelopeIcon.svg",
      fecha: "09:23",
      iconoFecha: "",
      activo: false,
      estadoFinal: "Pendiente",
      iconoFinal: "../img/envelopeIcon.svg",
      revisadoFinal: false,
      fechaFinal: "No aplica",
      iconoFechaFinal: ""
  },
  {
      alumno: "García José",
      porcentaje: "0",
      evaluacion: "R",
      puntaje: "82",
      email: "jgarcia@email.es",
      emailConfirmado: false,
      estadoEmail: "09/08/2023 09:23",
      iconoEmail: "../img/envelopeIcon.svg",
      revisado: false,
      pendiente: "09/08/2023 09:23",
      iconoPendiente: "../img/envelopeIcon.svg",
      fecha: "Pendiente",
      iconoFecha: "",
      activo: false,
      estadoFinal: "Pendiente",
      iconoFinal: "../img/envelopeIcon.svg",
      revisadoFinal: false,
      fechaFinal: "No aplica",
      iconoFechaFinal: ""
  },
  {
      alumno: "Alumnos: 3",
      porcentaje: "",
      evaluacion: "",
      puntaje: "",
      email: "0",
      emailConfirmado: false,
      estadoEmail: "Enviados: 1",
      iconoEmail: "",
      revisado: false,
      pendiente: "Enviados: 1",
      iconoPendiente: "",
      fecha: "Enviados: 1",
      iconoFecha: "",
      activo: false,
      estadoFinal: "Enviados: 1",
      iconoFinal: "",
      revisadoFinal: false,
      fechaFinal: "Enviados: 1",
      iconoFechaFinal: ""
  }
];

const documentacionData = [
  {
      icono: "../img/pdfIcon.png",
      vacio1: "",
      documento: "Certificado de asistencia",
      anexo: "Anexo IV",
      vacio2: "-",
      detalleAnexo: "Anexo IV Modelo de ....",
      vacio3: "-",
      vacio4: "-"
  },
  {
      icono: "../img/pdfIcon.png",
      vacio1: "",
      documento: "Control de asistencia grupal bonificada",
      anexo: "Anexo IV",
      vacio2: "-",
      detalleAnexo: "Anexo IV Modelo de ....",
      vacio3: "-",
      vacio4: "-"
  },
  {
      icono: "../img/pdfIcon.png",
      vacio1: "",
      documento: "Control de asistencia individuales",
      anexo: "Anexo IV",
      vacio2: "-",
      detalleAnexo: "Anexo IV Modelo de ....",
      vacio3: "-",
      vacio4: "-"
  },
  {
      icono: "../img/pdfIcon.png",
      vacio1: "",
      documento: "Evaluación Individual Firmada​",
      anexo: "Anexo IV",
      vacio2: "-",
      detalleAnexo: "Anexo IV Modelo de ....",
      vacio3: "-",
      vacio4: "-"
  },
  {
      icono: "../img/pdfIcon.png",
      vacio1: "",
      documento: "Cuestionario Satisfacción",
      anexo: "Anexo IV",
      vacio2: "-",
      detalleAnexo: "Anexo IV Modelo de ....",
      vacio3: "-",
      vacio4: "-"
  },
  {
      icono: "../img/pdfIcon.png",
      vacio1: "",
      documento: "Declaración Responsable",
      anexo: "Anexo IV",
      vacio2: "-",
      detalleAnexo: "Anexo IV Modelo de ....",
      vacio3: "-",
      vacio4: "-"
  },
  {
      icono: "../img/pdfIcon.png",
      vacio1: "",
      documento: "Informe RLT",
      anexo: "Anexo IV",
      vacio2: "-",
      detalleAnexo: "Anexo IV Modelo de ....",
      vacio3: "-",
      vacio4: "-"
  },
  {
      icono: "../img/pdfIcon.png",
      vacio1: "",
      documento: "Recibí diploma bonificada",
      anexo: "Anexo IV",
      vacio2: "-",
      detalleAnexo: "Anexo IV Modelo de ....",
      vacio3: "-",
      vacio4: "-"
  }
];


function openModal(contentType) {
    const asistenciaTableTeleformacionHTML = `
        <table class="table table-striped tablaAsistencia">
            <thead>
                <tr>
                  <th rowspan="2">ALUMNO</th>
                  <th rowspan="2">% ASISTENCIA</th>
                  <th rowspan="2">TIPO DIPLOMA</th>
                  <th rowspan="2">CERTIFICA</th>
                  <th colspan="3" class="text-center">CONVOCATORIA</th>
                  <th colspan="3" class="text-center">MAIL CONVOCATORIA FORMADOR</th>
                  <th colspan="3" class="text-center">CONTROL</th>
                  <th colspan="3" class="text-center">FORO</th>
                  <th colspan="3" class="text-center">CONEXIONES</th>
                  <th colspan="3" class="text-center">TEMA 1</th>
                </tr>
                <tr>
                    <th><img src="../img/envelopeIcon.svg" id="modalTestTeleformacion" style="cursor: pointer;"></th>
                    <th>FECHA ENVÍO</th>
                    <th>VER EMAIL</th>
                    <th><img src="../img/envelopeIcon.svg" id="modalTestTeleformacion" style="cursor: pointer;"></th>
                    <th>FECHA ENVÍO</th>
                    <th>VER EMAIL</th>
                    <th>% CONTENIDOS</th>
                    <th>TIEMPO TOTAL</th>
                    <th>EVAL</th>
                    <th>Nº MENSAJES</th>
                    <th>TIEMPO TOTAL</th>
                    <th>ACCESO</th>
                    <th>PRIMERA</th>
                    <th>ÚLTIMA</th>
                    <th>N° TOTAL</th>
                    <th>PRIMERA</th>
                    <th>ÚLTIMA</th>
                    <th>RESULTADO</th>
                </tr>
            </thead>
            <tbody>
                ${createTableDataTeleformacion(alumnosDataTeleformacion)}
            </tbody>
        </table>
    `;

    const presencialTableHTML = `
    <table class="table table-striped tablaPresencial me-3">
        <thead>
            <tr>
                <th class="text-center" rowspan="2">ALUMNO</th>
                <th class="text-center" rowspan="2">% ASISTENCIA</th>
                <th class="text-center" rowspan="2">TIPO DIPLOMA</th>
                <th class="text-center" rowspan="2">CERTIFICA</th>
                <th class="text-center" colspan="6">10/02/2023  09:00 - 11:00</th>
                <th class="text-center" colspan="6">11/02/2023  09:00 - 11:00</th>
            </tr>
            <tr>
                <th class="text-center">PRESENCIAL</th>
                <th class="text-center">ENVIO ENTRADA</th>
                <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg" id="modalTestTeleformacion"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
                <th class="text-center">FIRMA ENTRADA</th>
                <th class="text-center">DOC</th>
                <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><p class="mb-1">HORAS</p><img src="../img/guardarIcon.svg"></div></th>
                <th class="text-center">PRESENCIAL</th>
                <th class="text-center">ENVIO ENTRADA</th>
                <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg" id="modalTestTeleformacion"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
                <th class="text-center">FIRMA ENTRADA</th>
                <th class="text-center">DOC</th>
                <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><p class="mb-1">HORAS</p><img src="../img/guardarIcon.svg"></div></th>
            </tr>
        </thead>
        <tbody>
            ${createTableDataPresencial(alumnosDataPresencial)}
        </tbody>
    </table>
`;

const controlTableHTML = `
<table class="table table-striped tablaControl">
    <thead>
        <tr>
          <th class="text-center" rowspan="2">ALUMNO</th>
          <th class="text-center" rowspan="2">% ASISTENCIA</th>
          <th class="text-center" rowspan="2">TIPO DIPLOMA</th>
          <th class="text-center" rowspan="2">CERTIFICA</th>
          <th class="text-center" colspan="3" class="text-center">EMAIL LIBRE</th>
          <th class="text-center" colspan="3" class="text-center">CONVOCATORIA</th>
          <th class="text-center" colspan="3" class="text-center">CUESTIONARIO MANAGER</th>
          <th class="text-center" colspan="5" class="text-center">RECIBI MATERIAL</th>
          <th class="text-center" colspan="5" class="text-center">DECLARACION RESPONSABLE</th>
          <th class="text-center" colspan="5" class="text-center">DIPLOMA RECIBI</th>
          <th class="text-center" colspan="4" class="text-center">CUESTIONARIO</th>
          <th class="text-center" colspan="3" class="text-center">FIN CURSO ALUMNO</th>
        </tr>
        <tr>
            <th class="text-center" class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center">FIRMA</th>
            <th class="text-center">DOC</th>
            <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center">FIRMA</th>
            <th class="text-center">DOC</th>
            <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center">FIRMA</th>
            <th class="text-center">DOC</th>
            <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center">FECHA REALIZADO</th>
            <th class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
        </tr>
    </thead>
    <tbody>
        ${createTableDataControl(controlData)}
    </tbody>
</table>
`;

const documentacionTableHTML = `
<div class="adjuntar mb-3 d-flex align-items-center justify-content-start"><p class="me-2 mb-0">Añadir documento</p><img src="../img/plusIcon.svg"></div>
<table class="table table-striped tablaDocumentacion">
    <thead>
        <tr>
          <th class="text-center">IMP</th>
          <th class="text-center">IMP</th>
          <th class="text-center">TIPO</th>
          <th class="text-center">Nombre</th>
          <th class="text-center">Carpeta</th>
          <th class="text-center">Descripción</th>
          <th class="text-center">PESO</th>
          <th class="text-center">TIPO DE ARCHIVO</th>
          <th class="text-center">F. ALTA</th>
        </tr>
    </thead>
    <tbody>
        ${createTableDataDocumentacion(documentacionData)}
    </tbody>
</table>
`;
const formadorTableHTML = `
<table class="table table-striped tablaFormador">
    <thead>
        <tr>
          <th class="text-center" rowspan="2">FORMADORES/RESPONSABLES</th>
          <th class="text-center" rowspan="2">HORAS</th>
          <th class="text-center" rowspan="2">TIPO FORMACIÓN</th>
          <th class="text-center" rowspan="2">Nº PARTICIPANTES CONCURRENTES</th>
          <th class="text-center" rowspan="2">EMAIL</th>
          <th class="text-center" colspan="3" class="text-center">MAIL INCIDENCIAS</th>
          <th class="text-center" colspan="3" class="text-center">ACCESO AULA VIRTUAL DIARIO</th>
          <th class="text-center" colspan="3" class="text-center">CONVOCATORIA FORMADORES</th>
          <th class="text-center" colspan="3" class="text-center">MAIL CIERRE CURSO FORMADOR</th>
          <th class="text-center" colspan="3" class="text-center">MAIL CIERRE RESPONSABLE</th>
        </tr>
        <tr>
            <th class="text-center" class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center" class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center" class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center" class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
            <th class="text-center" class="text-center"><div class="d-flex align-items-center justify-content-center flex-column"><img src="../img/envelopeIcon.svg"><div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div></div></th>
            <th class="text-center">FECHA ENVÍO</th>
            <th class="text-center">VER EMAIL</th>
        </tr>
    </thead>
    <tbody>
        ${createTableDataFormador(formadorData)}
    </tbody>
</table>
`;

    let modalContentHTML = '';

    if (contentType === 'Resumen asistencia') {
        modalContentHTML = `
            <div class="modalContainer">
              <div class="subtitlePane d-flex align-items-center justify-content-between">
                  <p class="subtitle">Grupo: (6499) 11 - 1- PRL avanzado en la Oficina</p>
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Presencial</button>
                      </li>
                      <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Teleformacion</button>
                      </li>
                  </ul>
              </div>
              <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">${asistenciaTableTeleformacionHTML}</div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">${presencialTableHTML}</div>
              </div>
            </div>`;
    } else {
        modalContentHTML = `
            <div class="modalContainer">
            <div class="subtitlePane d-flex align-items-center justify-content-start">
              <p class="subtitle">Grupo: (6499) 11 - 1- PRL avanzado en la Oficina</p>
            </div>
                <p class="modal-info-content">${contentType === 'Resumen control' ? controlTableHTML : contentType === 'Control Formadores y Responsables' ? `${formadorTableHTML}` : `${documentacionTableHTML}.`}</p>
            </div>`;
    }

    const modal = document.createElement('div');
    modal.className = 'modal fade show';
    modal.id = "modalAsistencia";
    modal.tabIndex = -1;
    modal.style.display = 'block'; 
    modal.innerHTML = `
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${contentType}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">${modalContentHTML}</div>
        </div>
    </div>
    `;
    document.body.appendChild(modal);

    console.log(document.getElementById("modalTestTeleformacion"));
    console.log(document.getElementById('mensajeIcon'))

    const envelopeModal = document.getElementById("modalTestTeleformacion");
    const mensajeIcon = document.getElementById("mensajeIcon")

    if (envelopeModal) {
      envelopeModal.addEventListener('click', setupModalWithImage);
    }

    if (mensajeIcon) {
      mensajeIcon.addEventListener('click', openMessageModal)
    }

    modal.querySelector('.btn-close').addEventListener('click', function() {
        modal.remove();
    });

    var bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

function createTableDataTeleformacion(data) {
    return data.map((item, index) => `
          <tr>
            <td>${item.alumno}</td>
            <td style="color: ${index < 4 ? '#DF1517' : 'inherit'};">${item.asistencia}</td>
            <td>${item.diploma === 'Aprovechas' ? `<div class=" d-flex align-items-center justify-content-center "><img src="../img/green-circle-fill.svg" class="me-2" style="width: 9px;">Aprovechas</div>` : (item.diploma)}</td>
            <td>${item.certifica}</td>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${data.indexOf(item) + 1}" ${item.check1 ? 'checked' : ''}>
                </div>
            </td>
            <td>${item.fechaEnvio1}</td>
            <td>${item.verEmail1 ? `<img src="${item.verEmail1}" id="modalTestTeleformacion" style="cursor: pointer;">` : ''}</td>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${data.indexOf(item) + 6}" ${item.check2 ? 'checked' : ''}>
                </div>
            </td>
            <td>${item.fechaEnvio2}</td>
            <td>${item.verEmail2 ? `<img src="${item.verEmail2}">` : ''}</td>
            <td>${item.contenidos}</td>
            <td>${item.tiempoTotal1}</td>
            <td>${item.eval}</td>
            <td>${item.mensajes}</td>
            <td>${item.tiempoTotal2}</td>
            <td>${item.acceso}</td>
            <td>${item.primera}</td>
            <td>${item.ultima}</td>
            <td>${item.total}</td>
            <td>${item.primera}</td>
            <td>${item.ultima}</td>
            <td>${item.resultado}</td>
        </tr>
    `).join('');
  }

function createTableDataPresencial(data) {
return data.map((item, index) => `
    <tr>
        <td class="text-center">${item.alumno}</td>
        <td class="text-center" style="color: ${index < 3 ? '#DF1517' : 'inherit'};">${item.asistencia}</td>
        <td class="text-center">${item.participacion}</td>
        <td class="text-center">${item.eval1}</td>
        <td class="text-center" style="color: ${index < 3 ? '#DF1517' : 'inherit'};">${item.asistenciaFirmada}</td>
        <td class="text-center" style="color: ${index < 3 ? '#0074FF' : 'inherit'};">${item.fechaUltimaSesion}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${data.indexOf(item) + 1}" ${item.asistenciaConfirmada ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.columna8}</td>
        <td class="text-center">${item.columna9}</td>
        <td class="text-center">
            <div class="sessionContainer d-flex align-items-center justify-content-between">
            ${item.totalSesiones ? `<div class="totalSesionesContainer">${item.totalSesiones}</div>` : ''}
            ${item.totalSesiones === '2' ? '<img src="../img/mensaje.svg" class="ms-2" id="mensajeIcon">' : ''}
            </div>
        </td>
        <td class="text-center">${item.asistenciaValidada}</td>
        <td class="text-center" style="color: ${index < 3 ? '#0074FF' : 'inherit'};">${item.fechaValidacion}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${data.indexOf(item) + 1}" ${item.validacionConfirmada ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.columna14}</td>
        <td class="text-center">${item.columna15}</td>
        <td class="text-center">
            <div class="asistenciasContainer d-flex align-items-center justify-content-between">
            ${item.totalAsistencias ? `<div class="totalAsistenciasContainer">${item.totalAsistencias}</div>` : ''}
            ${item.totalAsistencias === '2' ? '<img src="../img/mensaje.svg" class="ms-2" id="mensajeIcon">' : ''}
            </div>
        </td>
    </tr>
`).join('');
}
  
  
function createTableDataTeleformacion(data) {
return data.map((item, index) => `
        <tr>
        <td>${item.alumno}</td>
        <td style="color: ${index < 4 ? '#DF1517' : 'inherit'};">${item.asistencia}</td>
        <td>${item.diploma === 'Aprovechas' ? `<div class=" d-flex align-items-center justify-content-center "><img src="../img/green-circle-fill.svg" class="me-2" style="width: 9px;">Aprovechas</div>` : (item.diploma)}</td>
        <td>${item.certifica}</td>
        <td>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${data.indexOf(item) + 1}" ${item.check1 ? 'checked' : ''}>
            </div>
        </td>
        <td>${item.fechaEnvio1}</td>
        <td>${item.verEmail1 ? `<img src="${item.verEmail1}" id="modalTestTeleformacion" style="cursor: pointer;">` : ''}</td>
        <td>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${data.indexOf(item) + 6}" ${item.check2 ? 'checked' : ''}>
            </div>
        </td>
        <td>${item.fechaEnvio2}</td>
        <td>${item.verEmail2 ? `<img src="${item.verEmail2}">` : ''}</td>
        <td>${item.contenidos}</td>
        <td>${item.tiempoTotal1}</td>
        <td>${item.eval}</td>
        <td>${item.mensajes}</td>
        <td>${item.tiempoTotal2}</td>
        <td>${item.acceso}</td>
        <td>${item.primera}</td>
        <td>${item.ultima}</td>
        <td>${item.total}</td>
        <td>${item.primera}</td>
        <td>${item.ultima}</td>
        <td>${item.resultado}</td>
    </tr>
`).join('');
}
  
  
function createTableDataControl(data) {
return data.map((item, index) => `
    <tr>
        <td class="text-center">${item.alumno}</td>
        <td class="text-center" style="color: ${index < 3 ? '#DF1517' : 'inherit'};">${item.porcentaje}</td>
        <td class="text-center">${item.vacio1}</td>
        <td class="text-center">${item.certifica}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 1}" ${item.check1 ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.estado1}</td>
        <td class="text-center">${item.emailIcon1 ? `<img src="${item.emailIcon1}">` : ''}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 6}" ${item.check2 ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.fecha1}</td>
        <td class="text-center">${item.emailIcon2 ? `<img src="${item.emailIcon2}">` : ''}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 11}" ${item.check3 ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.destinatario1}</td>
        <td class="text-center">${item.emailIcon3 ? `<img src="${item.emailIcon3}">` : ''}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 16}" ${item.check4 ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.estado2}</td>
        <td class="text-center">${item.emailIcon4 ? `<img src="${item.emailIcon4}">` : ''}</td>
        <td class="text-center">${item.estado3}</td>
        <td class="text-center">${item.vacio3}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 21}" ${item.check5 ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.estado4}</td>
        <td class="text-center">${item.emailIcon5 ? `<img src="${item.emailIcon5}">` : ''}</td>
        <td class="text-center">${item.estado5}</td>
        <td class="text-center">${item.vacio4}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 26}" ${item.check6 ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.estado6}</td>
        <td class="text-center">${item.emailIcon4 ? `<img src="${item.emailIcon4}">` : ''}</td>
        <td class="text-center">${item.firmaDiploma}</td>
        <td class="text-center">${item.doc}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 31}" ${item.check6 ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.fecha2}</td>
        <td class="text-center">${item.emailIcon7 ? `<img src="${item.emailIcon7}">` : ''}</td>
        <td class="text-center">${item.fecha3}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 36}" ${item.check6 ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.estado7}</td>
        <td class="text-center">${item.emailIcon9 ? `<img src="${item.emailIcon9}">` : ''}</td>
    </tr>
`).join('');
}

function createTableDataFormador(data) {
return data.map((item, index) => `
    <tr>
        <td class="text-center">${item.alumno}</td>
        <td class="text-center" style="color: ${item.porcentaje ? '#DF1517' : 'inherit'};">${item.porcentaje}</td>
        <td class="text-center">${item.evaluacion}</td>
        <td class="text-center">${item.puntaje}</td>
        <td class="text-center">${item.email}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 1}" ${item.emailConfirmado ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.estadoEmail}</td>
        <td class="text-center">${item.iconoEmail ? `<img src="${item.iconoEmail}">` : ''}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 1}" ${item.revisado ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.pendiente}</td>
        <td class="text-center">${item.iconoPendiente ? `<img src="${item.iconoPendiente}">` : ''}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 2}" ${item.activo ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.fecha}</td>
        <td class="text-center">${item.iconoFecha ? `<img src="${item.iconoFecha}">` : ''}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 2}" ${item.activo ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.estadoFinal}</td>
        <td class="text-center">${item.iconoFinal ? `<img src="${item.iconoFinal}">` : ''}</td>
        <td class="text-center">
            <div class="form-check ms-2">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index + 2}" ${item.activo ? 'checked' : ''}>
            </div>
        </td>
        <td class="text-center">${item.fechaFinal}</td>
        <td class="text-center">${item.iconoFechaFinal ? `<img src="${item.iconoFechaFinal}">` : ''}</td>
    </tr>
`).join('');
}

function createTableDataDocumentacion(data) {
return data.map((item, index) => `
    <tr>
        <td class="text-center">${item.icono ? `<img src="${item.icono}">` : ''}</td>
        <td class="text-center">${item.vacio1}</td>
        <td class="text-center">${item.documento}</td>
        <td class="text-center">${item.anexo}</td>
        <td class="text-center">${item.vacio2}</td>
        <td class="text-center">${item.detalleAnexo}</td>
        <td class="text-center">${item.vacio3}</td>
        <td class="text-center">${item.vacio4}</td>
        <td class="text-center">${item.vacio4}</td>
    </tr>
`).join('');
}

// Redireccion a administrador clickeando checkboxCelda

function redirectToAdministradorEditarGrupo() {
    window.location.href = window.location.hostname.includes('github.io') ?
        '/panel_gestor/assets/pages/administrador.html?openOffcanvas=true' :
        '/assets/pages/administrador.html?openOffcanvas=true';
}

//Cambio de color estadoColor

function applyEstadoColorClasses() {
    const paragraphs = document.querySelectorAll('.estadoColor p');

    paragraphs.forEach(p => {
        const text = p.textContent.trim();

        switch(text) {
            case 'Anulado':
                p.classList.add('anulado');
                break;
            case 'Modificado':
                p.classList.add('modificado');
                break;
            case 'Finalizado':
                p.classList.add('finalizado');
                break;
            case 'Válido':
                p.classList.add('valido');
                break;
            case 'Pdte':
                p.classList.add('pdte');
                break;
            case 'Incidentado':
                p.classList.add('incidentado');
                break;
        }
    });
}


//Select estadoColor

function initializePopoversAndCustomSelect() {
    const customSelect = document.querySelector('.custom-select');
    const selectItems = customSelect.querySelector(".select-items");

    function toggleCustomSelect(nextToElement) {
        const rect = nextToElement.getBoundingClientRect();
        customSelect.style.left = `${rect.left}px`;
        customSelect.style.top = `${rect.bottom + window.scrollY}px`;
        customSelect.style.display = customSelect.style.display === 'block' ? 'none' : 'block';
        customSelect.classList.toggle('open');
    }

    document.querySelectorAll('.estadoColor p').forEach(paragraph => {
        paragraph.addEventListener('click', function(event) {
            event.stopPropagation(); 
            toggleCustomSelect(this);
        });
    });

    selectItems.querySelectorAll('.select-option').forEach(option => {
        option.addEventListener('click', function(event) {
            event.stopPropagation(); 
        });
    });

    document.addEventListener("click", function() {
        if (customSelect.style.display === 'block') {
            customSelect.style.display = 'none';
            customSelect.classList.remove('open');
        }
    });

    let userSpan = document.querySelector('.notasProfesorPG');
    let teacherSpan = document.querySelector('.notasProfesorDP');
    let userIcon = document.querySelector('.user-icon');
    let mapIcon = document.querySelector('.map-icon');
    let isManualPopoverOpen = false;

    if (userSpan && teacherSpan && userIcon && mapIcon) {
        let userPopover = new bootstrap.Popover(userSpan, {
            placement: "bottom",
            html: true,
            trigger: 'manual',
            content: '<strong>Profesorado: Fernando Velasco</strong><p>fvelasco@innopulse.es</p><div class="popover-icon d-flex align-items-center justify-content-start"><img src="../img/popover-icon.svg" class="me-2" alt=""><a href="#">Panel del profesor</a></div>'
        });

        let teacherPopover = new bootstrap.Popover(teacherSpan, {
            placement: "bottom",
            html: true,
            trigger: 'manual',
            content: '<strong>Profesorado: Diego Pérez</strong><p>dperez@innopulse.es</p><div class="popover-icon d-flex align-items-center justify-content-start"><img src="../img/popover-icon.svg" class="me-2" alt=""><a href="#">Panel del profesor</a></div>'
        });

        let userPopoverIcon = new bootstrap.Popover(userIcon, {
            title: "Responsable del Grupo",
            placement: "bottom",
            html: true,
            trigger: 'hover',
            content: '<ul><li>Diego Pérez</li><li>Tel. 666090477</li><li>@: dperez@innopulse.es</li></ul>',
        });

        let mapPopoverIcon = new bootstrap.Popover(mapIcon, {
            title: '<p class="text-center m-0">Dirección</p>',
            placement: "bottom",
            html: true,
            trigger: 'hover',
            content: '<div class="mapPopoverContent"><p class="mb-0">Calle del Aguacate 41, </p><p class="mb-0">Edificio B4, Local 6, 28054</p><p class="mb-0">Madrid, </p><a href="#">Aula Innovación</a></div>',
        });

        function toggleManualPopover(popover) {
            popover.toggle();
            isManualPopoverOpen = popover._element.classList.contains('show');
            if (isManualPopoverOpen) {
                hideHoverPopovers();
            }
        }

        function hideHoverPopovers() {
            userPopoverIcon.hide();
            mapPopoverIcon.hide();
        }

        userSpan.addEventListener('click', function () {
            toggleManualPopover(userPopover);
            teacherPopover.hide();
        });

        teacherSpan.addEventListener('click', function () {
            toggleManualPopover(teacherPopover);
            userPopover.hide();
        });

        document.addEventListener('click', function (event) {
            if (!userIcon.contains(event.target) && !mapIcon.contains(event.target)) {
                isManualPopoverOpen = false;
            }
        });
    }
}


// Modal del boton Ahora

function setupModalTrigger() {
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('blink') && event.target.textContent.trim() === 'Ahora' && !event.target.dataset.modalInit) {
            event.target.dataset.modalInit = true;

            const ahoraModalHtml = `
            <div class="modal fade" id="ahoraModal" tabindex="-1" aria-labelledby="ahoraModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="titulo d-flex align-items-start justify-content-center flex-column">
                              <h5 class="modal-title" id="ahoraModalLabel">Panel Diario Formador</h5>
                              <p class="subtitulo">Grupo: (6499) 11 - 1- Acción de contratación</p>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="submenu d-flex align-items-center justify-content-between">
                            <div class="leftSubmenu d-flex align-items-center justify-content-start">
                              <div class="nameIcon d-flex align-items-center justify-content-start w-100">
                                <div class="profesorIcon me-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M1.57063 14.4107H0.973191C0.748346 14.4106 0.532736 14.3212 0.373706 14.1623C0.214676 14.0033 0.125227 13.7878 0.125 13.5629V8.50842C0.125084 8.25607 0.213168 8.01164 0.374078 7.81724C0.534989 7.62284 0.758653 7.49064 1.00655 7.44341L2.75026 7.11283C2.81466 7.102 2.88073 7.11685 2.93432 7.15418C2.9879 7.19151 3.02472 7.24834 3.03688 7.3125C3.04904 7.37666 3.03557 7.44304 2.99937 7.49738C2.96316 7.55173 2.9071 7.58972 2.8432 7.60321L1.09949 7.93436C0.965792 7.95972 0.84513 8.03094 0.758315 8.13574C0.671501 8.24053 0.623976 8.37234 0.623936 8.50842V13.5629C0.624012 13.6554 0.660748 13.744 0.726088 13.8094C0.791428 13.8748 0.880036 13.9116 0.972479 13.9118H1.5712C1.63737 13.9118 1.70082 13.938 1.7476 13.9848C1.79439 14.0316 1.82067 14.0951 1.82067 14.1612C1.82067 14.2274 1.79439 14.2908 1.7476 14.3376C1.70082 14.3844 1.63737 14.4107 1.5712 14.4107H1.57063Z" fill="white"/>
                                    <path d="M4.87956 16.8757C4.8468 16.8758 4.81435 16.8693 4.78407 16.8568C4.7538 16.8443 4.72629 16.8259 4.70312 16.8027C4.67995 16.7795 4.66158 16.752 4.64905 16.7218C4.63652 16.6915 4.63008 16.659 4.6301 16.6263V8.37942C4.63012 8.31985 4.65146 8.26225 4.69026 8.21704C4.72906 8.17183 4.78276 8.14201 4.84164 8.13295L7.1999 7.77144C7.30787 7.75468 7.41045 7.71302 7.49952 7.64975C7.5886 7.58649 7.66172 7.50335 7.71309 7.40693L9.07063 4.84168C9.09306 4.80124 9.10719 4.75673 9.11222 4.71076C9.11724 4.66478 9.11304 4.61827 9.09987 4.57394C9.0867 4.52961 9.06482 4.48835 9.03552 4.45258C9.00621 4.4168 8.97007 4.38723 8.9292 4.36559C8.88833 4.34395 8.84355 4.33068 8.79749 4.32655C8.75143 4.32242 8.70501 4.32752 8.66094 4.34155C8.61687 4.35558 8.57604 4.37825 8.54084 4.40824C8.50565 4.43824 8.47678 4.47495 8.45594 4.51623L7.15528 6.97271C7.13709 7.00709 7.1111 7.03673 7.07939 7.05926C7.04767 7.08179 7.01113 7.09657 6.97267 7.10243L3.69081 7.60565C3.65818 7.61121 3.62476 7.61022 3.59251 7.60274C3.56025 7.59526 3.52981 7.58143 3.50296 7.56207C3.47611 7.5427 3.45338 7.51818 3.4361 7.48994C3.41881 7.4617 3.40733 7.4303 3.4023 7.39758C3.39728 7.36486 3.39882 7.33146 3.40683 7.29933C3.41485 7.26721 3.42918 7.237 3.44899 7.21047C3.46879 7.18395 3.49369 7.16162 3.52221 7.14481C3.55073 7.128 3.58231 7.11704 3.61512 7.11255L6.7731 6.62787L8.01573 4.28259C8.12084 4.0841 8.30049 3.93549 8.51516 3.86946C8.72983 3.80343 8.96195 3.82538 9.16044 3.93048C9.35892 4.03559 9.50753 4.21524 9.57357 4.42991C9.6396 4.64458 9.61765 4.87669 9.51254 5.07518L8.15387 7.64114C8.06597 7.80614 7.94088 7.94841 7.78849 8.05671C7.63611 8.165 7.46061 8.23635 7.27588 8.2651L5.12889 8.59354V16.6263C5.12889 16.6924 5.10263 16.7558 5.05587 16.8026C5.00912 16.8494 4.9457 16.8757 4.87956 16.8757Z" fill="white"/>
                                    <path d="M1.57076 16.8738C1.50459 16.8738 1.44114 16.8475 1.39436 16.8008C1.34757 16.754 1.32129 16.6905 1.32129 16.6244V9.53462C1.32129 9.50186 1.32774 9.46942 1.34028 9.43916C1.35282 9.40889 1.37119 9.38139 1.39436 9.35822C1.41752 9.33506 1.44502 9.31668 1.47529 9.30415C1.50556 9.29161 1.538 9.28516 1.57076 9.28516C1.60352 9.28516 1.63596 9.29161 1.66622 9.30415C1.69649 9.31668 1.72399 9.33506 1.74716 9.35822C1.77032 9.38139 1.7887 9.40889 1.80124 9.43916C1.81377 9.46942 1.82023 9.50186 1.82023 9.53462V16.6244C1.82023 16.6905 1.79394 16.754 1.74716 16.8008C1.70037 16.8475 1.63692 16.8738 1.57076 16.8738Z" fill="white"/>
                                    <path d="M3.22505 16.8746C3.19229 16.8746 3.15984 16.8681 3.12956 16.8556C3.09929 16.8431 3.07178 16.8247 3.04861 16.8015C3.02544 16.7784 3.00707 16.7509 2.99454 16.7206C2.98201 16.6903 2.97557 16.6579 2.97559 16.6251V13.4604C2.97559 13.3942 3.00187 13.3308 3.04865 13.284C3.09544 13.2372 3.15889 13.2109 3.22505 13.2109C3.29122 13.2109 3.35467 13.2372 3.40145 13.284C3.44824 13.3308 3.47452 13.3942 3.47452 13.4604V16.6251C3.47452 16.6912 3.44824 16.7547 3.40145 16.8015C3.35467 16.8483 3.29122 16.8746 3.22505 16.8746Z" fill="white"/>
                                    <path d="M3.22565 7.66443C2.84662 7.6646 2.47606 7.55236 2.16083 7.34191C1.8456 7.13146 1.59987 6.83225 1.4547 6.48212C1.30954 6.132 1.27147 5.74669 1.34531 5.37492C1.41915 5.00316 1.60158 4.66165 1.86953 4.39358C2.13749 4.12551 2.47892 3.94292 2.85065 3.86891C3.22238 3.79491 3.6077 3.8328 3.95789 3.97781C4.30808 4.12282 4.6074 4.36842 4.818 4.68356C5.02859 4.9987 5.14099 5.36921 5.14099 5.74823C5.14043 6.25612 4.93848 6.74305 4.57943 7.10226C4.22038 7.46147 3.73354 7.66364 3.22565 7.66443ZM3.22565 4.33111C2.94533 4.33108 2.6713 4.41418 2.43821 4.5699C2.20512 4.72562 2.02344 4.94697 1.91615 5.20595C1.80887 5.46492 1.78079 5.7499 1.83547 6.02483C1.89015 6.29977 2.02513 6.55231 2.22335 6.75053C2.42157 6.94875 2.67411 7.08373 2.94905 7.13841C3.22398 7.19309 3.50896 7.16501 3.76794 7.05773C4.02691 6.95044 4.24826 6.76876 4.40398 6.53568C4.5597 6.30259 4.6428 6.02855 4.64277 5.74823C4.64232 5.37253 4.49287 5.01234 4.22721 4.74668C3.96154 4.48101 3.60135 4.33156 3.22565 4.33111Z" fill="white"/>
                                    <path d="M3.22577 4.33006C3.19294 4.33017 3.16042 4.3238 3.13006 4.31131C3.0997 4.29883 3.07211 4.28047 3.04886 4.25729C3.02562 4.23411 3.00718 4.20657 2.99461 4.17625C2.98203 4.14592 2.97557 4.11342 2.97559 4.08059V1.48384C2.97559 1.41768 3.00187 1.35423 3.04865 1.30744C3.09544 1.26066 3.15889 1.23438 3.22505 1.23438C3.29122 1.23438 3.35467 1.26066 3.40145 1.30744C3.44824 1.35423 3.47452 1.41768 3.47452 1.48384V4.08059C3.47452 4.14663 3.44834 4.20998 3.40171 4.25674C3.35508 4.3035 3.29181 4.32987 3.22577 4.33006Z" fill="white"/>
                                    <path d="M16.039 10.0821H4.87935C4.81319 10.0821 4.74974 10.0558 4.70295 10.009C4.65617 9.96223 4.62988 9.89878 4.62988 9.83261C4.62988 9.76645 4.65617 9.703 4.70295 9.65621C4.74974 9.60943 4.81319 9.58314 4.87935 9.58314H15.7897V1.48384C15.7897 1.41768 15.8159 1.35423 15.8627 1.30744C15.9095 1.26066 15.973 1.23438 16.0391 1.23438C16.1053 1.23438 16.1687 1.26066 16.2155 1.30744C16.2623 1.35423 16.2886 1.41768 16.2886 1.48384V9.83276C16.2886 9.86552 16.2821 9.89795 16.2696 9.92821C16.257 9.95847 16.2386 9.98596 16.2154 10.0091C16.1922 10.0323 16.1647 10.0506 16.1345 10.0631C16.1042 10.0757 16.0717 10.0821 16.039 10.0821Z" fill="white"/>
                                    <path d="M16.6256 1.73357H2.63814C2.57198 1.73357 2.50852 1.70729 2.46174 1.6605C2.41496 1.61372 2.38867 1.55027 2.38867 1.4841V0.873404C2.3889 0.674985 2.46782 0.484757 2.60812 0.344453C2.74843 0.204149 2.93866 0.125226 3.13708 0.125H16.1267C16.3251 0.125226 16.5153 0.204149 16.6556 0.344453C16.7959 0.484757 16.8748 0.674985 16.8751 0.873404V1.4841C16.8751 1.55027 16.8488 1.61372 16.802 1.6605C16.7552 1.70729 16.6918 1.73357 16.6256 1.73357ZM2.88761 1.23463H16.3761V0.873404C16.3761 0.807264 16.3498 0.743855 16.303 0.697087C16.2562 0.650319 16.1928 0.624012 16.1267 0.623936H3.13708C3.07095 0.624049 3.00756 0.650369 2.9608 0.697129C2.91404 0.743888 2.88772 0.807276 2.88761 0.873404V1.23463Z" fill="white"/>
                                    <path d="M9.63228 11.8816C9.59951 11.8816 9.56707 11.8751 9.53679 11.8626C9.50652 11.8501 9.47901 11.8317 9.45584 11.8085C9.43267 11.7854 9.41429 11.7579 9.40176 11.7276C9.38923 11.6973 9.38279 11.6649 9.38281 11.6321V9.8315C9.38281 9.76534 9.40909 9.70188 9.45588 9.6551C9.50266 9.60831 9.56612 9.58203 9.63228 9.58203C9.69844 9.58203 9.7619 9.60831 9.80868 9.6551C9.85547 9.70188 9.88175 9.76534 9.88175 9.8315V11.6321C9.88175 11.6983 9.85547 11.7617 9.80868 11.8085C9.7619 11.8553 9.69844 11.8816 9.63228 11.8816Z" fill="white"/>
                                    <path d="M9.63148 13.179C9.45386 13.179 9.28022 13.1263 9.13253 13.0276C8.98485 12.9289 8.86974 12.7887 8.80176 12.6246C8.73379 12.4605 8.716 12.2799 8.75066 12.1057C8.78531 11.9315 8.87084 11.7715 8.99644 11.6459C9.12204 11.5203 9.28206 11.4347 9.45628 11.4001C9.63049 11.3654 9.81106 11.3832 9.97517 11.4512C10.1393 11.5191 10.2795 11.6343 10.3782 11.7819C10.4769 11.9296 10.5296 12.1033 10.5296 12.2809C10.5292 12.519 10.4345 12.7472 10.2662 12.9156C10.0978 13.0839 9.86957 13.1786 9.63148 13.179ZM9.63148 11.8817C9.55254 11.8817 9.47537 11.9052 9.40973 11.949C9.34409 11.9929 9.29293 12.0552 9.26272 12.1281C9.23251 12.2011 9.2246 12.2813 9.24 12.3588C9.25541 12.4362 9.29342 12.5073 9.34924 12.5631C9.40506 12.619 9.47619 12.657 9.55361 12.6724C9.63104 12.6878 9.7113 12.6799 9.78423 12.6497C9.85717 12.6195 9.9195 12.5683 9.96336 12.5027C10.0072 12.437 10.0306 12.3598 10.0306 12.2809C10.0306 12.175 9.98855 12.0734 9.91372 11.9985C9.83889 11.9236 9.73739 11.8814 9.63148 11.8812V11.8817Z" fill="white"/>
                                  </svg>
                                </div>
                                <p>DIEGO PÉREZ</p>                                
                              </div>
                              <select class="form-select ms-5">
                                <option selected>10/01/23 10:00 - 12:00</option>
                              </select>
                            </div>
                            <div class="rightSubmenu d-flex align-items-center justify-content-between">
                              <button class="btn btn1 me-2 firmarSesion">Firmar sesión</button>
                              <button class="btn btn2">Observaciones</button>
                            </div>
                          </div>
                          <div class="accionesGrupales d-flex align-items-center justify-content-start">
                            <select class="form-select mt-4">
                              <option selected>Acciones grupales</option>
                              <option>Asiste = SI</option>
                              <option>Enviar mail de Recibí Material</option>
                              <option>Enviar mail de Recibí Diploma</option>
                              <option>Enviar mail de  Diploma</option>
                              <option>Enviar mail de Firma de Decl 
                              <option>Firma Evaluación Individual</option>
                              <option>Firma Evaluación Individual</option>
                              <option>Enviar mail Finalización profesor</option>
                              <option>Enviar mail Finalización 
                              <option>Nuevo Alumno</option>
                              <option>Documentación</option>
                              <option>Informe Control</option>
                              <option>Informe Control Formador</option>
                              <option>Informe Asistencia</option>
                            </select>
                          </div>
                          <div id="tablaModalAhora" class="mt-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

            const existingModal = document.getElementById('ahoraModal');
            if (existingModal) {
                existingModal.remove();
            }

            document.body.insertAdjacentHTML('beforeend', ahoraModalHtml);
            const modalInstance = new bootstrap.Modal(document.getElementById('ahoraModal'), {});
            modalInstance.show();

            setTimeout(() => {
                createDynamicTable();  // Asegúrate de que esta función esté definida en algún lugar de tu código
            }, 100);
        }
    });
}


function createDynamicTable() {
  const tableData = [
    { entrada: '<div class="entradaNombre">Diego Pérez</div><div class="entradaHora">09:01:23</div>', salida: 'Ok 10:05:23', estado: 'Pendiente', alertas: '' },
    { entrada: '<div class="entradaNombre">Mathias Rodríguez</div><div class="entradaHora">09:01:23</div>', salida: 'Ok 10:05:23', estado: '12:01:15 – 1,15 horas', alertas: '' },
    { entrada: '<div class="entradaNombre">María González</div><div class="entradaHora">09:01:23</div>', salida: 'Ok 10:05:23', estado: 'Pendiente', alertas: '' },
    { entrada: '<div class="entradaNombre">Pablo Muñoz</div><div class="entradaHora">09:01:23</div>', salida: 'Ok 10:05:23', estado: '12:01:15 – 1,15 horas', alertas: `<div class="tdIcons d-flex align-items-center justify-content-start"><img src="../img/warning-yellow.svg" class="me-3"><img src="../img/mensaje.svg"></div>` },
    { entrada: '<div class="entradaNombre">Diego Pérez</div><div class="entradaHora">09:01:23</div>', salida: 'Ok 10:05:23', estado: 'Pendiente', alertas: '' },
    { entrada: '<div class="entradaNombre">Mathias Rodríguez</div><div class="entradaHora">09:01:23</div>', salida: 'Ok 10:05:23', estado: 'Pendiente', alertas: '' },
    { entrada: '<div class="entradaNombre">María González</div><div class="entradaHora">09:01:23</div>', salida: 'Ok 10:05:23', estado: 'Pendiente', alertas: '' },
    { entrada: '<div class="entradaNombre">Pablo Muñoz</div><div class="entradaHora">09:01:23</div>', salida: 'Sin App', estado: 'Pendiente', alertas: '' }
];


  const tableContainer = document.getElementById('tablaModalAhora');
  const table = document.createElement('table');
  table.classList.add('table', 'table-striped');

  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  const headers = ['<div class="form-check"><input class="form-check-input" type="checkbox" value=""></div>', '<div class="selectAll">SELECCIONAR TODOS</div>', '<div class="entradaIcon d-flex align-items-center justify-content-center flex-column"><img src="../img/qrIcon.png">ENTRADA</div>', '<div class="salidaIcon d-flex align-items-center justify-content-center flex-column"><img src="../img/qrIcon.png">SALIDA</div>', '<img src="../img/warning-blue.svg">'];
  headers.forEach(header => {
      const th = document.createElement('th');
      th.innerHTML = header.includes('img') ? header : header;
      trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  tableData.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
          <td><div class="form-check"><input class="form-check-input" type="checkbox" value=""></div></td>
          <td><div class="entradaIcon d-flex align-items-center justify-content-start"><img src="../img/ojo.svg" class="me-3 ojoIcon"><div>${item.entrada.replace('\n', '<br>')}</div></div></td>
          <td>${formatStatusCell(item.salida)}</td>
          <td>${formatStatusCell(item.estado)}</td>
          <td>${item.alertas || ''}</td>
      `;
      tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  tableContainer.appendChild(table);

  document.querySelectorAll('.ojoIcon').forEach(icon => {
    icon.addEventListener('click', function() {
        openDetailModal();
    });

    document.querySelectorAll('.firmarSesion').forEach(button => {
      button.addEventListener('click', function() {
          openFormularioSesion();
      });
    });


});
}

function formatStatusCell(text) {
if (text.includes('Ok')) {
    return `<div class="statusCell oK d-flex align-items-center justify-content-center"><img src="../img/green-circle-fill.svg" class="me-2"><span style="color: #74B160;">${text}</span></div>`;
} else if (text.includes('Pendiente')) {
    return `<div class="statusCell pending d-flex align-items-center justify-content-center"><img src="../img/blue-circle-fill.svg" class="me-2"><span style="color: #3374B0;">${text}</span></div>`;
} else if (text === 'Sin App') {
    return `<div class="statusCell sinApp d-flex align-items-center justify-content-center"><img src="../img/red-circle-fill.svg" class="me-2"><span style="color: #DF1517;">${text}</span></div>`;
} else if (text === '12:01:15 – 1,15 horas') {
    return `<div class="statusCell horaStatus d-flex align-items-center justify-content-center"><span style="color: #74B160;">${text}</span></div>`;
} else {
    return `<div>${text}</div>`; 
}
}

function openDetailModal() {
    const modalHtml = `
        <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="datosPersonales">
                        <p>DATOS PERSONALES</p>
                        <form>
                          <div class="datosPersonalesForm d-flex align-items-start justify-content-center flex-column">
                            <div class="topForm d-flex align-items-start justify-content-start">
                              <div class="form-floating me-2">
                                <select class="form-select" id="floatingSelect">
                                  <option selected>NIF</option>
                                </select>
                                <label for="floatingSelect">Tipo de Documento</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput2" value="1235232Y">
                                <label for="floatingInput2">Documentos</label>
                              </div>   
                            </div>
                            <div class="bottomForm d-flex align-items-center justify-content-start">
                              <div class="form-floating mb-3 me-2">
                                <input type="text" class="form-control" id="floatingInput3" value="Pablo">
                                <label for="floatingInput3">Nombre</label>
                              </div>
                              <div class="form-floating mb-3 me-2">
                                <input type="text" class="form-control" id="floatingInput4" value="Muñoz">
                                <label for="floatingInput4">1º Apellido</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput5" value="Texto">
                                <label for="floatingInput5">2º Apellido</label>
                              </div>
                            </div>
                          </div>
                          <div class="datosAsistenciaForm d-flex align-items-start justify-content-center flex-column">
                            <p>DATOS ASISTENCIA 10/01/2023 DE 10:00 A 12:00</p>
                            <div class="form-floating mb-3 me-2">
                              <input type="text" class="form-control" id="floatingInput6" value="2">
                              <label for="floatingInput6">Horas asistidas</label>
                            </div>
                            <div class="form-floating w-50">
                              <textarea class="form-control" id="floatingTextarea">Texto</textarea>
                              <label for="floatingTextarea">Observaciones</label>
                            </div>
                          </div>
                          <div class="guardarBtn d-flex align-items-center justify-content-center mt-5">
                            <button class="btn guardar">Guardar</button>
                          </div>
                        </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const detailModal = new bootstrap.Modal(document.getElementById('detailModal'), {});
    detailModal.show();
};

function openFormularioSesion() {

document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.remove(); 
});

const modalHtml = `
    <div class="modal fade" id="formularioSesion" tabindex="-1" aria-labelledby="formularioSesionLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center position-relative">
                <img src="../img/controlAsistencia.png">
                <div class="btnContainer d-flex align-items-center justify-content-center" style="position: absolute; top: 34%; left: 50%; transform: translate(-50%, -50%);">
                    <button class="btn botonFirmar">Firmar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
`;

document.querySelectorAll('.botonFirmar').forEach(button => {
    button.addEventListener('click', function() {
    openSignatureModal();
    });
});

document.body.insertAdjacentHTML('beforeend', modalHtml);
const formularioSesion = new bootstrap.Modal(document.getElementById('formularioSesion'), {});
formularioSesion.show();

formularioSesion._element.addEventListener('hidden.bs.modal', () => {
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    document.getElementById('formularioSesion').remove();
});
};

function openSignatureModal() {
    
    if (!document.getElementById('modalFirma')) {
        const modalHtml = `
            <div class="modal fade" id="modalFirma" tabindex="-1" aria-labelledby="modalFirmaLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalFirmaLabel">Firma del Documento</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex align-items-center justify-content-around">
                            <div class="phoneIcon">
                            <img src="../img/phoneIcon.svg">
                            </div>
                            <div class="firmaQr d-flex align-items-start justify-content-center flex-column">
                            <p class="firmaQrTitulo">Firma desde tu móvil</p>
                            <p class="firmaQrSubTitulo">Escanea este código QR</p>
                            <img src="../img/qrFirma.png" class="qrFirma">
                            </div>
                            <div class="rightMenuSignature">
                            <div class=topMenuSignature d-flex align-items-start justify-content-center flex-column>
                                <p class="participante">PARTICIPANTE: <span class="participanteNombre ms-2">Juan García</span></p>
                                <p class="curso">CURSO: <span class="cursoNombre ms-2">Asistencia control</span></p>
                                <p class="firme">FIRME EN LA PANTALLA Y PULSE ENVIAR FIRMA</p>
                            </div>
                            <div class="bottomMenuSignature">
                                <img src="../img/firmaAlzada.png" alt="">
                            </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex align-items-center justify-content-center">
                            <button type="button" class="btn" id="saveSignature">Enviar firma</button>
                            <button type="post" class="btn" id="clearSignature">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    document.querySelectorAll('#saveSignature').forEach(button => {
    button.addEventListener('click', function() {
        openControlAsistenciaModalFirmado();
    });
    });

    
    const signatureModal = new bootstrap.Modal(document.getElementById('modalFirma'));
    signatureModal.show();
};

function openControlAsistenciaModalFirmado() {

if (!document.getElementById('controlAsistenciaFirmado')) {
    const modalHtml = `
        <div class="modal fade" id="controlAsistenciaFirmado" tabindex="-1" aria-labelledby="controlAsistenciaFirmadoLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex align-items-center justify-content-around">
                        <img src="../img/controlAsistenciaFirmado.png" class="controlAsistenciaFirmado">
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}


const signatureModal = new bootstrap.Modal(document.getElementById('controlAsistenciaFirmado'));
signatureModal.show();
};

// Modal Alumnos y Asistentes ultima sesion

function setupAlumnosModal() {
    let alumnosModal = document.querySelector('.alumnosOpener');

    alumnosModal.addEventListener('click', function() {
        let alumnosModalHTML = `
            <div class="modal fade" id="resumenControlModal" tabindex="-1" aria-labelledby="resumenControlModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h6>Asistentes última sesión: 10/02/2023 - 10:00 - 12:00 (sesión 1)</h6>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Alumno</th>
                                        <th>% Asistencia</th>
                                        <th>Tipo Diploma</th>
                                        <th>Certifica</th>
                                        <th>Observaciones</th>
                                    </tr>
                                </thead>
                                <tbody id="modalTableBody">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', alumnosModalHTML);
        let resumenControlModal = new bootstrap.Modal(document.getElementById('resumenControlModal'), {});
        
        const data = [
            { icon: `<img src="../img/document-sign-icon.svg" class="cp">`, nombre: 'González Ram María', asistencia: '100%', diploma: 'Aprovechamiento', certifica: 'Si', observaciones: 'El alumno se va 20 min antes de terminar la sesión' },
            { icon: `<img src="../img/document-sign-icon.svg" class="cp">`, nombre: 'Pérez Donoso Diego', asistencia: '100%', diploma: 'Aprovechamiento', certifica: 'Si', observaciones: '-' },
            { icon: `<img src="../img/document-sign-icon.svg" class="cp">`, nombre: 'Rodríguez Sainz Mathias', asistencia: '0%', diploma: 'Aprovechamiento', certifica: 'Si', observaciones: 'firma pero se va a los 5 min.​' },
            { icon: `<img src="../img/document-sign-icon.svg" class="cp">`, nombre: 'Muños Sale Pablo', asistencia: '0%', diploma: 'Sin Diploma', certifica: 'No', observaciones: '-' },
            { icon: `<img src="../img/document-sign-icon.svg" class="cp">`, nombre: 'Vargas Juan', asistencia: '0%', diploma: 'Aprovechamiento', certifica: 'Si', observaciones: '-' }
        ];

        const tableBody = document.getElementById('modalTableBody');

        data.forEach(item => {
            const row = document.createElement('tr');

            const iconCell = document.createElement('td');
            iconCell.innerHTML = item.icon;

            const nombreCell = document.createElement('td');
            nombreCell.innerText = item.nombre;

            const asistenciaCell = document.createElement('td');
            if (item.asistencia === '100%') {
                asistenciaCell.style.color = '#00AD1F';
            } else if(item.asistencia === '0%'){
                asistenciaCell.style.color = '#DF1517';
            }
            asistenciaCell.innerText = item.asistencia;

            const diplomaCell = document.createElement('td');
            diplomaCell.innerText = item.diploma;

            const certificaCell = document.createElement('td');
            if (item.certifica === 'Si') {
                certificaCell.style.color = '#00AD1F';
            } else if(item.certifica === 'No'){
                certificaCell.style.color = '#DF1517';
            }
            certificaCell.innerText = item.certifica;

            const observacionesCell = document.createElement('td');
            observacionesCell.innerText = item.observaciones;
            observacionesCell.style.color = '#636363';

            row.appendChild(iconCell);
            row.appendChild(nombreCell);
            row.appendChild(asistenciaCell);
            row.appendChild(diplomaCell);
            row.appendChild(certificaCell);
            row.appendChild(observacionesCell);

            tableBody.appendChild(row);
        });

        resumenControlModal.show();

        document.getElementById('resumenControlModal').addEventListener('hidden.bs.modal', function(e) {
            document.getElementById('resumenControlModal').remove();
        });
    });
}

// Modal Cuestionario Satisfaccion

function setupCuestionarioSatisfaccionModal() {
    let cuestionarioSatisfaccion = document.querySelector('.cuestionarioSatisfaccion');

    if (cuestionarioSatisfaccion) {
        cuestionarioSatisfaccion.addEventListener('click', function() {
            let cuestionarioSatisfaccionModalHTML = `
                <div class="modal fade" id="chartModal" tabindex="-1" aria-labelledby="chartModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="chartModalLabel">Gráfica</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex align-items-center justify-content-between">
                              <div class="referencia d-flex align-items-start justify-content-center flex-column">
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#01B8AA" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Organizacion</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#374649" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Contenidos y metodologias</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FD625E" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Duración y Horario</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2C80F" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Formador</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5E6A6C" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Tutores</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8AD4EB" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Medios didácticos</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FE9464" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Instalaciones y medios</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#A66999" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Recursos y materiales (No presencial)</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3599B8" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Media de satisfacción</p>
                                </div>
                              </div>
                              <div class="progress-container d-flex align-items-center justify-content-end">
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 69%; background-color: #01B8AA;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">3,3</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 67%; background-color: #374649;" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100">3,1</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 60%; background-color: #FD625E;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">3,0</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 58%; background-color: #F2C80F;" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100">2,8</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 59%; background-color: #5E6A6C;" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100">2,9</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 69%; background-color: #8AD4EB;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">3,3</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 60%; background-color: #FE9464;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">3,0</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 67%; background-color: #A66999;" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100">3,1</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 47%; background-color: #3599B8;" aria-valuenow="17" aria-valuemin="0" aria-valuemax="100">1,7</div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', cuestionarioSatisfaccionModalHTML);
            let chartModalElement = document.getElementById('chartModal');
            let chartModal = new bootstrap.Modal(chartModalElement, {});

            chartModal.show();

            chartModalElement.addEventListener('hidden.bs.modal', function () {
                chartModalElement.remove();
                document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
                    backdrop.remove();
                });
                document.body.classList.remove('modal-open');
                document.body.style.overflow = '';
            });
        });
    } else {
        console.error('Elemento .cuestionarioSatisfaccion no encontrado');
    }
}


// Modal Mensajes sin Leer

function setupMensajesSinLeerModal() {
    let mensajesSinLeer = document.querySelector('.mensajesSinLeer');

    if (mensajesSinLeer) {
        mensajesSinLeer.addEventListener('click', function() {
            let mensajesSinLeerModalHTML = `
                <div class="modal fade" id="chatModal" tabindex="-1" aria-labelledby="chatModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p class="foro modal-title">Foro</p>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div id="messages" class="d-flex align-items-end justify-content-end flex-column">
                                    <div class="messageContainer d-flex align-items-end justify-content-end">
                                        <div class="messageTitle">
                                            <div>Diego Pérez</div>
                                            <div>11/06/2023 14:17</div>
                                        </div>
                                        <div class="mensajeResponder d-flex align-items-end justify-content-between w-100">
                                            <div class="message">Hola</div>
                                            <div class="responder">Responder</div>
                                        </div>
                                    </div>
                                    <div class="messageContainer d-flex align-items-end justify-content-end">
                                        <div class="messageTitle">
                                            <div>Diego Pérez</div>
                                            <div>11/06/2023 14:17</div>
                                        </div>
                                        <div class="mensajeResponder d-flex align-items-end justify-content-between w-100">
                                            <div class="message">He subido la factura para pagos, quedan 15 días</div>
                                            <div class="responder">Responder</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <form id="messageForm" class="d-flex align-items-center justify-content-start w-100">
                                    <div class="input-group d-flex align-items-center justify-content-start">
                                        <input type="text" class="form-control" id="messageInput" autocomplete="off" placeholder="Escriba un nuevo mensaje..." aria-describedby="button-addon2"/>
                                        <button type="button" class="btn botonAdjuntar" id="button-addon2">Adjuntar</button>
                                    </div>
                                    <button type="button" class="btn ms-2 botonEnviar">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', mensajesSinLeerModalHTML);
            let chatModalElement = document.getElementById('chatModal');
            let chatModal = new bootstrap.Modal(chatModalElement, {
                backdrop: 'static',
                keyboard: false
            });

            chatModal.show();

            chatModalElement.addEventListener('hidden.bs.modal', function () {
                chatModalElement.remove();
                document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
                    backdrop.remove();
                });
                document.body.classList.remove('modal-open');
                document.body.style.overflow = '';
            });
        });
    } else {
        console.error('Elemento .mensajesSinLeer no encontrado');
    }
}

function setupMessageForm() {
    const form = document.getElementById('messageForm');

    if (!form) {
        console.error('El formulario no se encontró');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const messageInput = document.getElementById('messageInput');
        const messagesContainer = document.getElementById('messages');

        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'messageContainer d-flex align-items-end justify-content-end';
            messageDiv.innerHTML = `
                <div class="messageTitle d-flex align-items-center justify-content-between">
                    <div>Diego Pérez</div>
                    <div>${getFormattedDate()}</div>
                </div>
                <div class="mensajeResponder d-flex align-items-end justify-content-between w-100">
                    <div class="message">${escapeHTML(messageText)}</div>
                    <div class="responder">Responder</div>
                </div>
            `;

            messagesContainer.appendChild(messageDiv);
            messageInput.value = '';

            setTimeout(() => {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 0);
        }
    });

    function getFormattedDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hour = now.getHours().toString().padStart(2, '0');
        const minute = now.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year} ${hour}:${minute}`;
    }

    function escapeHTML(html) {
        return html.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, '&#039;');
    }
}

function setupForoModal() {
    const foroElement = document.querySelector('.foro');
    if (foroElement) {
        foroElement.addEventListener('click', function() {
            const modalHTML = `
                <div class="modal fade" id="foroModal" tabindex="-1" aria-labelledby="foroModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header d-flex align-items-start justify-content-start">
                                <div class="titleAndSubtitle">
                                    <p class="modal-title mb-0" id="foroModalLabel">Foro</p>
                                    <p class="subTitle">Grupo: (6499) 11 - 1- Acción de contratación</p>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="foro1 d-flex align-items-end justify-content-start">
                                    <div class="headerForo1 d-flex align-items-center justify-content-between w-100">
                                        <div class="usuarioForo d-flex align-items-center justify-content-start">
                                            <img src="../img/usuarioForoIcon.svg" alt="">
                                            <p class="mb-0 usuarioProfesor ms-2">Diego Pérez</p>
                                        </div>
                                        <div class="fechaHora d-flex align-items-center justify-content-start">
                                            <p class="mb-0">04/09/2023 10:19</p>
                                        </div>
                                    </div>
                                    <div class="recuadroMensaje">
                                        <input type="text" class="mensajeForo form-control" value="Buen día">
                                    </div>
                                    <div class="foro1Botones d-flex align-items-start justify-content-start w-100">
                                        <p class="foro1Boton1 mb-0 ms-5">
                                            + Adjuntar
                                        </p>
                                    </div>
                                </div>
                                <div class="foro2 d-flex align-items-end justify-content-start mt-2">
                                    <div class="headerForo1 d-flex align-items-center justify-content-between w-100">
                                        <div class="usuarioForo d-flex align-items-center justify-content-start">
                                            <img src="../img/usuarioForoIcon.svg" alt="">
                                            <p class="mb-0 usuarioProfesor ms-2">Diego Pérez</p>
                                        </div>
                                        <div class="fechaHora d-flex align-items-center justify-content-start">
                                            <p class="mb-0">04/09/2023 10:19</p>
                                        </div>
                                    </div>
                                    <div class="recuadroMensaje">
                                        <input type="text" class="mensajeForo form-control" value="El archivo fue enviado">
                                    </div>
                                    <div class="foro2Botones ps-5 d-flex align-items-start justify-content-start w-100">
                                        <p class="foro2Boton1 mb-0">
                                            Editar
                                        </p>
                                        <p class="guion mb-0 me-1 ms-1">-</p>
                                        <p class="foro2Boton2 mb-0">
                                            Eliminar
                                        </p>
                                    </div>
                                </div>
                                <div class="foro3 d-flex align-items-end justify-content-start mt-2">
                                    <div class="headerForo1 d-flex align-items-center justify-content-between w-100">
                                        <div class="usuarioForo d-flex align-items-center justify-content-start">
                                            <img src="../img/usuarioForoIcon.svg" alt="">
                                            <p class="mb-0 usuarioProfesor ms-2">Diego Pérez</p>
                                        </div>
                                        <div class="fechaHora d-flex align-items-center justify-content-start">
                                            <p class="mb-0">04/09/2023 10:19</p>
                                        </div>
                                    </div>
                                    <div class="recuadroMensaje">
                                        <input type="text" class="mensajeForo form-control" value="Buen día">
                                    </div>
                                    <div class="foro3Botones ps-5 d-flex align-items-start justify-content-start w-100">
                                        <p class="foro3Boton1 mb-0">
                                            Editar
                                        </p>
                                        <p class="guion mb-0 me-1 ms-1">-</p>
                                        <p class="foro3Boton2 mb-0">
                                            Eliminar
                                        </p>
                                    </div>
                                </div>
                                <div class="foro4 d-flex align-items-end justify-content-start mt-2">
                                    <div class="headerForo1 d-flex align-items-center justify-content-between w-100">
                                        <div class="usuarioForo d-flex align-items-center justify-content-start">
                                            <img src="../img/usuarioForoIcon.svg" alt="">
                                            <p class="mb-0 usuarioProfesor ms-2">Diego Pérez</p>
                                        </div>
                                        <div class="fechaHora d-flex align-items-center justify-content-start">
                                            <p class="mb-0">04/09/2023 10:19</p>
                                        </div>
                                    </div>
                                    <div class="recuadroMensaje">
                                        <div class="input-like w-100" contenteditable="true">
                                            <p class="mb-0">Buen día</p>
                                            <p class="mb-0 adjuntado">iso.jpg</p>
                                        </div>
                                    </div>
                                    <div class="foro4Botones ps-5 d-flex align-items-start justify-content-start w-100">
                                        <p class="foro4Boton1 mb-0">
                                            Editar
                                        </p>
                                        <p class="guion mb-0 me-1 ms-1">-</p>
                                        <p class="foro4Boton2 mb-0">
                                            Eliminar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            const existingModal = document.getElementById('foroModal');
            if (existingModal) {
                existingModal.remove();
            }
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            const foroModal = new bootstrap.Modal(document.getElementById('foroModal'));
            foroModal.show();
            document.getElementById('foroModal').addEventListener('hidden.bs.modal', function () {
                this.remove();
            });
        });
    }
}

function openSignatureModalWithoutQR() {
      
    if (!document.getElementById('modalFirmaSinQR')) {
        const modalHtml = `
            <div class="modal fade" id="modalFirmaSinQR" tabindex="-1" aria-labelledby="modalFirmaSinQRLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-body d-flex align-items-center justify-content-around">
                            <div class="rightMenuSignature">
                              <div class=topMenuSignature d-flex align-items-start justify-content-center flex-column>
                                <p class="participante">PARTICIPANTE: <span class="participanteNombre ms-2">Juan García</span></p>
                                <p class="curso">CURSO: <span class="cursoNombre ms-2">Asistencia control</span></p>
                                <p class="firme">FIRME EN LA PANTALLA Y PULSE ENVIAR FIRMA</p>
                              </div>
                              <div class="bottomMenuSignature">
                                <img src="../img/firmaAlzada.png" alt="">
                              </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex align-items-center justify-content-center">
                            <button type="button" class="btn" id="saveSignatureWithoutQR">Enviar firma</button>
                            <button type="post" class="btn" id="clearSignature">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }
    
    const signatureModal = new bootstrap.Modal(document.getElementById('modalFirmaSinQR'));
    signatureModal.show();
}

 
function setupModalWithImage() {
let modalTrigger = document.getElementById('modalTestTeleformacion');

if (!modalTrigger) {
    setTimeout(setupModalWithImage, 100);
    return;
}

modalTrigger.addEventListener('click', () => {
    
    let modal = document.getElementById('modalImageTeleformacion');
    if (!modal) {
        
        modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = 'modalImageTeleformacion';
        modal.tabIndex = -1;
        modal.setAttribute('aria-labelledby', 'modalImageTeleformacionLabel');
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex justify-content-center">
                        <img src="assets/img/testTeleformacion.svg" alt="Teleformación Test Image">
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        
        let modalInstance = new bootstrap.Modal(modal, {
            backdrop: 'static'
        });

        
        modalInstance.show();

        
        modal.addEventListener('hidden.bs.modal', () => {
            modal.remove();
        });
    } else {
        
        let modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.show();
    }
});
}


iniciarAplicacion()