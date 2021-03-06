frappe.ui.form.on("Sales Order", "onload", function(frm) {
frm.get_field('items').grid.editable_fields = [
			{fieldname: 'item_code', columns: 2},
			{fieldname: 'item_name', columns: 2},
			{fieldname: 'qty', columns: 2},
			{fieldname: 'warehouse', columns: 2},
                        {fieldname: 'schedule_date', columns: 2},
		];
frappe.form.link_formatters['Item'] = function(value, doc) {
		return value + ': ' + doc.item_name;
	}
});
