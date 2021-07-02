from app.models import db, Allergies


# Adds a demo user, you can add other users here if you want
def seed_allergies():
    allergies = ["Peanuts", "Animal Dander", "Gluten", "Shellfish", "Dairy", "Pollen/Dust/Mold", "Other"]
    listAlelrgies = [Allergies(name = allergy) for allergy in allergies]

    for each in listAlelrgies:
        db.session.add(each)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_allergies():
    db.session.execute('TRUNCATE allergies RESTART IDENTITY CASCADE;')
    db.session.commit()
