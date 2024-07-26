function iniciarAplicacion() {
    const navElement = document.querySelector('.nav-wrapper');
    document.querySelectorAll('.searchDiv input').forEach(input => {
        input.addEventListener('keyup', filterData);
    });
    renderTable(tableData);
    setupDragToScroll(navElement);
    setupFormadorIconPopover();
    cargarInteracciones();
    initOffcanvas();
    inicializarInteraccionesTabla();
    inicializarExpandReduce();
    mostrarUrlModal();
    inicializarDatosTablas();
    inicializarFormularioMensajes();
    inicializarSeleccionDias();
    cargarDatosComunicaciones();
    cargarDatosAlumnosProfesores();
    inicializarContenidoCelulas();
    cargarDatosModoTabla();
    cargarDatosVerModulos();
    cargarDatosToDoEIncidencias();
    cargarDatosTablasAsistenciaCuestionario();
    setupModalTriggers();
}

window.addEventListener('load', () => {
    setupCustomSelects();
    setupHamburgerMenu();

    const urlParams = new URLSearchParams(window.location.search);
    const openOffcanvas = urlParams.get('openOffcanvas');

    const volverGestor = document.querySelector('.volverGestor');

    if (openOffcanvas === 'true' && volverGestor) {
        volverGestor.style.display = 'block';

        volverGestor.addEventListener('click', () => {
            const isGitHubPages = window.location.hostname.includes('github.io');
            window.location.href = isGitHubPages ? '/panel_gestor/assets/pages/gestor.html' : '/assets/pages/gestor.html';
        });
    } else if (volverGestor) {
        volverGestor.classList.remove('volverGestor');
        volverGestor.classList.add('noVolverGestor');
    }
});


const tableData = [
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/pink-circle-fill.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/red-circle-fill-little.svg" alt="Incidentado"><p class="mb-0 ms-2" style="color: #DF1517">Incidentado</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value="" checked></div>`, notes: `<img src="../img/notes.svg" alt="" class="notes-icon-second-row" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/darkRed-circle-fill-little.svg" alt="Anulado"><p class="mb-0 ms-2" style="color: #8C0C0E">Anulado</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "PRL avanzado en la oficina de Bonificada​", MOD: "M", AULA_VIRTUAL: "S", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value="" checked></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/orange-circle-fill-little.svg" alt="Modificado"><p class="mb-0 ms-2" style="color: #FF7A00">Modificado</p></div>`, EXPEDIENTE: "CAM-FC/24978A", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CP COML0110. Mozo Almacén", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value="" checked></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/gray-circle-fill-little.svg" alt="Finalizado"><p class="mb-0 ms-2" style="color: #7B7B7B;">Finalizado</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/lightGreen-circle-fill-little.svg" alt="Válido"><p class="mb-0 ms-2" style="color: #51AC34;">Válido</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/blue-circle-fill-little.svg" alt="Pdte"><p class="mb-0 ms-2" style="color: #3374B0;">Pdte</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/lightGreen-circle-fill-little.svg" alt="Válido"><p class="mb-0 ms-2" style="color: #51AC34;">Válido</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/blue-circle-fill-little.svg" alt="Pdte"><p class="mb-0 ms-2" style="color: #3374B0;">Pdte</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/pink-circle-fill.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/red-circle-fill-little.svg" alt="Incidentado"><p class="mb-0 ms-2" style="color: #DF1517">Incidentado</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/lightGreen-circle-fill-little.svg" alt="Válido"><p class="mb-0 ms-2" style="color: #51AC34;">Válido</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/blue-circle-fill-little.svg" alt="Pdte"><p class="mb-0 ms-2" style="color: #3374B0;">Pdte</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/lightGreen-circle-fill-little.svg" alt="Válido"><p class="mb-0 ms-2" style="color: #51AC34;">Válido</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/green-circle-fill-little.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/blue-circle-fill-little.svg" alt="Pdte"><p class="mb-0 ms-2" style="color: #3374B0;">Pdte</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },
    { check: `<div class="form-check ms-2 mt-2"><input class="form-check-input" type="checkbox" value=""></div>`, notes: `<img src="../img/notes.svg" alt="" style="cursor: pointer;">`, ID: `<div class="d-flex align-items-center justify-content-center"><p class="mb-0 me-2">6493</p><img src="../img/pink-circle-fill.svg"</div>`, ANUL: "N", ESTADO: `<div class="d-flex align-items-center justify-content-start"><img src="../img/red-circle-fill-little.svg" alt="Incidentado"><p class="mb-0 ms-2" style="color: #DF1517">Incidentado</p></div>`, EXPEDIENTE: "B221464BE", ACCIÓN: "4", GRUPO: "1", IDENTIFICACIÓN: "24245", DENOMINACIÓN: "CÓMO GESTIONAR FORMACIÓN CON ERP IFORMALIA", MOD: "M", AULA_VIRTUAL: "N", HORAS: "6,00", TAGS: "", INICIO: "12/01/2023", FIN: "12/01/2023", SOL: "30", TOT: "15", INI: "0", CERT: "0", LOCALIDAD: "Madrid", RESPONSABLE: "Juan Diaz", CENTRO_DE_FORMACION: "Centro General", SESION_CERRADA: "N", F_CIERRE_SES: "", FIRMA_APP: "", COMUNICACION: "Pre Inicio: 8-2-2024", ESTADO_COMUNICACION: "Comunicada", COMUNICACION_2: "Comunicación Fin: 25-5-2024", ESTADO_2: "Pendiente" },

];

const controlData = [
    {
        alumno: 'Hernández Santiago',
        porcentaje: '28,56%',
        certifica: '-',
        presencial1: 'Si',
        envioEntrada1: 'Pendiente',
        firmaEntrada1: '',
        horas1: '<div class="horasInput w-50">3</div>',
        presencial2: 'Si',
        envioEntrada2: 'Pendiente',
        firmaEntrada2: '',
        horas2: '<div class="d-flex align-items-center justify-content-center"><div class="horasInput w-75">2</div><img src="../img/envelopeIcon.svg" id="envelopeAsistencia1" class="ms-2"></div>'
    },
    {
        alumno: 'Rodríguez Matthias',
        porcentaje: '28,56%',
        certifica: '-',
        presencial1: 'Si',
        envioEntrada1: 'Pendiente',
        firmaEntrada1: '',
        horas1: '<div class="d-flex align-items-center justify-content-center"><div class="horasInput w-75">2</div><img src="../img/envelopeIcon.svg" id="envelopeAsistencia2" class="ms-2"></div>',
        presencial2: 'Si',
        envioEntrada2: 'Pendiente',
        firmaEntrada2: '',
        horas2: '<div class="horasInput w-50">3</div>'
    },
    {
        alumno: 'González María',
        porcentaje: '28,56%',
        certifica: '-',
        presencial1: 'Si',
        envioEntrada1: 'Pendiente',
        firmaEntrada1: '',
        horas1: '<div class="horasInput w-50">3</div>',
        presencial2: 'Si',
        envioEntrada2: 'Pendiente',
        firmaEntrada2: '',
        horas2: '<div class="horasInput w-50">3</div>'
    },
    {
        alumno: 'Alumnos: 3',
        porcentaje: '28,56%',
        certifica: '',
        presencial1: '3',
        envioEntrada1: '',
        firmaEntrada1: '',
        horas1: '',
        presencial2: '3',
        envioEntrada2: '',
        firmaEntrada2: '',
        horas2: ''
    }
];

