from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        name='Demo User', 
        username='demoUser', 
        email='demo@aa.io', 
        password='password', 
        profilePic="https://cdn.fakercloud.com/avatars/ehsandiary_128.jpg", 
        vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
        additionalDetails="I am feeling a bit under the weather.",
        currentSymptoms="Chronic_Pain", 
        geolocation='38.957333, -92.391361'
        )

    marnie = User(
        name='Marnie Russo', 
        username='marnie', 
        email='marnie@aa.io', 
        password='password',
        profilePic= 'https://cdn.fakercloud.com/avatars/baluli_128.jpg',
        vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
        additionalDetails="Feeling Good and Healthy!",
        currentSymptoms="None", 
        geolocation="38.957362, -92.392380")

    bobbie = User(
        name='Bobbie Brown', 
        username='bobbie', 
        email='bobbie@aa.io', 
        password='password',
        profilePic='https://cdn.fakercloud.com/avatars/dshster_128.jpg', 
        vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
        additionalDetails="Depends on the weather! Some days are better than others.",
        currentSymptoms="Cough", 
        geolocation="38.957885, -92.392436")
    
    Tony = User(
        name='Tony Stark', 
        username='TStark', 
        email='TStark@abc.io', 
        password='password', 
        profilePic="https://cdn.fakercloud.com/avatars/bistrianiosip_128.jpg", 
        vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
        additionalDetails="I am feeling terribly sick.",
        currentSymptoms="Fever", 
        geolocation="38.956996, -92.392050"
        )

    Steve = User(
            name='Steve Rogers', 
            username='RogerRogers', 
            email='MrRogers@abc.io', 
            password='password', 
            profilePic="https://cdn.fakercloud.com/avatars/manekenthe_128.jpg", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="I feel like throwing up",
            currentSymptoms="Nauseated", 
            geolocation="38.956596, -92.391025"
            )

    Bruce = User(
            name='Bruce Banner', 
            username='MeanGreenMachine', 
            email='GreenMachine@abc.io', 
            password='password', 
            profilePic="https://cdn.fakercloud.com/avatars/reetajayendra_128.jpg", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="I have this itch that will not go away.",
            currentSymptoms="Skin_Rash", 
            geolocation="38.957985, -92.391771"
            )

    Peter = User(
            name='Peter Parker', 
            username='SpiderMAN', 
            email='FarFromeHome@abc.io', 
            password='password', 
            profilePic="https://img.ecartelera.com/noticias/56300/56351-m.jpg", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="I have this pain that will come and go.",
            currentSymptoms="Chronic_Pain", 
            geolocation="38.958410, -92.391159"
            )

    Sam = User(
            name='Sam Wilson', 
            username='FlyingCap', 
            email='CaptainFalcon@abc.io', 
            password='password', 
            profilePic="https://cdn.fakercloud.com/avatars/charliecwaite_128.jpg", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="I have a hard time breathing around black panther.",
            currentSymptoms="Shortness_of_Breath", 
            geolocation="38.957787, -92.390923"
            )

    Johnny = User(
            name='Johnny Five', 
            username='beepBoop', 
            email='johnnyFive@abc.io', 
            password='password', 
            profilePic="https://cdn.fakercloud.com/avatars/flexrs_128.jpg", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="Please beware around me of Peanuts!!! Even looking at them will kill me.",
            currentSymptoms="Shortness_of_Breath", 
            geolocation="38.958496, -92.391803"
            )

    Ananya = User(
            name='Ananya Hans', 
            username='ananyahans', 
            email='ananyahanss@gmail.com', 
            password='password', 
            profilePic="https://avatars.githubusercontent.com/u/77026617?v=4", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="Feeling good. -Nina Simone",
            currentSymptoms="None", 
            geolocation="38.957916, -92.391900"
            )
    
    Vinny = User(
            name='Vin Diesel', 
            username='vinnyd', 
            email='vinnyd@gmail.com', 
            password='password', 
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png/220px-Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="Please stay away I have a bad case of goat fungus",
            currentSymptoms="Skin_Rash", 
            geolocation="38.957628, -92.391165"
            )

    Fabio = User(
            name='Fernando Fabio', 
            username='loverboy', 
            email='loverboy@gmail.com', 
            password='password', 
            profilePic="https://cdn.fakercloud.com/avatars/darcystonge_128.jpg", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="My heart hurts. LoveSick",
            currentSymptoms="Chills", 
            geolocation="38.958260, -92.390645"
            )
    
    Mazapan = User(
            name='Mazapan Ramos', 
            username='woofwoof', 
            email='meowmeow@gmail.com', 
            password='password',
            profilePic='https://i.imgur.com/QKZuX5P.jpeg', 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="I scoot my butt on the carpet when it is itchy.",
            currentSymptoms="Skin_Rash", 
            geolocation="38.957094, -92.392252"
            )
    
    ariana = User(
        name='Ariana Cabrales', 
        username='ariana', 
        email='arianacabrales@aa.io', 
        password='password', 
        profilePic="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/164917720_3373711016063751_859646971772999532_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=D7izLirP2xYAX_oTPjW&tn=T8nlsAAqK3lvClG8&_nc_ht=scontent-ort2-2.xx&oh=47fd411cf36049574a5d8d3aab6594de&oe=60ECD0DB", 
        vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
        additionalDetails="I am constantly fatigued and experience anxiety.",
        currentSymptoms="none", 
        geolocation='38.956500, -92.390047'
        )

    isabel = User(
            name='Isabel Dominguez', 
            username='isabeld', 
            email='isabeldominugez@aa.io', 
            password='password', 
            profilePic="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/42738385_1673398402770895_8492024546130395136_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=DmZQANGUor0AX9UlNdd&_nc_ht=scontent-ort2-2.xx&oh=28cf84ec6aa3ebae65065dd154f53512&oe=60ED7E58", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="I would like to increase my energy levels and eat healthier.",
            currentSymptoms="None", 
            geolocation='38.955912, -92.392493'
            )

    mabel = User(
            name='Mabel Ramos', 
            username='mramos', 
            email='mramos@aa.io', 
            password='password', 
            profilePic="https://scontent-ort2-2.xx.fbcdn.net/v/t1.18169-9/10710975_10152890194098010_4416568848699376497_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=FRTKI5BRv7EAX8kHndq&_nc_ht=scontent-ort2-2.xx&oh=82f725ea8f003b6340505e5230f9e017&oe=60EBF8FD", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="I am feeling healthier than usual due to my increased fitness and activity levels.",
            currentSymptoms="None", 
            geolocation="38.95842649037838, -92.39124880209347"
            )

    audrey = User(
            name='Audrey Hepburn', 
            username='audhep', 
            email='audhep@aa.io', 
            password='password', 
            profilePic="https://i.pinimg.com/originals/9b/20/d6/9b20d6b2dd0b22443a28851123449869.jpg", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="I am experiencing pain in my chest when I breath and am having trouble sleeping due to these breathing issues.",
            currentSymptoms="shortness of breath", 
            geolocation="38.95825337772301, -92.39106909410592"
            )

    selena = User(
            name='Selena Gomez', 
            username='sellyg', 
            email='sellyg@aa.io', 
            password='password', 
            profilePic="https://i.pinimg.com/564x/9e/96/b1/9e96b1dee8721c791e43d2911297bb80.jpg", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="Feeling great!",
            currentSymptoms="None", 
            geolocation="38.958226263654346, -92.39161894690365"
            )

    

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(Tony)
    db.session.add(Steve)
    db.session.add(Bruce)
    db.session.add(Peter)
    db.session.add(Sam)
    db.session.add(Johnny)
    db.session.add(Ananya)
    db.session.add(Vinny)
    db.session.add(Fabio)
    db.session.add(Mazapan)
    db.session.add(ariana)
    db.session.add(isabel)
    db.session.add(mabel)
    db.session.add(audrey)
    db.session.add(selena)
  
    


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
