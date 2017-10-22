from __future__ import unicode_literals

def get_notification_config():
	return { "for_doctype":
		{
			"Delovni Nalog": {"Workflow_State": "V pripravi"}
		},
		 "for_doctype":
		{
			"Delovni Nalog Interni": {"workflow_state": "V pripravi"}
		},
			
	}