const cuestionarioData = [
    {
        icono: '<img src="../img/notes.svg">',
        nombre: 'Juan',
        apellido1: 'García',
        apellido2: 'Muñoz',
        fa: '-',
        cert: '-',
        porcentaje: '28,57',
        icono2: '<img src="../img/notes.svg">',
        cuestionario1: 'Pendiente',
        cuestionario2: 'Pendiente'
    },
    {
        icono: '<img src="../img/notes.svg">',
        nombre: 'Juan',
        apellido1: 'García',
        apellido2: 'Muñoz',
        fa: '-',
        cert: '-',
        porcentaje: '28,57',
        icono2: '<img src="../img/notes.svg">',
        cuestionario1: 'Realizado',
        cuestionario2: 'Realizado'
    },
    {
        icono: '<img src="../img/notes.svg">',
        nombre: 'Juan',
        apellido1: 'García',
        apellido2: 'Muñoz',
        fa: '-',
        cert: '-',
        porcentaje: '28,57',
        icono2: '<img src="../img/notes.svg">',
        cuestionario1: 'Pendiente',
        cuestionario2: 'Pendiente'
    },
    {
        icono: '<img src="../img/notes.svg">',
        nombre: 'Juan',
        apellido1: 'García',
        apellido2: 'Muñoz',
        fa: '-',
        cert: '-',
        porcentaje: '28,57',
        icono2: '<img src="../img/notes.svg">',
        cuestionario1: 'Pendiente',
        cuestionario2: 'Pendiente'
    }
];

const incidenciasData = [
    {
        icono: '<img src="../img/notes.svg">',
        fechaInicio: '27/03/2023 10:45',
        estado: 'Pendiente',
        area: 'Comercial',
        incidencia: 'Formación',
        usuarioIncidencia: 'Pablo Muñoz',
        areaIncidencia: 'Formación',
        observaciones: 'Asistencia',
        fechaResolucion: '27/03/2023 10:45',
        usuarioResolucion: 'Sánchez María'
    },
    {
        icono: '<img src="../img/notes.svg">',
        fechaInicio: '27/03/2023 10:45',
        estado: 'Pendiente',
        area: 'Comercial',
        incidencia: 'Formación',
        usuarioIncidencia: 'Pablo Muñoz',
        areaIncidencia: 'Formación',
        observaciones: 'Asistencia',
        fechaResolucion: '27/03/2023 10:45',
        usuarioResolucion: 'Sánchez María'
    },
    {
        icono: '<img src="../img/notes.svg">',
        fechaInicio: '27/03/2023 10:45',
        estado: 'Pendiente',
        area: 'Comercial',
        incidencia: 'Formación',
        usuarioIncidencia: 'Pablo Muñoz',
        areaIncidencia: 'Formación',
        observaciones: 'Asistencia',
        fechaResolucion: '27/03/2023 10:45',
        usuarioResolucion: 'Sánchez María'
    },
    {
        icono: '<img src="../img/notes.svg">',
        fechaInicio: '27/03/2023 10:45',
        estado: 'Pendiente',
        area: 'Comercial',
        incidencia: 'Formación',
        usuarioIncidencia: 'Pablo Muñoz',
        areaIncidencia: 'Formación',
        observaciones: 'Asistencia',
        fechaResolucion: '27/03/2023 10:45',
        usuarioResolucion: 'Sánchez María'
    }
];

const toDoData = [

    {
        nota: `<div class="d-flex align-items-center justify-content-between">
                    <p class="mb-0 notaTexto">Nota1</p>
                    <div class="circleDate d-flex align-items-center justify-content-center">
                        <div class="d-flex align-items-center justify-content-center me-3 clockDate">
                            <img src="../img/clockIcon.svg">
                            <p class="mb-0 ms-1">7 Feb</p>
                        </div>
                        <div>
                            <img src="../img/circle-fill-violeta.svg">
                        </div>
                    </div>
                </div>`
    },
    {
        nota: `<div class="d-flex align-items-center justify-content-between">
                    <p class="mb-0 notaTexto">Nota2</p>
                    <div class="circleDate d-flex align-items-center justify-content-center">
                        <div class="d-flex align-items-center justify-content-center me-3 clockDate">
                            <img src="../img/clockIcon.svg">
                            <p class="mb-0 ms-1">7 Feb</p>
                        </div>
                        <div>
                            <img src="../img/circle-fill-azul.svg">
                        </div>
                    </div>
                </div>`
    }
];

const toDoData2 = [

    {
        nota: `<div class="d-flex align-items-center justify-content-between ms-5">
                    <div class="d-flex align-items-center justify-content-start">
                        <input class="form-check-input me-2" type="checkbox" value="">
                        <p class="mb-0 notaTexto">Confirmar Planificación Managers</p>
                    </div>
                    <div class="circleDate d-flex align-items-center justify-content-center">
                        <div class="d-flex align-items-center justify-content-center me-3 clockDate">
                            <img src="../img/clockIcon.svg">
                            <p class="mb-0 ms-1">7 Feb</p>
                        </div>
                        <div>
                            <img src="../img/circle-fill-violeta.svg">
                        </div>
                        <div class="adjuntarToDo">
                            <img src="../img/adjuntar.svg">
                        </div>
                        <div class="mensajeToDo">
                            <img src="../img/mensaje.svg">
                        </div>
                    </div>
                </div>`
    },
    {
        nota: `<div class="d-flex align-items-center justify-content-between ms-5">
                    <div class="d-flex align-items-center justify-content-start">
                        <input class="form-check-input me-2" type="checkbox" value="">
                        <p class="mb-0 notaTexto">Confirmar Roles y Contrato</p>
                    </div>
                    <div class="circleDate d-flex align-items-center justify-content-center">
                        <div class="d-flex align-items-center justify-content-center me-3 clockDate">
                            <img src="../img/clockIcon.svg">
                            <p class="mb-0 ms-1">7 Feb</p>
                        </div>
                        <div>
                            <img src="../img/circle-fill-azul.svg">
                        </div>
                        <div class="adjuntarToDo">
                            <img src="../img/adjuntar.svg">
                        </div>
                        <div class="mensajeToDo">
                            <img src="../img/mensaje.svg">
                        </div>
                    </div>
                </div>`
    }
];

const toDoData3 = [

    {
        nota: `<div class="d-flex align-items-center justify-content-between ms-5">
                    <div class="d-flex align-items-center justify-content-start">
                        <input class="form-check-input me-2" type="checkbox" value="" checked>
                        <p class="mb-0 notaTexto3">Pedir Factura Profes</p>
                    </div>
                    <div class="circleDate d-flex align-items-center justify-content-center">
                        <div class="d-flex align-items-center justify-content-center me-3 clockDate">
                            <img src="../img/clockIcon.svg">
                            <p class="mb-0 ms-1">19 Feb</p>
                        </div>
                        <div>
                            <img src="../img/circle-fill-violeta.svg">
                        </div>
                        <div class="adjuntarToDo">
                            <img src="../img/adjuntar.svg">
                        </div>
                        <div class="mensajeToDo">
                            <img src="../img/mensaje.svg">
                        </div>
                    </div>
                </div>`
    },
    {
        nota: `<div class="d-flex align-items-center justify-content-between ms-5">
                    <div class="d-flex align-items-center justify-content-start">
                        <input class="form-check-input me-2" type="checkbox" value="" checked>
                        <p class="mb-0 notaTexto3">Confirmar Planificación Managers</p>
                    </div>
                    <div class="circleDate d-flex align-items-center justify-content-center">
                        <div class="d-flex align-items-center justify-content-center me-3 clockDate">
                            <img src="../img/clockIcon.svg">
                            <p class="mb-0 ms-1">19 Feb</p>
                        </div>
                        <div>
                            <img src="../img/circle-fill-azul.svg">
                        </div>
                        <div class="adjuntarToDo">
                            <img src="../img/adjuntar.svg">
                        </div>
                        <div class="mensajeToDo">
                            <img src="../img/mensaje.svg">
                        </div>
                    </div>
                </div>`
    }
];


