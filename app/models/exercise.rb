class Exercise < ApplicationRecord
  DURATIONS = [15, 30, 45, 60, 90, 120]
  TYPES = [
    "yoga",
    "pilates",
    "strength"
  ]

  validates :duration, inclusion: { in: DURATIONS }
  validates :exercise_type, inclusion: { in: TYPES }

  def start_time
    self.date
  end

  def name
    "#{exercise_type} - #{duration} min"
  end
end