class CareerController < ApplicationController
  def index
    careers = [
      {
        year: "2000年",
        title: "xxxプロジェクトに従事"
      },
      {
        year: "2001年",
        title: "xxxプロジェクトに従事"
      },
      {
        year: "2002年",
        title: "テストプロジェクトに従事"
      },
      {
        year: "2003年",
        title: "xxxプロジェクトに従事"
      },
      {
        year: "2004年",
        title: "ECサイトの設計・開発"
      },
      {
        year: "2005年",
        title: "ECサイトの設計・開発"
      },
      {
        year: "2006年",
        title: "施設予約プロジェクト"
      },
      {
        year: "2007年",
        title: "AWSの構築作業"
      }
    ].to_json

    render json: careers
  end
end
