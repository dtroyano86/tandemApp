class Api::HighScoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    high_scores = HighScore.all
    render json: high_scores
  end

  def create
    high_score = HighScore.new(high_score_params)
    if high_score.save!
      render json: high_score
    else
      render json: high_score.errors
    end
  end

  def destroy
    high_score = HighScore.find(params[:id])
    if high_score.destroy!
      render json: high_score
    else
      render json: high_score.errors
    end
  end

  private

  def high_score_params
    params.permit(:name, :score)
  end
end
