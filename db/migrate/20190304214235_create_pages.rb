class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :title, null: false
      t.text :body
      t.boolean :private, default: false
      t.integer :place_id, null: false
      t.integer :parent_page_id

      t.timestamps
    end
    add_index :pages, :place_id
    add_index :pages, :parent_page_id
  end
end
