module Api::V1
	class ClimasController < ApplicationController
	  def index
	  	@climas = Clima.order("created_at DESC")
		render json: @climas
	  end

	  def create
	  	@clima = Clima.create(clima_params)
	  	render json: @clima
	  end
	  def update
	  	@clima = Clima.find(params[:id])
	  	@idea.update_attributes(clima_params)
	  	render json: @clima
	  end

	  private

	  def clima_params
	  	params.require(:clima).permit(:city, :temperature, :status)
	  end
	end
end