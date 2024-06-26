let coun1=document.getElementById("currency-dropdown1");
let coun2=document.getElementById("currency-dropdown2");
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let amount = document.getElementById("input");
let final = document.getElementById("final");

let tValue1="USD";let tValue2="INR";

for(let abc in countryList)
{
    let newop1 = document.createElement("option"); 
    let newop2 = document.createElement("option"); 
    
    newop1.innerText = abc;
    newop1.value = countryList[abc];
    if(abc =="USD")
    {
        newop1.selected="selected";
    }
    coun1.append(newop1);


    newop2.innerText = abc; 
    newop2.value =  countryList[abc];
    if(abc =="INR")
    {
        newop2.selected="selected";
    }
    coun2.append(newop2);

}

function flag1()
{
    let selectedValue1=coun1.value;
    console.log(selectedValue1);
    img1.src=`https://flagsapi.com/${selectedValue1}/shiny/64.png`;
    tValue1 = coun1.options[coun1.selectedIndex].textContent;   
}

function flag2()
{
    let selectedValue2=coun2.value;
    console.log(selectedValue2);
    img2.src=`https://flagsapi.com/${selectedValue2}/shiny/64.png`;
    tValue2 = coun2.options[coun2.selectedIndex].textContent;
    
}



const exchangerate=async ()=>
{
    const url="https://api.currencyapi.com/v3/latest?apikey=cur_live_jGAuTH9Xe0gsCDlAl8Nly0bExLb14VBeET3pMbjZ"
    let response= await fetch(url);
    const  jsondata= await response.json();

    if (amount.value==="")
    {
        amount.value=0;
    }

    if (isNaN(amount.value)) {
        alert("Invalid input.");
        amount.value=0;

    }

    let value1=jsondata.data[tValue1].value;
    let value2=jsondata.data[tValue2].value;

    final.value= `${amount.value} ${tValue1}  =  ${((value2/value1)*amount.value)} ${tValue2}`;

}