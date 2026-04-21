class CreateExercises < ActiveRecord::Migration[8.1]
  def change
    create_table :exercises do |t|
      t.date :date
      t.integer :duration
      t.string :exercise_type

      t.timestamps
    end
  end
end
