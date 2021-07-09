from app.models import db, User
{, '', '', '', '', ''
'', '', '', '', '', '',
'', '38.956500, -92.390047', '38.955912, -92.392493'}


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
        profilePic="https://static.wikia.nocookie.net/marvelcentral/images/9/97/Tony-Stark.jpg/revision/latest/scale-to-width-down/480?cb=20130429010603", 
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
            profilePic="https://static.wikia.nocookie.net/marvel-cinematic/images/3/32/Steve_Rogers_2.jpg/revision/latest/scale-to-width-down/400?cb=20131025030358", 
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
            profilePic="https://static.wikia.nocookie.net/mcu-movies/images/f/ff/BruceBanner.png/revision/latest?cb=20171209193813", 
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
            profilePic="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Anthony_Mackie_as_Captain_America.jpeg/235px-Anthony_Mackie_as_Captain_America.jpeg", 
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
            additionalDetails="Please beware around me of Peanuts!!!",
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
            additionalDetails="Please beware around me of Peanuts!!! Even looking at them will kill me.",
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
            profilePic="https://gm1.ggpht.com/yIsCwe8M-tUfMvnFmFrCP0QbBtWgUS15LmarXvW63TZDiI4zAQbUSyeec1b8dzkCvFxqaOQFTVnaDZk6ajkMRkzsCgcMvxdNTe73MpE8sxxV8ze92DWMxIeHUjNbJWNmvLEKbomaMdVaQLvaCZ-xHrCW8h6T0bs3Moa7gBRNF5jJtBSaf1FYjbGg32Kn0OYEzYbMguo82tZwiCxfGHzkUQ_PcWTfHm1cL4FGH0sVfTzH1KT8ANeC0STMx6vtCEt8hRl5kVvXGGEq5KI9M8jKbqo7pgsYggypr6XbspXuTtHxHYUtGeXvjl7JlKhmY47iODH9KJu2uFG8MODvWr8Q2a-hAW07W4V1k5sQkKCoVO0qWKhkgf3cfbpsNCuCKX8cQDdjruD57FEDr9xNdFueuRvpOaFvL3Zg-1keK5AuNw9VsuBolFItb_IWJMsruroUAuNVmHxxHOxzNazGYoQKuLqVU9WjiXirh7dUg6qD-VuBYRizb30dIVKqQEH17rcO4Aydn-T6W5q-hz3KD_U1c5YwDnabVkigxuGj-dAI7ZqQlN8Ui5S6kG0mOnHNL5RxaDcVlJIbsAdT-yq2NPqwEL7Hw1bZ43Ox2T9bZnXEU7bVylKm5R-o_1fIJyUTo6q1dt3YLuHccfUXKbMmx8enYVFCJUC1VsZRjQPGvTOqlnpjTDVH-BsIq-Oi6jBltU6OUiG8QPsovkGwhG8tS5aFI9a2h5ZX6k4HloUEONJ5jFEzzjx0M0P-nw2t6SJUC328aaY=s0-l75-ft-l75-ft", 
            vaccinationCard="https://bloximages.chicago2.vip.townnews.com/greenevillesun.com/content/tncms/assets/v3/editorial/9/f5/9f58c8e7-41c2-58d7-99a8-90bddda28675/60cc8afe6a1e0.image.png",
            additionalDetails="I scoot my butt on the carpet when it is itchy.",
            currentSymptoms="Skin_Rash", 
            geolocation="38.957094, -92.392252"
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
  
    


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
