FactoryGirl.define do
  factory :item do
    price Faker::Commerce.price
    name Faker::Commerce.product_name
    brand Faker::Company.name
    quantity Faker::Number.number(3)
    unit 'g'
    source Faker::Company.name
  end
end
