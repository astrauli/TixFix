class CreateSubcategories < ActiveRecord::Migration[5.1]
  def change
    create_table :subcategories do |t|
      t.string :name, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
    add_index :subcategories, :category_id
  end
end