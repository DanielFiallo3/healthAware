from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), nullable=False, unique=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profilePic = db.Column(db.String(255), nullable=True)
    vaccinationCard = db.Column(db.String(255), nullable=True)
    additionalDetails = db.Column(db.String(255), nullable=True)
    currentSymptoms = db.Column(db.String(255), nullable=True)
    geolocation = db.Column(db.String(255), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'name': self.name,
            'email': self.email,
            'profilePic': self.profilePic,
            'vaccinationCard': self.vaccinationCard,
            'additionalDetails': self.additionalDetails,
            'currentSymptoms': self.currentSymptoms,
            'geolocation': self.geolocation
        }
