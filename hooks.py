# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "kalkulator"
app_title = "Kalkulator"
app_publisher = "formis"
app_description = "kalkulator cene"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/kalkulator/css/kalkulator.css"
# app_include_js = "/assets/kalkulator/js/kalkulator.js"

# include js, css files in header of web template
# web_include_css = "/assets/kalkulator/css/kalkulator.css"
# web_include_js = "/assets/kalkulator/js/kalkulator.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "kalkulator.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "kalkulator.install.before_install"
# after_install = "kalkulator.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "kalkulator.notifications.get_notification_config"

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
# 		"kalkulator.tasks.all"
# 	],
# 	"daily": [
# 		"kalkulator.tasks.daily"
# 	],
# 	"hourly": [
# 		"kalkulator.tasks.hourly"
# 	],
# 	"weekly": [
# 		"kalkulator.tasks.weekly"
# 	]
# 	"monthly": [
# 		"kalkulator.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "kalkulator.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "kalkulator.event.get_events"
# }

