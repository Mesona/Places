# == Schema Information
#
# Table name: places
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  private    :boolean          default(FALSE)
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Place < ApplicationRecord
  validates :title, :owner_id, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    has_many :pages
end
