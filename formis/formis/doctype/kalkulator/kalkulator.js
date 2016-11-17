// Copyright (c) 2016, formis and contributors
// For license information, please see license.txt

frappe.ui.form.on('Kalkulator', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on("Kalkulator", "len", function(frm) {
cur_frm.set_value("area", (frm.doc.len* frm.doc.wid));
 });
 
 frappe.ui.form.on("Kalkulator", "wid", function(frm) {
 cur_frm.set_value("area", (frm.doc.len* frm.doc.wid))       
 });
 
 //izracunaj povrsino//
 frappe.ui.form.on("Kalkulator", "area", function(frm) {
 cur_frm.set_value("mm2", (frm.doc.area*100));
 cur_frm.set_value("m2", (frm.doc.area/10000));
 if (frm.doc.area > 25) {cur_frm.set_value("areaovermin", (frm.doc.area-25))}else {frm.set_value("areaovermin",00)}
     
 });
 
 //izracunaj znesek glede na povrsino//
 frappe.ui.form.on("Kalkulator", "refresh", function(frm) {
 var d= (frm.doc.variable_price*frm.doc.areaovermin);
if (frm.doc.area <= 25 && frm.doc.qty == 1){ frm.set_value("value", frm.doc.current_price); } 
 else {frm.set_value("value",d+frm.doc.current_price);}
cur_frm.set_value("valueovermin",d);
 });
 
 //izracunaj ceno glede na kolicino//
 frappe.ui.form.on("Kalkulator", "qty", function(frm) {
 var qty= frm.doc.qty;   
 if (qty>1 && qty<= 10) {frm.set_value("current_price",frm.doc.p1);}
 else if (qty>10 && qty<=25) {frm.set_value("current_price",frm.doc.p2);}
 else if (qty>25 && qty<=50) {frm.set_value("current_price",frm.doc.p3);}
 else if (qty>50 && qty<=99) {frm.set_value("current_price",frm.doc.p4);}
 else if (qty>99) {msgprint("cena po dogovoru");}
 else {frm.set_value("current_price",frm.doc.fixed_price);}
 frm.set_value("total_value",frm.doc.value*frm.doc.qty);
frm.refresh();
 });

frappe.ui.form.on("Kalkulator", "refresh", function(frm) {
  frm.set_value("total_value",frm.doc.value*frm.doc.qty);
 });
 
 frappe.ui.form.on("Kalkulator", "refresh", function(frm) {
    frm.add_custom_button(__("Do Something"), function() {
      //msgprint("hello");
frm.refresh();
 });
	});