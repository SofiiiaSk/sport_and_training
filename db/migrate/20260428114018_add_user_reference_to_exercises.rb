class AddUserReferenceToExercises < ActiveRecord::Migration[8.1]
  def change
    Exercise.destroy_all
    add_reference :exercises, :user, foreign_key: true, null: false
  end
end
