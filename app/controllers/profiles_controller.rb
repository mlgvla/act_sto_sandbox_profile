class ProfilesController < ApplicationController

    def index
        profiles = Profile.all
        render json: profiles
    end

    def create
        profile = Profile.create(profile_params)
        render json: profile
    end

    def show
        profile = Profile.find(params[:id])
        render json: profile
    end

    def update
        profile = Profile.find(params[:id])
        profile.update(profile_params)
        render json: profile, serializer: ProfileWithoutPicSerializer
    end 

    def update_profile_pic
        profile = Profile.find(params[:id])
        profile.update(profile_pic: params[:profile_pic])
        render json: profile
    end

    private

    def profile_params
        params.permit(:first_name, :last_name, :email, :user_id)
    end
end
