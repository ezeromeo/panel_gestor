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
        if (event.target.id === 'formador') {
            const isGitHubPages = window.location.hostname.includes('github.io');
            window.location.href = isGitHubPages ? '/panel_gestor' : '/index.html';
        }
    });
    
}

document.addEventListener('DOMContentLoaded', function () {
    setupFormadorIconPopover();
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

]

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


document.querySelectorAll('.searchDiv input').forEach(input => {
    input.addEventListener('keyup', filterData);
});


renderTable(tableData);



document.addEventListener('DOMContentLoaded', function() {
    const estadisticasIcon = document.querySelector('.estadisticasIcon');
    const chatbotAyuda = document.querySelector('.chatbotAyuda');

    estadisticasIcon.addEventListener('click', function() {
        window.open('https://app.powerbi.com/view?r=eyJrIjoiMjI0YTZiNjQtYWM1MS00ZTZmLWFkMTktZmM5NmEwNWYxNjQ1IiwidCI6IjU1ZWJjNjI2LWMxODctNDEwNC1hZDIzLTZiYTI1M2E0NDMwYSIsImMiOjh9', '_blank');
    });

    chatbotAyuda.addEventListener('click', function() {
        window.open('https://ia-chat.dev.doubledot.es/iformalia%E2%80%8B', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function initOffcanvas() {
        const offcanvasRight = document.getElementById('offcanvasRight');
        if (!offcanvasRight) {
            console.error('El elemento offcanvasRight no fue encontrado en el documento.');
            return;
        }

        const notesIcon = document.querySelector('.notes-icon-second-row');
        if (!notesIcon) {
            console.error('El ícono notes no fue encontrado en el documento.');
            return;
        }

        
        const offcanvasInstance = new bootstrap.Offcanvas(offcanvasRight, {
            backdrop: false  
        });

        notesIcon.addEventListener('click', function() {
            offcanvasInstance.show();
        });
    }

    initOffcanvas(); 
});


document.addEventListener('DOMContentLoaded', function() {
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
});