const toDoData4 = [

    {
        nota: `<div class="d-flex align-items-center justify-content-between ms-5">
                    <div class="d-flex align-items-center justify-content-start">
                        <input class="form-check-input me-2" type="checkbox" value="">
                        <p class="mb-0 notaTexto4">Confirmar Roles y Contrato</p>
                    </div>
                    <div class="circleDate d-flex align-items-center justify-content-center">
                        <div class="d-flex align-items-center justify-content-center me-3 clockDateEnero">
                            <img src="../img/clockIconWhite.svg">
                            <p class="mb-0 ms-1">15 Ene</p>
                        </div>
                        <div>
                            <img src="../img/circle-fill-violeta.svg">
                        </div>
                        <div class="adjuntarToDo">
                            <img src="../img/adjuntar.svg">
                        </div>
                        <div class="mensajeToDo">
                            <img src="../img/mensaje.svg">
                        </div>
                    </div>
                </div>`
    },
    {
        nota: `<div class="d-flex align-items-center justify-content-between ms-5">
                    <div class="d-flex align-items-center justify-content-start">
                        <input class="form-check-input me-2" type="checkbox" value="">
                        <p class="mb-0 notaTexto4">Pedir Factura Profes</p>
                    </div>
                    <div class="circleDate d-flex align-items-center justify-content-center">
                        <div class="d-flex align-items-center justify-content-center me-3 clockDateEnero">
                            <img src="../img/clockIconWhite.svg">
                            <p class="mb-0 ms-1">15 Ene</p>
                        </div>
                        <div>
                            <img src="../img/circle-fill-azul.svg">
                        </div>
                        <div class="adjuntarToDo">
                            <img src="../img/adjuntar.svg">
                        </div>
                        <div class="mensajeToDo">
                            <img src="../img/mensaje.svg">
                        </div>
                    </div>
                </div>`
    }
];


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
        else if (event.target.id === 'gestor') {
            window.location.href = isGitHubPages ? '/panel_gestor/assets/pages/gestor.html' : '/assets/pages/gestor.html';
        }
    });
    
    
    
}
function getColorByStatus(status) {
    const colorMap = {
        "Incidentado": "#DF1517",
        "Anulado": "#8C0C0E",
        "Modificado": "#FF7A00",
        "Finalizado": "#7B7B7B",
        "Válido": "#51AC34",
        "Pdte": "#3374B0"
    };
    return colorMap[status] || "#000000";
}

function getColorStatus(text) {
    let color = "#000000";
    if (text === "Comunicada") {
        color = "#51AC34";
    } else if (text === "Pendiente") {
        color = "#DF1517"
    }
    return `<span style="color: ${color};">${text}</span>`;
}

function renderTable(filteredData) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    if (filteredData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="30" class="text-center">Sin datos para mostrar</td></tr>';
    } else {
        filteredData.forEach(row => {
            const tr = document.createElement('tr');
            Object.entries(row).forEach(([key, value], index) => {
                const td = document.createElement('td');
                
                const textContent = value.replace(/<[^>]*>?/gm, '').trim();
                
                
                if (key === 'ESTADO_2' && textContent === 'Pendiente') {
                    td.style.color = '#DF1517';
                } else if (key === 'ESTADO_COMUNICACION' && textContent === 'Comunicada') {
                    td.style.color = '#51AC34';
                }
                
                td.innerHTML = value;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    }

    const cells = document.querySelectorAll('.tablaPrincipal td');

    cells.forEach(cell => {
    
        if (cell.offsetWidth < cell.scrollWidth) {
            cell.setAttribute('title', cell.textContent.trim());
        }
    });
}

function filterData() {
    const searchInputs = document.querySelectorAll('.searchDiv input');
    let filteredData = tableData;

    searchInputs.forEach((input, index) => {
        const columnKey = Object.keys(tableData[0])[index + 2]; 
        if (input.value) {
            filteredData = filteredData.filter(row => {
                const columnValue = row[columnKey].replace(/<[^>]*>?/gm, ''); 
                return columnValue.toLowerCase().includes(input.value.toLowerCase());
            });
        }
    });

    renderTable(filteredData);
}

function cargarInteracciones() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cargarInteracciones);
    } else {
        const estadisticasIcon = document.querySelector('.estadisticasIcon');
        const chatbotAyuda = document.querySelector('.chatbotAyuda');

        estadisticasIcon.addEventListener('click', function() {
            window.open('https://app.powerbi.com/view?r=eyJrIjoiMjI0YTZiNjQtYWM1MS00ZTZmLWFkMTktZmM5NmEwNWYxNjQ1IiwidCI6IjU1ZWJjNjI2LWMxODctNDEwNC1hZDIzLTZiYTI1M2E0NDMwYSIsImMiOjh9', '_blank');
        });

        chatbotAyuda.addEventListener('click', function() {
            window.open('https://ia-chat.dev.doubledot.es/iformalia%E2%80%8B', '_blank');
        });
    }
}

function initOffcanvas() {
    const offcanvasRight = document.getElementById('offcanvasRight');
    const tabAcciones = document.getElementById('acciones-tab');

    if (offcanvasRight && tabAcciones) {
        const offcanvasInstance = new bootstrap.Offcanvas(offcanvasRight, {
            focus: false,
            backdrop: false
        });

        const queryParams = new URLSearchParams(window.location.search);
        const openOffcanvas = queryParams.get('openOffcanvas');

        if (openOffcanvas === 'true') {
            offcanvasInstance.show();
            offcanvasRight.addEventListener('shown.bs.offcanvas', function() {
                let tab = new bootstrap.Tab(tabAcciones);
                tab.show();
            }, {once: true});
        }
    }

    const notesIcon = document.querySelector('.notes-icon-second-row');
    if (!notesIcon) {
        console.error('El ícono notes no fue encontrado en el documento.');
        return;
    }

    
    const offcanvasInstance = new bootstrap.Offcanvas(offcanvasRight, {
        focus: false,
        backdrop: false  
    });

    notesIcon.addEventListener('click', function() {
        offcanvasInstance.show();
    });
    
}

function inicializarInteraccionesTabla() {
    if (document.readyState === 'loading') { 
        document.addEventListener('DOMContentLoaded', inicializarInteraccionesTabla);
    } else { 
        const container = document.querySelector('.tablaPrincipal');
        let isDown = false;
        let startX;
        let startY;
        let scrollLeft;
        let scrollTop;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            startY = e.pageY - container.offsetTop;
            scrollLeft = container.scrollLeft;
            scrollTop = container.scrollTop;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'auto';
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'auto';
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const y = e.pageY - container.offsetTop;
            const walkX = (x - startX) * 3;
            const walkY = (y - startY) * 3;
            container.scrollLeft = scrollLeft - walkX;
            container.scrollTop = scrollTop - walkY;
        });
    }
}

function inicializarExpandReduce() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarExpandReduce);
    } else {
        const expandReduceIcon = document.getElementById('expandReduceIcon');
        const offcanvas = document.querySelector('.offcanvas.offcanvas-end');
        const navTabs = document.querySelector('.nav.nav-tabs');
        const formAcciones = document.querySelector('.formAcciones');
        const formSuperior = document.querySelector('.formSuperior');
        const formInferior = document.querySelector('.formInferior');

        expandReduceIcon.addEventListener('click', function () {
            if (offcanvas.style.width === '100%') {
                offcanvas.style.width = '50%';
                expandReduceIcon.src = '../img/expandIcon.svg';
                navTabs.classList.remove('d-flex', 'align-items-center', 'justify-content-between');
                formAcciones.classList.remove('d-flex');
                formSuperior.style.width = '100%';
                formInferior.style.width = '100%';
            } else {
                offcanvas.style.width = '100%';
                expandReduceIcon.src = '../img/reduceIcon.svg';
                navTabs.classList.add('d-flex', 'align-items-center', 'justify-content-between');
                formAcciones.classList.add('d-flex');
                formSuperior.style.width = '50%';
                formInferior.style.width = '50%';
                formSuperior.style.float = 'left';
                formInferior.style.float = 'left';
            }
        });
    }
}

