class AddLastNameForUser < ActiveRecord::Migration[8.1]
  def change
    add_column :users, :last_name, :string 
  end
end
