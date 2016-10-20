cur_frm.cscript.custom_refresh = function(doc) {
    // use the __islocal value of doc, to check if the doc is saved or not
    cur_frm.set_df_property("potrdilo", "read_only", doc.status=="Closed");
}

frappe.ui.form.on("Delivery Note", "validate", function(frm) {
sales_orders = []
$.each(frm.doc.items, function(idx, row) {
inList(sales_orders, row.against_sales_order) ? "": sales_orders.push(row.against_sales_order)
});
frm.set_value("so_no", sales_orders.join(","))
});