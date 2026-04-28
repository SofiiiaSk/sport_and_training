class Exercise < ApplicationRecord
  DURATIONS = [15, 30, 45, 60, 90, 120]
  TYPES = [
    "Йога",
    "Пілатес",
    "Стретчинг",
    "Силові вправи",
    "Кардіо тренування"
  ]

  # Associations
  belongs_to :user

  # Validations
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