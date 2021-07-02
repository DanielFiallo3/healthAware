from .db import db

class Allergies(db.Model):
    __tablename__ = 'allergies'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)

    userAllergiesJoin = db.relationship("User_Allergies", back_populates="allergy")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }