document.getElementById("subit").addEventListener('click', function(){
    var money =document.getElementById("money").value
    var balance =document.getElementById("balance").value
    var gold =document.getElementById("gold").value
    var silver =document.getElementById("silver").value
    var assets =document.getElementById("assets").value
    var currency =document.getElementById("currency").value

    money= parseInt(money)
    balance= parseInt(balance)
    gold= parseInt(gold)
    silver= parseInt(silver)
    assets= parseInt(assets)

    var resultmoney = money/(100/2.5)
    var resulbalance = balance/(100/2.5)
    var resultgold = gold/(100/2.5)
    var resulsilver = silver/(100/2.5)
    var resultassets = assets/(100/2.5)
    var finalresult = resultmoney+resulbalance+resultgold+resulsilver+resultassets;

    if (money==0 && balance==0 && gold==0 && silver==0 && assets==0) {
        var result =document.getElementById("result").innerHTML="Please enter the amount of your wealth"
        
    }

    else{
    var result =document.getElementById("result").innerHTML="Your Total Zakat is="+ finalresult + currency
    }
})