function mostrarUrlModal() {
    const urlSelect = document.getElementById('urlSelect');
    const urlModal = new bootstrap.Modal(document.getElementById('urlModal'), {
        keyboard: true
    });

    if (urlSelect) {
        urlSelect.addEventListener('click', function() {
            urlModal.show();
        });
    } else {
        console.error("Elemento #urlSelect no encontrado en el DOM.");
    }
}


// Modal Url


function inicializarDatosTablas() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarDatosTablas);
    } else {
        const datos = [
            {
                accionFormativa: "A.F.:35654 - THEPOWERMBA",
                grupo: "Grupo 699",
                fechaInicio: "22/03/2023",
                fechaFinalizacion: "22/03/2023",
                modalidad: "teleformación",
                acceso: "Acceso a plataforma",
                informe: "Ver informe"
            },
            {
                accionFormativa: "A.F.:35690 - THEPOWERDIGITALMARKETING",
                grupo: "Grupo 701",
                fechaInicio: "22/03/2023",
                fechaFinalizacion: "22/03/2023",
                modalidad: "Aul@ Virtual",
                acceso: "Acceso a plataforma",
                informe: "Ver informe"
            },
            {
                accionFormativa: "A.F.:35700 - FUTURELEADERS",
                grupo: "Grupo 706",
                fechaInicio: "22/03/2023",
                fechaFinalizacion: "22/03/2023",
                modalidad: "teleformación",
                acceso: "Acceso a plataforma",
                informe: "Ver informe"
            },
            {
                accionFormativa: "A.F.:66491- TECNOLOGÍAS DEL LENGUAJE PARA DESARROLLO DE INTERFACES CONVERSACIONALES",
                grupo: "Grupo 1561",
                fechaInicio: "22/03/2023",
                fechaFinalizacion: "22/03/2023",
                modalidad: "teleformación",
                acceso: "Acceso a plataforma",
                informe: "Ver informe"
            }
        ];
    
        const datosTeleformacion = [
            {
                alumno: "Hernández Santiago",
                asistencia: "28,56%",
                tipoDiploma: "Aprovechas",
                certifica: "Si",
                contenidos: "100%",
                tiempoTotal1: "2.3 Horas",
                eval: "Si",
                mensajes: "2",
                tiempoTotal2: "0.2 Horas",
                acceso: "Si",
                primera1: "02/08/2023 10:11",
                ultima1: "12/08/2023 14:33",
                total: "33",
                primera2: "02/08/2023 10:11",
                ultima2: "12/08/2023 14:33",
                resultado: "100% Passed"
            },
            {
                alumno: "Rodríguez Matthias",
                asistencia: "28,56%",
                tipoDiploma: "",
                certifica: "",
                contenidos: "No",
                tiempoTotal1: "",
                eval: "",
                mensajes: "No",
                tiempoTotal2: "",
                acceso: "",
                primera1: "No",
                ultima1: "",
                total: "",
                primera2: "No",
                ultima2: "",
                resultado: ""
            },
            {
                alumno: "González María",
                asistencia: "28,56%",
                tipoDiploma: "",
                certifica: "",
                contenidos: "No",
                tiempoTotal1: "",
                eval: "",
                mensajes: "No",
                tiempoTotal2: "",
                acceso: "",
                primera1: "No",
                ultima1: "",
                total: "",
                primera2: "No",
                ultima2: "",
                resultado: ""
            },
            {
                alumno: "Alumnos: 3",
                asistencia: "28,56%",
                tipoDiploma: "",
                certifica: "",
                contenidos: "",
                tiempoTotal1: "",
                eval: "",
                mensajes: "",
                tiempoTotal2: "",
                acceso: "",
                primera1: "",
                ultima1: "",
                total: "",
                primera2: "",
                ultima2: "",
                resultado: ""
            }
        ];
    
        const datosAulaVirtual = [
            {
                alumno: "Diego Pérez 52984606N",
                fechaAccesoSesion: "22/03/2023",
                horaAcceso: "10:31:05",
                firmaAcceso: "Si",
                firmaDeclaracion: "-",
                tiempoConectadoSesion: "29 min.",
                porcentajeAsistenciaTotalCurso: "50%"
            },
            {
                alumno: "Luis Pérez 52987564B",
                fechaAccesoSesion: "22/03/2023",
                horaAcceso: "10:30:15",
                firmaAcceso: "Si",
                firmaDeclaracion: "-",
                tiempoConectadoSesion: "29 min.",
                porcentajeAsistenciaTotalCurso: "100%"
            },
            {
                alumno: "Rita Gómez 98765436Y",
                fechaAccesoSesion: "22/03/2023",
                horaAcceso: "10:31:21",
                firmaAcceso: "Si",
                firmaDeclaracion: "-",
                tiempoConectadoSesion: "29 min.",
                porcentajeAsistenciaTotalCurso: "100%"
            },
            {
                alumno: "Gabriel García Y98654775",
                fechaAccesoSesion: "22/03/2023",
                horaAcceso: "-",
                firmaAcceso: "-",
                firmaDeclaracion: "Si",
                tiempoConectadoSesion: "-",
                porcentajeAsistenciaTotalCurso: "100%"
            }
        ];

        const tableBodyEjecucion = document.getElementById('tableBodyEjecucion');
        const tableBodyFinalizadas = document.getElementById('tableBodyFinalizadas');
        const tableBodyTeleformacion = document.getElementById('tableBodyTeleformacion');
        const tableBodyAulaVirtual = document.getElementById('tableBodyAulaVirtual');
        
        let rows = '';
        datos.forEach(d => {
            rows += `<tr>
                <td class="accionFormativa">${d.accionFormativa}</td>
                <td class="grupo">${d.grupo}</td>
                <td class="fechaInicio">${d.fechaInicio}</td>
                <td class="fechaFinal">${d.fechaFinalizacion}</td>
                <td class="modalidad">${d.modalidad}</td>
                <td class="acceso"><a>${d.acceso}</a></td>
                <td class="informe"><a>${d.informe}</a></td>
            </tr>`;
        });
        tableBodyEjecucion.innerHTML = rows;
        tableBodyFinalizadas.innerHTML = rows;
    
        let rowsTeleformacion = '';
        datosTeleformacion.forEach(d => {
            rowsTeleformacion += `<tr>
                <td>${d.alumno}</td>
                <td>${d.asistencia}</td>
                <td>${d.tipoDiploma}</td>
                <td>${d.certifica}</td>
                <td class="${d.contenidos === '100%' ? 'colorVerde' : (d.contenidos === 'No' ? 'colorRojo' : '')}">${d.contenidos}</td>
                <td class="colorNegro">${d.tiempoTotal1}</td>
                <td class="${d.eval === 'Si' ? 'colorVerde' : (d.eval === 'No' ? 'colorRojo' : '')}">${d.eval}</td>
                <td class="${d.mensajes === '2' ? 'colorVerde' : (d.mensajes === 'No' ? 'colorRojo' : '')}">${d.mensajes}</td>
                <td class="colorNegro">${d.tiempoTotal2}</td>
                <td class="colorNegro">${d.acceso}</td>
                <td class="${d.primera1 === 'No' ? 'colorRojo' : ''}">${d.primera1}</td>
                <td class="colorNegro">${d.ultima1}</td>
                <td class="colorNegro">${d.total}</td>
                <td class="colorNegro">${d.primera2}</td>
                <td class="colorNegro">${d.ultima2}</td>
                <td class="${d.resultado === '100% Passed' ? 'passed' : ''}">${d.resultado}</td>
            </tr>`;
        });
        tableBodyTeleformacion.innerHTML = rowsTeleformacion;
    
        let rowsAulaVirtual = '';
        datosAulaVirtual.forEach(d => {
            rowsAulaVirtual += `<tr>
            <td class="colorGris">${d.alumno}</td>
            <td class="colorGris">${d.fechaAccesoSesion}</td>
            <td class="colorGris">${d.horaAcceso}</td>
            <td class="colorGris">${d.firmaAcceso}</td>
            <td class="${d.firmaDeclaracion === 'Si' ? 'colorVerde clickable' : ''}" onclick="${d.firmaDeclaracion === 'Si' ? 'openModal()' : ''}">${d.firmaDeclaracion}</td>
            <td class="colorGris">${d.tiempoConectadoSesion}</td>
            <td class="${d.porcentajeAsistenciaTotalCurso === '100%' ? 'colorVerde' : (d.porcentajeAsistenciaTotalCurso === '50%' ? 'colorRojo' : '')}">${d.porcentajeAsistenciaTotalCurso}</td>
        </tr>
        `;
        })
    
        tableBodyAulaVirtual.innerHTML = rowsAulaVirtual;
    
        tableBodyEjecucion.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && e.target.innerText === "Ver informe") {
                const modalidad = e.target.closest('tr').querySelector('.modalidad').innerText;
                let modalId;
    
                if (modalidad === 'teleformación') {
                    modalId = '#modalTeleformacion';
                } else if (modalidad === 'Aul@ Virtual') {
                    modalId = '#modalAulaVirtual';
                }
    
                if (modalId) {
                    const modal = new bootstrap.Modal(document.querySelector(modalId), {
                        keyboard: true
                    });
                    modal.show();
                }
            }
        });
    
        tableBodyFinalizadas.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && e.target.innerText === "Ver informe") {
                const modalidad = e.target.closest('tr').querySelector('.modalidad').innerText;
                let modalId;
    
                if (modalidad === 'teleformación') {
                    modalId = '#modalTeleformacion';
                } else if (modalidad === 'Aul@ Virtual') {
                    modalId = '#modalAulaVirtual';
                }
    
                if (modalId) {
                    const modal = new bootstrap.Modal(document.querySelector(modalId), {
                        keyboard: true
                    });
                    modal.show();
                }
            }
        });
    }
}

