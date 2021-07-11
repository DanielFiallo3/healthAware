from app.models import db, User_Allergies, User, Allergies

def seed_user_allergies():
  demo_user = User.query.get(1)
  demo_user_allergy = Allergies.query.get(5)
  demoAllergy = User_Allergies(
    user = demo_user,
    allergy = demo_user_allergy,
    severity = 'Mild'
  )

  marnie_user = User.query.get(2)
  marnie_user_allergy = Allergies.query.get(3)
  marnieAllergy = User_Allergies(
    user = marnie_user,
    allergy = marnie_user_allergy,
    severity = 'Non_threatening'
  )

  bobbie_user = User.query.get(3)
  bobbie_user_allergy = Allergies.query.get(6)
  bobbieAllergy = User_Allergies(
    user = bobbie_user,
    allergy = bobbie_user_allergy,
    severity = 'Moderate'
  )

  tStark_user = User.query.get(4)
  tStark_user_allergy = Allergies.query.get(3)
  tStarkAllergy = User_Allergies(
    user = tStark_user,
    allergy = tStark_user_allergy,
    severity = 'Severe'
  )

  roger_user = User.query.get(5)
  roger_user_allergy = Allergies.query.get(4)
  rogerAllergy = User_Allergies(
    user = roger_user,
    allergy = roger_user_allergy,
    severity = 'Life_threatening'
  )

  bruce_user = User.query.get(6)
  bruce_user_allergy = Allergies.query.get(7)
  bruceAllergy = User_Allergies(
    user = bruce_user,
    allergy = bruce_user_allergy,
    severity = 'Moderate'
  )

  peter_user = User.query.get(7)
  peter_user_allergy = Allergies.query.get(7)
  peterAllergy = User_Allergies(
    user = peter_user,
    allergy = peter_user_allergy,
    severity = 'Life_threatening'
  )

  sam_user = User.query.get(8)
  sam_user_allergy = Allergies.query.get(2)
  samAllergy = User_Allergies(
    user = sam_user,
    allergy = sam_user_allergy,
    severity = 'Severe'
  )

  johnny_user = User.query.get(9)
  johnny_user_allergy = Allergies.query.get(1)
  johnnyAllergy = User_Allergies(
    user = johnny_user,
    allergy = johnny_user_allergy,
    severity = 'Life_threatening'
  )

  ananya_user = User.query.get(10)
  ananya_user_allergy = Allergies.query.get(7)
  ananyaAllergy = User_Allergies(
    user = ananya_user,
    allergy = ananya_user_allergy,
    severity = 'Non_threatening'
  )

  vinny_user = User.query.get(11)
  vinny_user_allergy = Allergies.query.get(7)
  vinnyAllergy = User_Allergies(
    user = vinny_user,
    allergy = vinny_user_allergy,
    severity = 'Moderate'
  )

  fabio_user = User.query.get(12)
  fabio_user_allergy = Allergies.query.get(4)
  fabioAllergy = User_Allergies(
    user = fabio_user,
    allergy = fabio_user_allergy,
    severity = 'Mild'
  )

  woof_user = User.query.get(13)
  woof_user_allergy = Allergies.query.get(2)
  woofAllergy = User_Allergies(
    user = woof_user,
    allergy = woof_user_allergy,
    severity = 'Life_threatening'
  )

  ariana_user = User.query.get(14)
  ariana_user_allergy = Allergies.query.get(7)
  arianaAllergy = User_Allergies(
    user = ariana_user,
    allergy = ariana_user_allergy,
    severity = 'Non_threatening'
  )

  isabel_user = User.query.get(15)
  isabel_user_allergy = Allergies.query.get(1)
  isabelAllergy = User_Allergies(
    user = isabel_user,
    allergy = isabel_user_allergy,
    severity = 'Mild'
  )

  mabel_user = User.query.get(16)
  mabel_user_allergy = Allergies.query.get(5)
  mabelAllergy = User_Allergies(
    user = mabel_user,
    allergy = mabel_user_allergy,
    severity = 'Moderate'
  )

  audrey_user = User.query.get(17)
  audrey_user_allergy = Allergies.query.get(1)
  audreyAllergy = User_Allergies(
    user = audrey_user,
    allergy = audrey_user_allergy,
    severity = 'Life_threatening'
  )

  selly_user = User.query.get(18)
  selly_user_allergy = Allergies.query.get(7)
  sellyAllergy = User_Allergies(
    user = selly_user,
    allergy = selly_user_allergy,
    severity = 'Non_threatening'
  )

  db.session.add(demoAllergy)
  db.session.add(marnieAllergy)
  db.session.add(bobbieAllergy)
  db.session.add(tStarkAllergy)
  db.session.add(rogerAllergy)
  db.session.add(bruceAllergy)
  db.session.add(peterAllergy)
  db.session.add(samAllergy)
  db.session.add(johnnyAllergy)
  db.session.add(ananyaAllergy)
  db.session.add(vinnyAllergy)
  db.session.add(fabioAllergy)
  db.session.add(woofAllergy)
  db.session.add(arianaAllergy)
  db.session.add(isabelAllergy)
  db.session.add(mabel_user)
  db.session.add(audreyAllergy)
  db.session.add(sellyAllergy)




  db.session.commit()


def undo_user_allergies():
  db.session.execute('TRUNCATE "userAllergiesJoin" RESTART IDENTITY CASCADE')
  db.session.commit()