class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :title, null: false
      t.boolean :private, default: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :places, :owner_id
  end
end