function openModal() {
    var myModal = new bootstrap.Modal(document.getElementById('modalDeclaracionResponsable'), {
        keyboard: true
    });
    myModal.show();
}

function setupDragToScroll(element) {
    let isDown = false;
    let startX;
    let scrollLeft;

    element.addEventListener('mousedown', (e) => {
        isDown = true;
        element.style.cursor = 'grabbing';
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
    });

    element.addEventListener('mouseleave', () => {
        isDown = false;
        element.style.cursor = 'grab';
    });

    element.addEventListener('mouseup', () => {
        isDown = false;
        element.style.cursor = 'grab';
    });

    element.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 2; 
        element.scrollLeft = scrollLeft - walk;
    });
}

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

function inicializarFormularioMensajes() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarFormularioMensajes);
    } else {
        const form = document.getElementById('messageForm');
        const messageInput = document.getElementById('messageInput');
        const messagesContainer = document.getElementById('messages');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
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
    }
}

function inicializarSeleccionDias() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarSeleccionDias);
    } else {
        const dayDivs = document.querySelectorAll('.daySelector div');
        const dayCalendarDivs = document.querySelectorAll('.daySelectorCalendario div');

        dayDivs[0].classList.add('selected');
        dayDivs[1].classList.add('selected');
        dayCalendarDivs[0].classList.add('selected');
        dayCalendarDivs[1].classList.add('selected');

        dayDivs.forEach(div => {
            div.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
        dayCalendarDivs.forEach(div => {
            div.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
    }
}

function cargarDatosComunicaciones() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cargarDatosComunicaciones);
    } else {
        const dataComunicaciones = [
            {
                comunicacion: "Pre Inicio: 13-2-2024: 22:21:59<br>Comunicación Fin: 25-5-2024",
                estado: "<p class='mb-0 comunicadaCentro'>Comunicada Centro</p>",
                validacion1: "Validada",
                validacion2: `
                    <div class="validacion d-flex align-items-center justify-content-end">
                        <img src="../img/circle-fill-violeta.svg">
                        <img src="../img/adjuntar.svg">
                        <img src="../img/mensajeComunicaciones.svg">
                    </div>`
            },
            {
                comunicacion: "Pre Inicio: 14-3-2024: 10:15:30<br>Comunicación Fin: 30-6-2024",
                estado: `<div class="pillPendiente">Pendiente</div>`,
                validacion1: "En Proceso",
                validacion2: `
                    <div class="validacion d-flex align-items-center justify-content-end">
                        <img src="../img/circle-fill-azul.svg">
                        <img src="../img/adjuntar.svg">
                        <img src="../img/mensajeComunicaciones.svg">
                    </div>`
            }
        ];

        const tableBody = document.getElementById('tableBodyComunicaciones');
        dataComunicaciones.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="tdComunicacion">${item.comunicacion}</td>
                <td class="d-flex align-items-center justify-content-center">${item.estado}</td>
                <td class="tdValidacion1">${item.validacion1}</td>
                <td>${item.validacion2}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

function cargarDatosAlumnosProfesores() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cargarDatosAlumnosProfesores);
    } else {
        const dataAlumnos = [
            {
                check: '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1"></div>',
                app: '<div class="d-flex align-items-start justify-content-start flex-column"><div class="yes">Si</div><div class="date">(10-2-2024: 10:01)</div></div>',
                nif: '3234242A',
                nombre: 'María',
                apellidos: 'González Ram',
                email: '<img src="../img/envelopeIcon.svg" alt="">',
                estado: '<div class="inscrito">Inscrito</div>',
                certifica: '<select class="form-select" id="certifica1"><option selected>Si</option><option>No</option></select>',
                finaliza: '<select class="form-select" id="finaliza1"><option selected>Si</option><option>No</option></select>',
                inicia: '<select class="form-select" id="inicia1"><option selected>Si</option><option>No</option></select>',
                baja: '<select class="form-select" id="baja1"><option selected>Si</option><option>No</option></select>',
                asistencia: '55%'
            },
            {
                check: '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2"></div>',
                app: '<div class="d-flex align-items-start justify-content-start flex-column"><div class="yes">Si</div><div class="date">(10-2-2024: 10:01)</div></div>',
                nif: '3234242A',
                nombre: 'Diego',
                apellidos: 'Perez Donoso',
                email: '<img src="../img/envelopeIcon.svg" alt="">',
                estado: '<div class="inscrito">Inscrito</div>',
                certifica: '<select class="form-select" id="certifica2"><option selected>Si</option><option>No</option></select>',
                finaliza: '<select class="form-select" id="finaliza2"><option selected>Si</option><option>No</option></select>',
                inicia: '<select class="form-select" id="inicia2"><option selected>Si</option><option>No</option></select>',
                baja: '<select class="form-select" id="baja2"><option selected>Si</option><option>No</option></select>',
                asistencia: '55%'
            },
            {
                check: '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3"></div>',
                app: '<div class="d-flex align-items-start justify-content-start flex-column"><div class="yes">Si</div><div class="date">(10-2-2024: 10:01)</div></div>',
                nif: '3234242A',
                nombre: 'Mathias',
                apellidos: 'Rodríguez Sainz',
                email: '<img src="../img/envelopeIcon.svg" alt="">',
                estado: '<div class="inscrito">Inscrito</div>',
                certifica: '<select class="form-select" id="certifica3"><option selected>Si</option><option>No</option></select>',
                finaliza: '<select class="form-select" id="finaliza3"><option selected>Si</option><option>No</option></select>',
                inicia: '<select class="form-select" id="inicia3"><option selected>Si</option><option>No</option></select>',
                baja: '<select class="form-select" id="baja3"><option selected>Si</option><option>No</option></select>',
                asistencia: '55%'
            },
            {
                check: '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4"></div>',
                app: '<div class="no">No</div>',
                nif: '3234242A',
                nombre: 'Pablo',
                apellidos: 'Muños Sale',
                email: '<img src="../img/envelopeIcon.svg" alt="">',
                estado: '<div class="pdteValidar">Pdte Validar</div>',
                certifica: '<select class="form-select" id="certifica4"><option selected>Si</option><option>No</option></select>',
                finaliza: '<select class="form-select" id="finaliza4"><option selected>Si</option><option>No</option></select>',
                inicia: '<select class="form-select" id="inicia4"><option selected>Si</option><option>No</option></select>',
                baja: '<select class="form-select" id="baja4"><option selected>Si</option><option>No</option></select>',
                asistencia: '20%'
            },
            {
                check: '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5"></div>',
                app: '<div class="d-flex align-items-start justify-content-start flex-column"><div class="yes">Si</div><div class="date">(10-2-2024: 10:01)</div></div>',
                nif: '3234242A',
                nombre: 'Juan',
                apellidos: 'Vargas',
                email: '<img src="../img/envelopeIcon.svg" alt="">',
                estado: '<div class="inscrito">Inscrito</div>',
                certifica: '<select class="form-select" id="certifica5"><option selected>Si</option><option>No</option></select>',
                finaliza: '<select class="form-select" id="finaliza5"><option selected>Si</option><option>No</option></select>',
                inicia: '<select class="form-select" id="inicia5"><option selected>Si</option><option>No</option></select>',
                baja: '<select class="form-select" id="baja5"><option selected>Si</option><option>No</option></select>',
                asistencia: '55%'
            }
        ];

        const dataProfesores = [
            {
                check: '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1"></div>',
                documents: '<div class="d-flex align-items-center justify-conent-center documentsProfesores"><img src="../img/document-sign-icon.svg" class="me-2" alt=""><img src="../img/panelIcon.svg" id="panelIcon" alt=""></div>',
                nif: '52984606N',
                nombre: 'Diego',
                apellido1: 'Pérez',
                apellido2: 'Donoso',
                email: 'dperez@innopulse.es',
                telefono: '643212432',
                horas: '20',
                modalidad: 'Presencial',
                app: `<div class="d-flex align-items-start justify-content-center flex-column appP"><p class="mb-0">Si</p><p class="mb-0">(10-2-2024: 10:01)</p></div>`
            },
            {
                check: '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2"></div>',
                documents: '<div class="d-flex align-items-center justify-conent-center documentsProfesores"><img src="../img/document-sign-icon.svg" class="me-2" alt=""><img src="../img/panelIcon.svg" alt=""></div>',
                nif: '52897667H',
                nombre: 'Luis',
                apellido1: 'Pérez',
                apellido2: 'Donoso',
                email: 'lperez@innopulse.es',
                telefono: '643212432',
                horas: '20',
                modalidad: 'Presencial',
                app: `<div class="d-flex align-items-start justify-content-center flex-column appP"><p class="mb-0">Si</p><p class="mb-0">(10-2-2024: 10:01)</p></div>`
            },
            {
                check: '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3"></div>',
                documents: '<div class="d-flex align-items-center justify-conent-center documentsProfesores"><img src="../img/document-sign-icon.svg" class="me-2" alt=""><img src="../img/panelIcon.svg" alt=""></div>',
                nif: '98989765T',
                nombre: 'Pedro',
                apellido1: 'Martín',
                apellido2: 'Martín',
                email: 'pmartin@innopulse.es',
                telefono: '643212432',
                horas: '20',
                modalidad: 'Presencial',
                app: `<div class="d-flex align-items-start justify-content-center flex-column appP"><p class="mb-0">Si</p><p class="mb-0">(10-2-2024: 10:01)</p></div>`
            },
            {
                check: '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4"></div>',
                documents: '<div class="d-flex align-items-center justify-conent-center documentsProfesores"><img src="../img/document-sign-icon.svg" class="me-2" alt=""><img src="../img/panelIcon.svg" alt=""></div>',
                nif: '12398764B',
                nombre: 'Araceli',
                apellido1: 'López',
                apellido2: 'García',
                email: 'alopez@innopulse.es',
                telefono: '643212432',
                horas: '20',
                modalidad: 'Presencial',
                app: `<div class="d-flex align-items-start justify-content-center flex-column appP"><p class="mb-0">Si</p><p class="mb-0">(10-2-2024: 10:01)</p></div>`
            }
        ];
    

        const tableBody = document.getElementById('tableBodyAlumnos');
        dataAlumnos.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.check}</td>
                <td class="tdAlumnosapp">${item.app}</td>
                <td class="tdAlumnosnif">${item.nif}</td>
                <td class="tdAlumnosnombre">${item.nombre}</td>
                <td class="tdAlumnosapellidos">${item.apellidos}</td>
                <td>${item.email}</td>
                <td class="tdAlumnosestado">${item.estado}</td>
                <td class="wide-column">${item.certifica}</td>
                <td class="wide-column">${item.finaliza}</td>
                <td class="wide-column">${item.inicia}</td>
                <td class="wide-column">${item.baja}</td>
                <td class="tdAlumnosasistencia">${item.asistencia}</td>
            `;
            tableBody.appendChild(row);
        });

        const tableBodyProfesores = document.getElementById('tableBodyProfesores');
        dataProfesores.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.check}</td>
                <td>${item.documents}</td>
                <td class="tdnif">${item.nif}</td>
                <td class="tdnombre">${item.nombre}</td>
                <td class="tdapellido1">${item.apellido1}</td>
                <td class="tdapellido2">${item.apellido2}</td>
                <td class="tdemail">${item.email}</td>
                <td class="tdtelefono">${item.telefono}</td>
                <td class="tdhoras">${item.horas}</td>
                <td class="tdmodalidad">${item.modalidad}</td>
                <td class="tdapp">${item.app}</td>
            `;
            tableBodyProfesores.appendChild(row);
        });
    }
}

