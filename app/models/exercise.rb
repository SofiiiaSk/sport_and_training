class Exercise < ApplicationRecord
  DURATIONS = [15, 30, 45, 60, 90, 120]
  TYPES = [
    "Yoga",
"Pilates",
"Stretching",
"Strength exercises",
"Cardio"
  ]

  validates :duration, inclusion: { in: DURATIONS }
  validates :exercise_type, inclusion: { in: TYPES }
  validates :duration, numericality: { greater_than: 0 }

  def start_time
    self.date
  end

  def name
    "#{exercise_type} - #{duration} min"
  end
end