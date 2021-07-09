from app.models import db, User
{'38.957333, -92.391361', '38.957362, -92.392380', '38.957885, -92.392436', '38.956996, -92.392050', '38.956596, -92.391025', '38.957985, -92.391771'
'38.958410, -92.391159', '38.957787, -92.390923', '38.958496, -92.391803', '38.957916, -92.391900', '38.957628, -92.391165', '38.958260, -92.390645',
'38.957094, -92.392252', '38.956500, -92.390047', '38.955912, -92.392493'}


# {<option value="Fever">Fever</option>
# <option value="Chills">Chills</option>
# <option value="Skin_Rash">Skin Rash</option>
# <option value="Shortness_of_Breath">Shortness of Breath</option>
# <option value="Nauseated">Nauseated</option>
# <option value="Chronic_Pain">Chronic Pain</option>}

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        name='Demo User', 
        username='demoUser', 
        email='demo@aa.io', 
        password='password', 
        profilePic="https://cdn.fakercloud.com/avatars/ehsandiary_128.jpg", 
        vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
        geolocation="38.957333, -92.391361",
        additionalDetails="I am feeling a bit under the weather.",
        currentSymptoms="Chills" 
        )
    marnie = User(
        name='Marnie Russo', username='marnie', email='marnie@aa.io', password='password', geolocation="")
    bobbie = User(
        name='Bobbie Brown', username='bobbie', email='bobbie@aa.io', password='password', geolocation="")


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
