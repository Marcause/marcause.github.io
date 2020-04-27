function salario_final() {
    var b = document.getElementById("base");
    var base = parseInt(b.value)
    var por = document.getElementById("porcentaje");
    var porcentaje = parseInt(por.value)
    var h = document.getElementById("hijos");
    var hijos = parseInt(h.value)
    var pag = document.getElementById("pagas");
    var pagas = parseInt(pag.value)

    var b_max = base_max(base, hijos);

    document.getElementById("mensaje").innerHTML = get_text(porcentaje, b_max, base, pagas);

}




function base_max(base, hijos) {
    var base_real = base / 12;

    switch (hijos) {
        case 0:
            var b_max = 1098.09
            b_max = (base_real > b_max) ? b_max : base_real;
            break;
        case 1:
            var b_max = 1254.96
            b_max = (base_real > b_max) ? b_max : base_real;
            break;
        case 2:
            var b_max = 1411.83
            b_max = (base_real > b_max) ? b_max : base_real;
            break;
    }
    return b_max;
}

function get_text(percent, b_max, b, pagas) {
    var p = percent / 100;
    var cash_gob = b_max * p;
    var cash_empresa = b / pagas * (1 - p);
    var cash_total = cash_empresa + cash_gob;
    var msn1 = "En este caso te corresponden " + cash_total.toFixed(2) + "€<br>";
    var msn2 = msn1 + "De ellos:<br>" + cash_empresa.toFixed(2) + " € los paga tu empresa.<br>" + cash_gob.toFixed(2) + " € corresponden al estado";
    console.log(msn2);
    //return msn1
    return (percent == 100) ? msn1 : msn2;
}