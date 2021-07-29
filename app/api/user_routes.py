from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db
from app.forms import UpdateForm


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/myself', methods = ['PUT'])
@login_required
def updateProfile():
    form = UpdateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form, '-------------------------------------------')
    if form.validate_on_submit():
        print(form, '-------------------------------------------2')

        if form.data['newPassword']:
            if not current_user.check_password(form.data['currentPassword']):
                return {error: "Incorrect Password"}

        allergies=request.json["newAllergies"]

        # print("_________________________________________________________________________",request.json)

        current_user.name=form.data['newName'],
        current_user.username = form.data['newUsername']
        current_user.email=form.data['newEmail'],
        if form.data['newProfilePic']:
            current_user.profilePic=form.data['newProfilePic']
        if form.data['newVaccinationCard']:
            current_user.vaccinationCard=form.data['newVaccinationCard']
        current_user.geolocation=form.data['newGeolocation']
        current_user.currentSymptoms=form.data['newCurrentSymptoms']
        current_user.additionalDetails=form.data['newAdditionalDetails']

        

        if request.json['newAllergies']:
            current_user.allergies = [(allergy, allergies[allergy]) for allergy in allergies]

        db.session.commit()
        return current_user.to_dict()
    return {}

@user_routes.route('/myself', methods = ['DELETE'])
@login_required
def delete_user():
    db.session.delete(current_user)
    db.session.commit()
    return {'message': 'success'}