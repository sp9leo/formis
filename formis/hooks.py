# -*- coding: utf-8 -*-
from __future__ import unicode_literals

app_name = "formis"
app_title = "Formis"
app_publisher = "formis"
app_description = "formis"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "formis"
app_version = "0.0.2"
app_license = "MIT"
fixtures = ["Custom Field", "Property Setter","Custom Script", "Print Format", "Workflow"]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/formis/css/formis.css"
# app_include_js = "/assets/formis/js/formis.js"

# include js, css files in header of web template
# web_include_css = "/assets/formis/css/formis.css"
# web_include_js = "/assets/formis/js/formis.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------
website_context = {
	"favicon": 	"/formis/public/favicon.png",
	"splash_image": "/formis/public/formis_logo.png"
}

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "formis.install.before_install"
# after_install = "formis.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

notification_config = "formis.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"formis.tasks.all"
# 	],
# 	"daily": [
# 		"formis.tasks.daily"
# 	],
# 	"hourly": [
# 		"formis.tasks.hourly"
# 	],
# 	"weekly": [
# 		"formis.tasks.weekly"
# 	]
# 	"monthly": [
# 		"formis.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "formis.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "formis.event.get_events"
# }
