@frappe.whitelist()
def testnafunkcija():
frappe.call({
					"method": "frappe.client.set_value",
					"args": {
						//replace "Target DocType" with the actual target doctype
						"doctype": "Delovni nalog",
						//replace target_doctype_link with a link to the document to be changed
						"name": frm.doc.Delovni_nalog,
						"fieldname": {
							//You can update as many fields as you want.  
							"stranka": frm.doc.customer,
							"datum": frm.doc.date,
							"target_field_3": frm.doc.source_field_3,
							"target_field_4": frm.doc.source_field_4,
							"target_field_5": frm.doc.source_field_5  //Make sure that you do not put a comma over the last value
						},
					}
				});
	
