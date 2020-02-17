function TrocaBanner(banner){
    console.log(banner);
    document.querySelector('#banner1').className="invisivel";
    document.querySelector('#banner2').className="invisivel";
    document.querySelector('#banner3').className="invisivel";
    document.querySelector('#'+ banner).className="visivel";
}