# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Place.destroy_all
Page.destroy_all

demoUser = User.create!(username: 'Demo', email: 'demo@email.com', password: 'password')
testUser = User.create!(username: 't', email: 't@t', password: 'password')

dessertPlace = Place.create!(title: "Desserts", owner_id: testUser.id, private: false)
nestedPlace = Place.create!(title: "Appliances", owner_id: testUser.id, private: false)
ancientPlace = Place.create!(title: "Ancients", owner_id: testUser.id, private: false)

dessertPage1 = Page.create!(title: Faker::Dessert.variety, place_id: dessertPlace.id)
dessertPage2 = Page.create!(title: Faker::Dessert.variety, place_id: dessertPlace.id)
dessertPage3 = Page.create!(title: Faker::Dessert.variety, place_id: dessertPlace.id)
dessertPage4 = Page.create!(title: Faker::Dessert.variety, place_id: dessertPlace.id)
dessertPage5 = Page.create!(title: Faker::Dessert.variety, place_id: dessertPlace.id)
dessertPage6 = Page.create!(title: Faker::Dessert.variety, place_id: dessertPlace.id)
dessertPage7 = Page.create!(title: Faker::Dessert.variety, place_id: dessertPlace.id)
dessertPage8 = Page.create!(title: Faker::Dessert.variety, place_id: dessertPlace.id)
dessertPage9 = Page.create!(title: Faker::Dessert.variety, place_id: dessertPlace.id)

nestedPage1 = Page.create!(title: Faker::Appliance.brand, place_id: nestedPlace.id)
nestedPage2 = Page.create!(title: Faker::Appliance.brand, place_id: nestedPlace.id)
nestedPage3 = Page.create!(title: Faker::Appliance.brand, place_id: nestedPlace.id)
nestedSubPage1 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedPage1.id)
nestedSubPage2 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedPage1.id)
nestedSubPage3 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedPage1.id)
nestedSubPage4 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedPage2.id)
nestedSubPage5 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedPage2.id)
nestedSubPage6 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedPage2.id)
nestedSubPage7 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedPage3.id)
nestedSubPage8 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedPage3.id)
nestedSubPage9 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedPage3.id)
nestedSubPage10 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedSubPage1.id)
nestedSubPage11 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedSubPage1.id)
nestedSubPage12 = Page.create!(title: Faker::Appliance.equipment, place_id: nestedPlace.id, parent_page_id: nestedSubPage11.id)

ancientPageGods = Page.create!(title: "Gods", place_id: ancientPlace.id)
ancientPagePrimordials = Page.create!(title: "Primordials", place_id: ancientPlace.id)
ancientPageTitans = Page.create!(title: "Titans", place_id: ancientPlace.id)
ancientPageHeroes = Page.create!(title: "Heroes", place_id: ancientPlace.id)
ancientPageGods1 = Page.create!(title: Faker::Ancient.god, place_id: ancientPlace.id, parent_page_id: ancientPageGods.id)
ancientPageGods2 = Page.create!(title: Faker::Ancient.god, place_id: ancientPlace.id, parent_page_id: ancientPageGods.id)
ancientPageGods3 = Page.create!(title: Faker::Ancient.god, place_id: ancientPlace.id, parent_page_id: ancientPageGods.id)
ancientPageGods4 = Page.create!(title: Faker::Ancient.god, place_id: ancientPlace.id, parent_page_id: ancientPageGods.id)
ancientPageGods5 = Page.create!(title: Faker::Ancient.god, place_id: ancientPlace.id, parent_page_id: ancientPageGods.id)
ancientPageGods6 = Page.create!(title: Faker::Ancient.god, place_id: ancientPlace.id, parent_page_id: ancientPageGods.id)
ancientPagePrimordials1 = Page.create!(title: Faker::Ancient.primordial, place_id: ancientPlace.id, parent_page_id: ancientPagePrimordials.id)
ancientPagePrimordials2 = Page.create!(title: Faker::Ancient.primordial, place_id: ancientPlace.id, parent_page_id: ancientPagePrimordials.id)
ancientPagePrimordials3 = Page.create!(title: Faker::Ancient.primordial, place_id: ancientPlace.id, parent_page_id: ancientPagePrimordials.id)
ancientPagePrimordials4 = Page.create!(title: Faker::Ancient.primordial, place_id: ancientPlace.id, parent_page_id: ancientPagePrimordials.id)
ancientPagePrimordials5 = Page.create!(title: Faker::Ancient.primordial, place_id: ancientPlace.id, parent_page_id: ancientPagePrimordials.id)
ancientPagePrimordials6 = Page.create!(title: Faker::Ancient.primordial, place_id: ancientPlace.id, parent_page_id: ancientPagePrimordials.id)
ancientPageTitans1 = Page.create!(title: Faker::Ancient.titan, place_id: ancientPlace.id, parent_page_id: ancientPageTitans.id)
ancientPageTitans2 = Page.create!(title: Faker::Ancient.titan, place_id: ancientPlace.id, parent_page_id: ancientPageTitans.id)
ancientPageTitans3 = Page.create!(title: Faker::Ancient.titan, place_id: ancientPlace.id, parent_page_id: ancientPageTitans.id)
ancientPageTitans4 = Page.create!(title: Faker::Ancient.titan, place_id: ancientPlace.id, parent_page_id: ancientPageTitans.id)
ancientPageTitans5 = Page.create!(title: Faker::Ancient.titan, place_id: ancientPlace.id, parent_page_id: ancientPageTitans.id)
ancientPageTitans6 = Page.create!(title: Faker::Ancient.titan, place_id: ancientPlace.id, parent_page_id: ancientPageTitans.id)
ancientPageHeroes1 = Page.create!(title: Faker::Ancient.hero, place_id: ancientPlace.id, parent_page_id: ancientPageHeroes.id)
ancientPageHeroes2 = Page.create!(title: Faker::Ancient.hero, place_id: ancientPlace.id, parent_page_id: ancientPageHeroes.id)
ancientPageHeroes3 = Page.create!(title: Faker::Ancient.hero, place_id: ancientPlace.id, parent_page_id: ancientPageHeroes.id)
ancientPageHeroes4 = Page.create!(title: Faker::Ancient.hero, place_id: ancientPlace.id, parent_page_id: ancientPageHeroes.id)
ancientPageHeroes5 = Page.create!(title: Faker::Ancient.hero, place_id: ancientPlace.id, parent_page_id: ancientPageHeroes.id)
ancientPageHeroes6 = Page.create!(title: Faker::Ancient.hero, place_id: ancientPlace.id, parent_page_id: ancientPageHeroes.id)
