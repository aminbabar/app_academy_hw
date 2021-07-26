class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: {message: "password cannot be blank!"}
    validates :password, length: {minimum: 10,  allow_nil: true}
    before_validation :ensure_session_token

    

end
