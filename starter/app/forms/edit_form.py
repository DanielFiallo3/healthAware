from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

symptoms = ["Cough", "Fever", "Chills", "Skin_Rash", "Shortness_of_Breath", "Nauseated", "Chronic_Pain"]
options = ["Non_threatning", "Mild", "Moderate", "Severe", "Life_threatening"]


class UpdateForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    profilePic = StringField('profilePic')
    vaccinationCard = StringField('vaccinationCard')
    additionalDetails = StringField('additionalDetails')
    currentSymptoms = SelectField('currentSymptoms', choices=symptoms)
    geolocation = StringField('geolocation')
    password = StringField('password', validators=[DataRequired()])
