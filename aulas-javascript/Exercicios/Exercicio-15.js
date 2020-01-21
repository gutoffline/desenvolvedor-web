let limite, multaPorKilo, P, E, M;
limite = 50;
multaPorKilo = 4;

P = prompt("Quantos Kilos de peixe você pescou?");
E = P - limite;

if(E > 0){
    M = E * multaPorKilo;
    document.write("KG Total: " + P);
    document.write("<br>KG Excesso:" + E);
    document.write("<br>Multa: R$ " + M);
}else{
    document.write("KG Total: " + E);
    document.write("<br>Excesso: 0");
    document.write("<br>Multa: R$ 0");
}