function inicializarContenidoCelulas() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarContenidoCelulas);
    } else {
        document.querySelectorAll('.cell-content').forEach(function(cell) {
            var checkbox = cell.querySelector('.form-check-input');
            var dateText = cell.querySelector('.diasFechas p:nth-child(2)').innerText; 
            var boxTabla = cell.querySelector('.boxTabla');
            var additionalContent = cell.querySelector('.additional-content');

            checkbox.onclick = function() {
                toggleCheck(this);
            };

            if (dateText === '08' || dateText === '09') {
                checkbox.checked = true;
                boxTabla.classList.add('checked');
                additionalContent.classList.remove('hidden');
            }
        });
    }
}

function cargarDatosModoTabla() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cargarDatosModoTabla);
    } else {
        const dataModoTabla = [
            { fecha: "01/01/2023", dia: "Sábado", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "02/01/2023", dia: "Domingo", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "03/01/2023", dia: "Lunes", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "04/01/2023", dia: "Martes", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "05/01/2023", dia: "Miércoles", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "06/01/2023", dia: "Jueves", asignacion: "Festivo", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "07/01/2023", dia: "Viernes", asignacion: "", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "08/01/2023", dia: "Sábado", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "09/01/2023", dia: "Domingo", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "10/01/2023", dia: "Lunes", asignacion: "MF0239_2 - UF0031", desde1: "10:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "11/01/2023", dia: "Martes", asignacion: "MF0239_2 - UF0031", desde1: "10:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "12/01/2023", dia: "Miércoles", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "13/01/2023", dia: "Jueves", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "14/01/2023", dia: "Viernes", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "15/01/2023", dia: "Sábado", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "16/01/2023", dia: "Domingo", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "17/01/2023", dia: "Lunes", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "18/01/2023", dia: "Martes", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "19/01/2023", dia: "Miércoles", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "20/01/2023", dia: "Jueves", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "21/01/2023", dia: "Viernes", asignacion: "", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "22/01/2023", dia: "Sábado", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "23/01/2023", dia: "Domingo", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "24/01/2023", dia: "Lunes", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "25/01/2023", dia: "Martes", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "26/01/2023", dia: "Miércoles", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "27/01/2023", dia: "Jueves", asignacion: "MF0239_2 - UF0031", desde1: "8:00", hasta1: "12:00", desde2: "14:00", hasta2: "16:00" },
            { fecha: "28/01/2023", dia: "Viernes", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "29/01/2023", dia: "Sábado", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" },
            { fecha: "30/01/2023", dia: "Domingo", asignacion: "Fin de semana", desde1: "", hasta1: "", desde2: "", hasta2: "" }
        ];

        const tableBodyModoTabla = document.getElementById('tableBodyModoTabla');
        dataModoTabla.forEach(item => {
            const row = document.createElement('tr');
            const isSpecialDay = item.asignacion === "Fin de semana" || item.asignacion === "Festivo";
            row.className = isSpecialDay ? 'special-day' : 'normal-day';

            row.innerHTML = `
                <td>${item.fecha}</td>
                <td>${item.dia}</td>
                <td>${item.asignacion}</td>
                <td>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="me-2">${item.desde1}</div>
                        <div>${item.desde1 ? `<img src="../img/${item.desde1 === '8:00' ? 'expandirTdIcon.svg' : 'reducirTdIcon.svg'}">` : ''}</div>
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="me-2">${item.hasta1}</div>
                        <div>${item.hasta1 ? `<img src="../img/${item.hasta1 === '8:00' ? 'expandirTdIcon.svg' : 'reducirTdIcon.svg'}">` : ''}</div>
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="me-2">${item.desde2}</div>
                        <div>${item.desde2 ? `<img src="../img/${item.desde2 === '8:00' ? 'expandirTdIcon.svg' : 'reducirTdIcon.svg'}">` : ''}</div>
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="me-2">${item.hasta2}</div>
                        <div>${item.hasta2 ? `<img src="../img/${item.hasta2 === '8:00' ? 'expandirTdIcon.svg' : 'reducirTdIcon.svg'}">` : ''}</div>
                    </div>
                </td>
            `;

            tableBodyModoTabla.appendChild(row);
        });
    }
}

