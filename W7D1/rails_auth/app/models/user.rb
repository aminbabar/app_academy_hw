class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: {message: "password cannot be blank!"}
    validates :password, length: {minimum: 10,  allow_nil: true}
    before_validation :ensure_session_token

    def find_by_credentials(username, password)
        user = find_by(username: username)
        if user && BCrypt::Password.new(user.password_digest).is_password?(password)
            return user
        else
            return false
        end
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def password=(arg)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

end
