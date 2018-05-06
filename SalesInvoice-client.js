cur_frm.cscript.custom_validate = function(doc) {
    if (doc.naming_series == "DEL1-MB-.###")  {
        msgprint("Naèin plaèila je bil spremenjen v GOTOVINA!");
cur_frm.set_value("mode_of_payment","Gotovina");
        validated = true;
    }
};
//izpisi sales_order in jih grupiraj, da se ne ponavljajo
frappe.ui.form.on("Sales Invoice", "onload", function(frm) {
sales_orders = []
$.each(frm.doc.items, function(idx, row) {
inList(sales_orders, row.sales_order) ? "": sales_orders.push(row.sales_order)
});
frm.set_value("sales_order", sales_orders.join(","))
});

frappe.ui.form.on("Sales Invoice", "onload", function(frm) {
delivery_notes = []
$.each(frm.doc.items, function(idx, row) {
inList(delivery_notes, row.delivery_note) ? "": delivery_notes.push(row.delivery_note)
});
frm.set_value("delivery_note", delivery_notes.join(","))
});
