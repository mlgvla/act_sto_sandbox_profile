class Profile < ApplicationRecord
  belongs_to :user
  has_one_attached :profile_pic

  def profile_pic_url
    Rails.application.routes.url_helpers.url_for(profile_pic) if profile_pic.attached?
  end
end
