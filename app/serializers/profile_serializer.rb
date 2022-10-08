class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email,:user_id, :profile_pic_url
  
  # has_one :user
end
