# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Place.destroy_all

demoUser = User.create!(username: 'Demo', email: 'demo@email.com', password: 'password')
testUser = User.create!(username: 't', email: 't@t.com', password: 'password')
user1 = User.create!(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user2 = User.create!(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user3 = User.create!(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user4 = User.create!(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user5 = User.create!(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user6 = User.create!(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')

privatePlace = Place.create!(title: Faker::Dessert.variety, owner_id: testUser.id, private: true)
place1 = Place.create!(title: Faker::Dessert.variety, owner_id: testUser.id)
place2 = Place.create!(title: Faker::Dessert.variety, owner_id: testUser.id)
place3 = Place.create!(title: Faker::Dessert.variety, owner_id: testUser.id)
place4 = Place.create!(title: Faker::Dessert.variety, owner_id: testUser.id)
place5 = Place.create!(title: Faker::Dessert.variety, owner_id: testUser.id)
place6 = Place.create!(title: Faker::Dessert.variety, owner_id: testUser.id)