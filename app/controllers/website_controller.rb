class WebsiteController < ApplicationController
  allow_unauthenticated_access only: [:main, :training, :extensions]

  def main
  end

  def training
  end

  def extensions
  end
end
