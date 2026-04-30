class WebsiteController < ApplicationController
  allow_unauthenticated_access only: [:main, :training, :extensions]

  def main
    start_date = params.fetch(:start_date, Date.today).to_date
    @exercises = if authenticated?
      Exercise.where(date: start_date.beginning_of_month.beginning_of_week..start_date.end_of_month.end_of_week)
              .where(user: Current.user)
    else
      Exercise.none
    end
  end

  def training
  end

  def extensions
  end

  def program
  end
end
