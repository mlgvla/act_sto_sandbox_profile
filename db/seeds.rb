# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(username: "mlgvla", password: "123")
User.create(username: "tlsbsn", password: "123")
User.create(username: "nbsgtr", password: "123")

Profile.create(first_name: "Monica", last_name: "Gerard", email: "monica@test.com", user_id: 1)
Profile.create(first_name: "Tom", last_name: "Sefcovic", email: "tom@test.com", user_id: 2)
Profile.create(first_name: "Nate", last_name: "Sefcovic", email: "nate@test.com", user_id: 3)

puts "Done Seeding!"