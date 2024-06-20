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


document.addEventListener('DOMContentLoaded', function () {
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
});


document.addEventListener('DOMContentLoaded', function() {
    const urlSelect = document.getElementById('urlSelect');
    const urlModal = new bootstrap.Modal(document.getElementById('urlModal'), {
        keyboard: true
    });

    urlSelect.addEventListener('click', function() {
        urlModal.show();
    });
});

// Modal Url

document.addEventListener('DOMContentLoaded', function() {
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
});


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


document.addEventListener('DOMContentLoaded', function() {
    const navElement = document.querySelector('.nav-wrapper');
    setupDragToScroll(navElement);
});

