from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

symptoms = ["None", "Cough", "Fever", "Chills", "Skin_Rash", "Shortness_of_Breath", "Nauseated", "Chronic_Pain"]
options = ["Non_threatning", "Mild", "Moderate", "Severe", "Life_threatening"]


class UpdateForm(FlaskForm):
    newUsername = StringField('newUsername', validators=[DataRequired()])
    newName = StringField('newName', validators=[DataRequired()])
    newEmail = StringField('newEmail', validators=[DataRequired()])
    newProfilePic = StringField('newProfilePic')
    newVaccinationCard = StringField('newVaccinationCard')
    newAdditionalDetails = StringField('newAdditionalDetails')
    newCurrentSymptoms = SelectField('newCurrentSymptoms', choices=symptoms)
    newGeolocation = StringField('newGeolocation')
    newPassword = StringField('newPassword')
    currentPassword = StringField('currentPassword')

