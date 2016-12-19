class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.decimal :price, precision: 8, scale: 2
      t.text :name
      t.text :brand
      t.decimal :quantity, precision: 8, scale: 2
      t.string :unit
      t.string :source

      t.timestamps
    end
  end
end
