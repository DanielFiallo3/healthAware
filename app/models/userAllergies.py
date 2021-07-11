from .db import db

class User_Allergies(db.Model):
    __tablename__ = "userAllergiesJoin"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    allergiesId = db.Column(db.Integer, db.ForeignKey('allergies.id'))

    severity = db.Column(db.String)
    
    user = db.relationship("User", back_populates="userAllergiesJoin")
    allergy = db.relationship("Allergies", back_populates="userAllergiesJoin")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'allergiesId': self.allergiesId,
            'severity': self.severity,
            'name': self.allergy.name        
            }