function toggleCheck(checkbox) {
    var boxTabla = checkbox.closest('.boxTabla');
    var additionalContent = boxTabla.querySelector('.additional-content');

    if (checkbox.checked) {
        boxTabla.classList.add('checked');
        additionalContent.classList.remove('hidden');
    } else {
        boxTabla.classList.remove('checked');
        additionalContent.classList.add('hidden');
    }
}

function cargarDatosVerModulos() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cargarDatosVerModulos);
    } else {
    const dataVerModulos = [
        {
            icono: '<img src="../img/notes.svg">',
            docente: '1634430J LAURA PROFE',
            modulo: 'UF0030 Organización de proceso de venta',
            periodo1: '> Del 13/07/2023 al  27/07/2023',
            periodo2: '> Del 22/09/2023 al  23/09/2023',
            presencial: 'Presencial : 160',
            horas: '160',
            consumo: 'Consum: 60',
            total: 'Tot: 60,00',
            actions: '<img src="../img/cancelarRedIcon.svg">',
            expand: '<img src="../img/expandirTdIcon.svg">'

        },
        {
            icono: '<img src="../img/notes.svg">',
            docente: '1634430J LAURA PROFE',
            modulo: 'UF0031 Técnica de venta',
            periodo1: '> Del 27/07/2023 al  15/08/2023',
            periodo2: '> Del 23/09/2023 al  26/09/2023',
            presencial: 'Presencial : 160',
            horas: '160',
            consumo: 'Consum: 60',
            total: 'Tot: 60,00',
            actions: '<img src="../img/cancelarRedIcon.svg">',
            expand: '<img src="../img/expandirTdIcon.svg">'

        },
        {
            icono: '<img src="../img/notes.svg">',
            docente: '1634430J LAURA PROFE',
            modulo: 'UF0032 Venta Online',
            periodo1: '> Del 15/08/2023 al  22/08/2023',
            presencial: 'Presencial : 160',
            horas: '160',
            consumo: 'Consum: 60',
            total: 'Tot: 60,00',
            actions: '<img src="../img/cancelarRedIcon.svg">',
            expand: '<img src="../img/expandirTdIcon.svg">'
        }
    ];

        const tableBody1 = document.getElementById('tableBodyVerModulos');
        const tableBody2 = document.getElementById('tableBodyVerModulos2');

        dataVerModulos.forEach(item => {
            const row1 = document.createElement('tr');
            row1.className = 'row1';
            row1.innerHTML = `
                <td class="tdIcono">${item.icono}</td>
                <td class="tdDocente">${item.docente}</td>
                <td colspan="2" class="tdHoras">${item.horas}</td>
                <td class="text-center">${item.actions}</td>
            `;
            tableBody1.appendChild(row1);
        
            const row2 = document.createElement('tr');
            row2.innerHTML = `
                <td></td>
                <td class="tdModulo">${item.modulo}</td>
                <td class="tdConsumo">${item.consumo}</td>
                <td class="tdTotal">${item.total}</td>
                <td></td>
            `;
            tableBody1.appendChild(row2);
        
            const row3 = document.createElement('tr');
            row3.innerHTML = `
                <td></td>
                <td class="tdPeriodo">${item.periodo1}</td>
                <td colspan="2" class="tdPresencial">${item.presencial}</td>
                <td class="text-center">${item.expand}</td>
            `;
            tableBody1.appendChild(row3);

    
            const row1b = document.createElement('tr');
            row1b.className = 'row1';
            row1b.innerHTML = `
                <td class="tdIcono">${item.icono}</td>
                <td class="tdDocente">${item.docente}</td>
                <td colspan="2" class="tdHoras">${item.horas}</td>
                <td class="text-center">${item.actions}</td>
            `;
            tableBody2.appendChild(row1b);
        
            const row2b = document.createElement('tr');
            row2b.innerHTML = `
                <td></td>
                <td class="tdModulo">${item.modulo}</td>
                <td class="tdConsumo">${item.consumo}</td>
                <td class="tdTotal">${item.total}</td>
                <td></td>
            `;
            tableBody2.appendChild(row2b);
        
            const row3b = document.createElement('tr');
            row3b.innerHTML = `
                <td></td>
                <td class="tdPeriodo">${item.periodo2}</td>
                <td colspan="2" class="tdPresencial">${item.presencial}</td>
                <td class="text-center">${item.expand}</td>
            `;
            tableBody2.appendChild(row3b);
        });
    }
}

