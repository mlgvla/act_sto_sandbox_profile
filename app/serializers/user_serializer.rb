class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password

  has_one :profile
end
