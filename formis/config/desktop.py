# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		"Formis": {
			"color": "grey",
			"icon": "octicon octicon-home",
			"type": "module",
			"label": _("Formis")
		},
		"Delovni nalog": {
			"color": "#BCEF8E",
			"icon": "octicon-alert",
			"icon": "octicon octicon-alert",
			"label": _("Delovni nalog"),
			"link": "List/Delovni nalog",
			"doctype": "Delovni nalog",
			"type": "list"
		}
	}
