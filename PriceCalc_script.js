//filtriraj cenik glede na izbran item
frappe.ui.form.on("PriceCalc", "onload", function(frm) {
    cur_frm.set_query("cenik", function() {
        return {
            "filters": {
                "item_name": frm.doc.item,

                
            }
        };
    });
});

//pridobi podatke preko linka
cur_frm.add_fetch("doc_1", "last_purchase_rate", "last_purchase_rate");
cur_frm.add_fetch("doc_1", "valuation_rate", "valuation_rate");
cur_frm.add_fetch("cenik", "price_list", "pricelist");

//izpisi ceno skupaj z enotami
frappe.ui.form.on("PriceCalc", "doc_1", function(frm) {
 cur_frm.set_value("price1", (frm.doc.price)+" za "+(frm.doc.item_uom));
 });

 //izracunaj povrsino//
 frappe.ui.form.on("PriceCalc", "x", function(frm) {
 cur_frm.set_value("area", (frm.doc.x*frm.doc.y)/10000);
    
 });
frappe.ui.form.on("PriceCalc", "y", function(frm) {
 cur_frm.set_value("area", (frm.doc.x*frm.doc.y)/10000);
 
 });
frappe.ui.form.on("PriceCalc", "refresh", function(frm) {
 cur_frm.set_value("area", (frm.doc.x*frm.doc.y)/10000);
  });
//izracunaj ceno materiala
frappe.ui.form.on("PriceCalc", "refresh", function(frm) {
 cur_frm.set_value("material_total", (frm.doc.area*frm.doc.price));

});
frappe.ui.form.on("PriceCalc", "man_price", function(frm) {
 cur_frm.set_value("material_total1", (frm.doc.area*frm.doc.man_price));

});
frappe.ui.form.on("PriceCalc", "refresh", function(frm) {
 cur_frm.set_value("material_total1", (frm.doc.area*frm.doc.man_price));

});
//izracunaj ceno dela
frappe.ui.form.on("PriceCalc", "refresh", function(frm) {
 cur_frm.set_value("work_total", (frm.doc.work_price*frm.doc.razrez));

 });
frappe.ui.form.on("PriceCalc", "refresh", function(frm) {
 cur_frm.set_value("total", (frm.doc.work_total+frm.doc.material_total));

 });
frappe.ui.form.on("PriceCalc", "man_price", function(frm) {
 cur_frm.set_value("total1", (frm.doc.work_total+frm.doc.material_total1));

 });
frappe.ui.form.on("PriceCalc", "refresh", function(frm) {
 cur_frm.set_value("total1", (frm.doc.work_total+frm.doc.material_total1));

 });

//gumb za osvezitev kalkulacije
frappe.ui.form.on("PriceCalc", "button", function(frm) {
frm.refresh();
});

frappe.ui.form.on("PriceCalc", "validate", function(frm) {
    if (frm.doc.work_total < 4) {
        msgprint("Vrednost naročila je manjša od 4€");
        validated = true;
    }
});
