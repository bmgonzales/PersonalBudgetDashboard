function doGet() {
  return HtmlService.createHtmlOutputFromFile('form_index')
}

function uploadDataToDrive(year, month, bpay, apay1, apay2, atips, aoth, acom, inc_other, mortgage_ca, mortgage_cr, lawn_ca, lawn_cr, student_ca, student_cr, r2go_ca, r2go_cr, internet_ca, internet_cr, cell_ca, cell_cr, netflix_ca, netflix_cr, sling_ca, sling_cr, amazon_ca, amazon_cr, home_ins_ca, home_ins_cr, home_other_ca, home_other_cr, debt_other_ca, debt_other_cr, electricity_ca, electricity_cr, water_ca, water_cr, garbage_ca, garbage_cr, car_ins_ca, car_ins_cr, gas_ca, gas_cr, car_main_ca, car_main_cr, uber_ca, uber_cr, bus_ca, bus_cr, groceries_ca, groceries_cr, restaurant_ca, restaurant_cr, meds_ca, meds_cr, doct_ca, doct_cr, dent_ca, dent_cr, eyes_ca, eyes_cr, med_other_ca, med_other_cr, ent_other_ca, ent_other_cr, clothes_ca, clothes_cr, hair_ca, hair_cr, misc_other_ca, misc_other_cr) {
    // save income sources
    var sheet1 = "sheet ID";
    var inc_sheet= SpreadsheetApp.openById(sheet1).getSheetByName("Income");

    var income = [[year, month, "Spouse 1", "Paycheck", bpay], [year, month, "Spouse 2", "Paycheck", apay1], [year, month, "Spouse 2", "Paycheck", apay2], [year, month, "Spouse 2", "Cash", atips], [year, month, "Spouse 2", "Paycheck", aoth], [year, month, "Spouse 2", "Comedy", acom], [year, month, "Spouse 2", "Other", inc_other]];
  
    for (i = 0; i < 8; i++) {
      if (income[i][4] > 0) {
        inc_sheet.appendRow(income[i]);
      }
    }
 
    // save expenses
    var sheet2 = "sheet ID"'
    var exp_sheet= SpreadsheetApp.openById("sheet2").getSheetByName("Expenses");
    
    var expenses = [[year, month, "Home", mortgage_ca, mortgage_cr], [year, month, "Home", lawn_ca, lawn_cr], [year, month, "Debts", student_ca, student_cr], [year, month, "Debts", r2go_ca, r2go_cr], [year, month, "Utilities", internet_ca, internet_cr], [year, month, "Utilities", cell_ca, cell_cr], [year, month, "Entertainment", netflix_ca, netflix_cr], [year, month, "Entertainment", sling_ca, sling_cr], [year, month, "Entertainment", amazon_ca, amazon_cr], [year, month, "Home", home_ins_ca, home_ins_cr], [year, month, "Home", home_other_ca, home_other_cr], [year, month, "Debts", ccpay_ca, ccpay_cr], [year, month, "Utilties", electricity_ca, electricity_cr], [year, month, "Utilities", water_ca, water_cr], [year, month, "Utilities", garbage_ca, garbage_cr], [year, month, "Transportation", car_ins_ca, car_ins_cr], [year, month, "Transportation", gas_ca, gas_cr], [year, month, "Transportation", car_main_ca, car_main_cr], [year, month, "Transportation", uber_ca, uber_cr], [year, month, "Transportation", bus_ca, bus_cr], [year, month, "Food", groceries_ca, groceries_cr], [year, month, "Food", restaurant_ca, restaurant_cr], [year, month, "Medical", meds_ca, meds_cr], [year, month, "Medical", doct_ca, doct_cr], [year, month, "Medical", dent_ca, dent_cr], [year, month, "Medical", eyes_ca, eyes_cr], [year, month, "Medical", med_other_ca, med_other_cr], [year, month, "Entertainment", ent_other_ca, ent_other_cr], [year, month, "Clothes", clothes_ca, clothes_cr], [year, month, "Misc", hair_ca, hair_cr], [year, month, "Misc", misc_other_ca, misc_other_cr]];
   
    for (i = 0; i < 33; i++) {
      if (expenses[i][3] > 0 || expenses[i][4] > 0) {
        exp_sheet.appendRow(expenses[i]);
      }
    }
  
}
