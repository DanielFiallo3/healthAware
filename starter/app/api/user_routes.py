from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

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


@user_routes.route('/<int:id>', methods = ['PATCH'])
@login_required
def updateProfile():
    form = UpdateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.get(current_user.id)
        user.newName=form.data['newName'],
        user.username = form.data['newUsername']
        user.newEmail=form.data['email'],
        user.newProfilePic=form.data['newProfilePic'],
        user.newVaccinationCard=form.data['newVaccinationCard']
        user.newGeolocation=form.data['newGeolocation']
        user.newAllergies=form.data['newAllergies']
        user.newSeverity=form.data['newSeverity']

        db.session.commit()
        return user.to_dict()

@user_routes.route('/<int:id>', methods = ['DELETE'])
@login_required
def delete_user(id):
    user = User.query.get(current_user.id)
    db.session.delete(user)
    db.session.commit()
    return {'message': 'success'}