function createTableDataAsistencia(data) {
return data.map((item, index) => `
    <tr>
        <td class="text-center tdAlumno">${item.alumno}</td>
        <td class="text-center tdporcentaje">${item.porcentaje}</td>
        <td class="text-center tdcertifica">${item.certifica}</td>
        <td class="text-center tdpresencial1">${item.presencial1}</td>
        <td class="text-center tdenvioEntrada1">${item.envioEntrada1}</td>
        <td class="text-center tdfirmaEntrada1">${item.firmaEntrada1}</td>
        <td class="text-center tdhoras1">${item.horas1}</td>
        <td class="text-center tdpresencial2">${item.presencial2}</td>
        <td class="text-center tdenvioEntrada2">${item.envioEntrada2}</td>
        <td class="text-center tdfirmaEntrada2">${item.firmaEntrada2}</td>
        <td class="text-center tdhoras2">${item.horas2}</td>
    </tr>
`).join('');
}

function createTableDataCuestionario(data) {
return data.map(item => {
    const cuestionario1Class = item.cuestionario1 === 'Realizado' ? 'realizado' : 'pendiente';
    const cuestionario2Class = item.cuestionario2 === 'Realizado' ? 'realizado' : 'pendiente';
    
    return `
        <tr>
            <td class="text-center" id="iconoCuestionarioNotes">${item.icono}</td>
            <td class="text-center tdnombre">${item.nombre}</td>
            <td class="text-center tdapellido1">${item.apellido1}</td>
            <td class="text-center tdapellido2">${item.apellido2}</td>
            <td class="text-center tdfa">${item.fa}</td>
            <td class="text-center tdcert">${item.cert}</td>
            <td class="text-center tdporcentaje">${item.porcentaje}</td>
            <td class="text-center">${item.icono2}</td>
            <td class="text-center"><div class="${cuestionario1Class}">${item.cuestionario1}</div></td>
            <td class="text-center"><div class="${cuestionario2Class}">${item.cuestionario2}</div></td>
        </tr>
    `;
}).join('');
}

function cargarDatosTablasAsistenciaCuestionario(){
    const tableContainer = document.getElementById('dynamicTableBody');
    const tbodyCuestionario = document.getElementById('tbodyCuestionario');
    const envelopeAsistencia1 = document.getElementById('envelopeAsistencia1');
    const envelopeAsistencia2 = document.getElementById('envelopeAsistencia2');
    tableContainer.innerHTML = createTableDataAsistencia(controlData);
    tbodyCuestionario.innerHTML = createTableDataCuestionario(cuestionarioData);
    envelopeAsistencia1.addEventListener('click', openMessageModal);
    envelopeAsistencia2.addEventListener('click', openMessageModal);
}
    
function openMessageModal() {
let modal = document.getElementById('messageModal');
if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'messageModal';
    modal.tabIndex = -1;
    modal.setAttribute('aria-labelledby', 'messageModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
        <div class="modal-dialog modalMensaje modal-dialog-centered"  >
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="text-center">El alumno se va 1 hora antes.</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    var modalInstance = new bootstrap.Modal(modal, {
        backdrop: 'static'
    });

    modal.addEventListener('hidden.bs.modal', function () {
        modal.remove();
    });
}      
var modalInstance = bootstrap.Modal.getInstance(modal);
modalInstance.show();
}

function createTableDataIncidencias(data) {
    return data.map(item => `
        <tr>
            <td class="text-center tdicono">${item.icono}</td>
            <td class="text-center tdfechaInicio">${item.fechaInicio}</td>
            <td class="text-center tdestado">${item.estado}</td>
            <td class="text-center tdarea">${item.area}</td>
            <td class="text-center tdincidencia">${item.incidencia}</td>
            <td class="text-center tdusuarioIncidencia">${item.usuarioIncidencia}</td>
            <td class="text-center tdareaIncidencia">${item.areaIncidencia}</td>
            <td class="text-center tdobservaciones">${item.observaciones}</td>
            <td class="text-center tdfechaResolucion">${item.fechaResolucion}</td>
            <td class="text-center tdusuarioResolucion">${item.usuarioResolucion}</td>
        </tr>
    `).join('');
}
    
function createTableDataToDo(data) {
    return data.map(item => `
        <tr>
            <td>${item.nota}</td>
        </tr>
    `).join('');
}

function cargarDatosToDoEIncidencias() {
    const tbodyToDo1 = document.getElementById('tbodyToDo1');
    const tbodyToDo2 = document.getElementById('tbodyToDo2');
    const tbodyToDo3 = document.getElementById('tbodyToDo3');
    const tbodyToDo4 = document.getElementById('tbodyToDo4');
    tbodyToDo1.innerHTML = createTableDataToDo(toDoData);
    tbodyToDo2.innerHTML = createTableDataToDo(toDoData2);
    tbodyToDo3.innerHTML = createTableDataToDo(toDoData3);
    tbodyToDo4.innerHTML = createTableDataToDo(toDoData4);

    document.getElementById('tbodyIncidencias').innerHTML = createTableDataIncidencias(incidenciasData);

}


document.body.addEventListener('click', function(event) {
    
    if ((event.target.classList.contains('blink') && event.target.textContent.trim() === 'Ahora' && !event.target.dataset.modalInit) || 
    event.target.id === 'panelIcon') {
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
                            <div id="tablaModalPanelIcon" class="mt-5"></div>
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

        modalInstance.show();
        setTimeout(() => {
            createDynamicTable();
        }, 100); 
    }
});
  
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


    const tableContainer = document.getElementById('tablaModalPanelIcon');
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
}

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
}

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


const signatureModalAsistencia = new bootstrap.Modal(document.getElementById('controlAsistenciaFirmado'));
signatureModalAsistencia.show();
}

function setupCustomSelects() {
    const selected = document.querySelector(".select-selected");
    const items = document.querySelector(".select-items");
    const options = document.querySelectorAll(".select-items div");
    const customSelect = document.querySelector('.custom-select');

    if (!selected || !items || !customSelect || options.length === 0) {
        console.log("One or more elements are missing, cannot set up custom selects and modals.");
        return;
    }
  
    selected.addEventListener("click", function(e) {
        items.classList.toggle("custom-select-hide");
        customSelect.classList.toggle("open");
        e.stopPropagation();
    });
  
    options.forEach(function(option) {
        option.addEventListener("click", function() {
           
            const imgSrc = option.querySelector('img').src;
            const imgAlt = option.querySelector('img').alt;
            const text = option.querySelector('span').textContent;
            const textColor = option.querySelector('span').style.color;
  
           
            selected.innerHTML = `
                <div class="circleTitle d-flex align-items-center justify-content-between">
                    <img src="${imgSrc}" alt="${imgAlt}" class="me-2">
                    <span style="color: ${textColor};">${text}</span>
                </div>
                <span class="chevron-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="#428BA9" stroke-linecap="round"></path>
                    </svg>
                </span>
            `;
  
            items.classList.add("custom-select-hide");
            customSelect.classList.remove("open");
        });
    });
  
    document.addEventListener("click", function(e) {
        if (!e.target.matches('.select-selected, .select-items div')) {
            items.classList.add("custom-select-hide");
            customSelect.classList.remove("open");
        }
    });
}

function setupModalTriggers() {
    const selectElement = document.getElementById('urlImparticion');
    const selectElement2 = document.getElementById('lugar');
    const modalElement = document.getElementById('urlModal');
    const modal = new bootstrap.Modal(modalElement);

    if (selectElement) {
        selectElement.addEventListener('click', function() {
            modal.show();
        });
    } else {
        console.error("El elemento #urlImparticion no fue encontrado.");
    }

    if (selectElement2) {
        selectElement2.addEventListener('click', function() {
            modal.show();
        });
    } else {
        console.error("El elemento #lugar no fue encontrado.");
    }
}
    

function setupHamburgerMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            const isOpen = hamburgerMenu.classList.contains('show');
            hamburgerMenu.classList.toggle('show', !isOpen);
        });
    }

    document.addEventListener('click', function(event) {
        if (hamburgerMenu && !hamburgerBtn.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            hamburgerMenu.classList.remove('show');
        }
    });
}


iniciarAplicacion();