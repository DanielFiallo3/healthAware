from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from app.models import User_Allergies, Allergies


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
    

    userAllergiesJoin = db.relationship("User_Allergies", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @property
    def allergies(self):
        return [userAllergy.to_dict() for userAllergy in self.userAllergiesJoin]

    @allergies.setter
    def allergies(self, allergies):
        for allergy in self.userAllergiesJoin:
            db.session.delete(allergy)
        for allergy in allergies:
            db_allergy = Allergies.query.filter(Allergies.name == allergy[0]).one()
            new_User_Allergy = User_Allergies(user = self, allergy = db_allergy, severity = allergy[1])
            db.session.add(new_User_Allergy)
        db.session.commit()

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
            'geolocation': self.geolocation,
            'allergies': self.allergies
        }
