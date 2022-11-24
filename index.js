
let fnameEl = document.getElementById("el-fname")
let incomeEl = document.getElementById("el-income")
let ageEl = document.getElementById("el-age")
let dependentsEl = document.getElementById("el-dependents")
let genderEl = document.getElementById("el-gender")
let maritalEl = document.getElementById("el-maritalStatus")
let rentEl = document.getElementById("el-rent")
let insuranceEl = document.getElementById("el-insurance")
let waterEl = document.getElementById("el-water")
let internetEl = document.getElementById("el-internet")
let fuelEl = document.getElementById("el-fuel")
let phoneEl = document.getElementById("el-phone")
let dstvEl = document.getElementById("el-dstv")
let gardenEl = document.getElementById("el-garden")
let sewerlineEl = document.getElementById("el-sewerline")
let maintenanceEl = document.getElementById("el-maintenance")


let infoHeadingEl = document.getElementById("infoHeading")
let expensesHeadingEl = document.getElementById("expenseHeading")
const inputBtn = document.getElementById("input-btn")

 inputBtn.addEventListener("click", function(e) {
    e.preventDefault();

    infoHeadingEl.textContent = "User Details"

     fnameEl.textContent = "Full Name: " + document.getElementById("fname").value
     incomeEl.textContent = "Income: " + "N" + document.getElementById("income").value
     ageEl.textContent = "Age: " + document.getElementById("age").value
     dependentsEl.textContent = "No. of Dependents: " +  document.getElementById("dependents").value
     genderEl.textContent = "Gender: " +  document.getElementById("gender").value
     maritalEl.textContent = "Marital Status: " +  document.getElementById("marital_status").value

     expensesHeadingEl.textContent = "Budget Categories"

     rentEl.textContent = "Rent Cost: " 
     +  "N" + document.getElementById("rent").value + " Percentage: " 
     +  ( document.getElementById("rent").value*100/document.getElementById("income").value).toFixed(2) + "%"

     insuranceEl = "Insurance Cost: " + "N" + document.getElementById("insurance").value  + " Percentage: " 
     +  ( document.getElementById("insurance").value*100/document.getElementById("income").value).toFixed(2)  + "%"

     waterEl.textContent = "Water Bill: " + "N" + document.getElementById("water").value + " Percentage: " 
     +  ( document.getElementById("water").value*100/document.getElementById("income").value).toFixed(2)  + "%"

     internetEl.textContent = "Internet Cost: " + "N" + document.getElementById("internet").value + " Percentage: " 
     +  ( document.getElementById("internet").value*100/document.getElementById("income").value).toFixed(2)  + "%"

     fuelEl.textContent = "Fuel Cost: " + "N" + document.getElementById("fuel").value + " Percentage: " 
     +  ( document.getElementById("fuel").value*100/document.getElementById("income").value).toFixed(2)  + "%"

     phoneEl.textContent = "Phone Cost: " + "N" + document.getElementById("phone").value + " Percentage: " 
     +  ( document.getElementById("phone").value*100/document.getElementById("income").value).toFixed(2)  + "%"

     dstvEl.textContent = "Dstv Cost: " +  "N" + document.getElementById("dstv").value + " Percentage: " 
     +  ( document.getElementById("dstv").value*100/document.getElementById("income").value).toFixed(2)  + "%"

     gardenEl.textContent = "Garden Cost: " +  "N" + document.getElementById("garden").value + " Percentage: " 
     +  ( document.getElementById("garden").value*100/document.getElementById("income").value).toFixed(2)  + "%"

     sewerlineEl.textContent = "SewerLine Cost: " + "N" + document.getElementById("sewerline").value + " Percentage: " 
     +  ( document.getElementById("sewerline").value*100/document.getElementById("income").value).toFixed(2)  + "%"

     maintenanceEl.textContent = "Maintenance Cost: " + "N" + document.getElementById("maintenance").value + " Percentage: " 
     +  ( document.getElementById("maintenance").value*100/document.getElementById("income").value).toFixed(2)  + "%"
   
  })


 




