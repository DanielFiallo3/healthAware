from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

symptoms = ["None", "Cough", "Fever", "Chills", "Skin_Rash", "Shortness_of_Breath", "Nauseated", "Chronic_Pain"]
options = ["Non_threatning", "Mild", "Moderate", "Severe", "Life_threatening"]

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists])
    name = StringField('name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    profilePic = StringField('profilePic')
    vaccinationCard = StringField('vaccinationCard')
    additionalDetails = StringField('additionalDetails')
    currentSymptoms = SelectField('currentSymptoms', choices=symptoms)
    geolocation = StringField('geolocation')
    password = StringField('password', validators=[DataRequired()])
