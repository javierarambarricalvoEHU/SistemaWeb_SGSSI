$(document).ready( function () {
    $('#tablaHoroscopos').DataTable();
} );

function editEntry(id){
    window.location.href = '/modifyEntry.php?id=' + id;
}
